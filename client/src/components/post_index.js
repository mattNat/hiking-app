import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCoordinates } from '../actions';
import _ from 'lodash';
import SearchBar from '../containers/search_bar';
import Sidebar from './sidebar';
import ReactStars from 'react-stars';

import './post_index.css';

// when are we going to call reaction creator
// react lifecycle method
class PostsIndex extends Component {
  // one time loading procedure
  // ideal for data loading
  componentDidMount() {
    if (!this.props.fetchCoordinates) {
      this.props.fetchCoordinates();
    }
  }

  renderPosts() {
    const coor = (Object.values(this.props.coordinates)[0]) || {};

    return _.map(coor.trails, trail => {
      // default to this image if not provided by API
      if (trail.imgSmallMed === '') {
        trail.imgSmallMed = 'https://i.pinimg.com/originals/a4/b0/c4/a4b0c4fc44ec75c55d7d40a1d3994435.jpg';
      }
      
      let name = null;
    
      // associate color scheme with trail difficulty
      switch (trail.difficulty) {
        case 'green':
          name = 'Very Easy'; break;
        case 'greenBlue':
          name = 'Easy'; break;
        case 'blue':
          name = 'Intermediate'; break;
        case 'blueBlack':
          name = 'Challenging'; break;
        case 'black':
          name = 'Very Challenging'; break;
        case 'dblack':
          name = 'Extremely Challenging'; break;
        default:
          name = 'Not Provided';
      }

      return (
        <div key={trail.id.toString()} className='row' >
          <div className='list-item col-6 col-s-6'>
            <img className='portrait' src= {trail.imgSmallMed}  alt={trail.name} width='300px' /> <br/>

            
            <Link to={`/posts/${trail.id}`} style={{ textDecoration: 'none' }} className='save-hike' > 
              Save Trail
            </Link> <br/>
              <h4 className='trail-name' > {trail.name} </h4><br/>
            <p>
              <b>Location:</b> {trail.location} <br/>
              <b>Lat/Long:</b> {trail.latitude}, {trail.longitude} <br/>              
              <b>Length (round-trip):</b> {trail.length} mi<br/>
              <b>Ascent:</b> {trail.ascent} ft<br/>
              <b>Condition:</b> {trail.conditionStatus} <br/>
              <b>Difficulty:</b> {`${name}`}
            </p>
              <span className='top' >
                <ReactStars 
                  value={trail.stars}
                  size={24}
                  color2={'#ffd700'}
                  edit={false}
                />
                {trail.starVotes} votes <br/>
              </span>
          </div>
        </div>
      );
    });
  }
  
  render() {
    return (
      <div className='search-box' >
        <Sidebar />
        <div className='search-results'>
            <h3>
              Find your next adventure...
            </h3>
            <hr />
            <SearchBar />
            <div className='wrapper' >
              <ul className='itemHolder' >
                {this.renderPosts()}
              </ul>
            </div>
        </div>
      </div>
    );
  }
}

// lists of post get inside component
function mapsStateToProps(state) {
  return { 
    posts: state.posts,
    trails: state.trails,
    coordinates: state.coordinates
  };
}

// null - we are not passing mapsStateToProps
// fetchPosts is identical to mapDispatchToProps
// still have access to this.props.fetch.posts
export default connect(mapsStateToProps, { fetchCoordinates })(PostsIndex);