import React, { Component } from 'react';
import { connect } from 'react-redux';
// clearly identical to anchor tag
import { Link } from 'react-router-dom';
import { fetchTrails, fetchCoordinates } from '../actions';
import _ from 'lodash';
import SearchBar from '../containers/search_bar';
import Sidebar from './sidebar';
import ReactStars from 'react-stars';

import './post_index.css';
// import './float-grid.css';


// when are we going to call reaction creator
// react lifecycle method
class PostsIndex extends Component {
  // one time loading procedure
  // ideal for data loading
  componentDidMount() {

    if (!this.props.fetchCoordinates) {
      // feed lines below
      this.props.fetchCoordinates();
    }
  }

  renderPosts() {
    const coor = (Object.values(this.props.coordinates)[0]) || {};
    
    const myTrails = this.props.trails[0] || {};

    
    console.log('From post_index.js:', myTrails.trails);

    // OLD WAY USING LODASH
    return _.map(coor.trails, trail => {

      if (trail.imgSmallMed === '') {
        trail.imgSmallMed = 'https://i.pinimg.com/originals/a4/b0/c4/a4b0c4fc44ec75c55d7d40a1d3994435.jpg';
      }
      
      let name = null;

      if (trail.difficulty === 'green') {
        name = 'Very Easy';
        // imgLink = 'https://cdn.apstatic.com/img/diff/green.svg';
      } else if (trail.difficulty === 'greenBlue') {
        name = 'Easy';
        // imgLink = 'https://cdn.apstatic.com/img/diff/greenBlue.svg';
      } else if (trail.difficulty === 'blue') {
        name = 'Intermediate';
        // imgLink = 'https://cdn.apstatic.com/img/diff/blue.svg';
      } else if (trail.difficulty === 'blueBlack') {
        name = 'Challenging';
        // imgLink = 'https://cdn.apstatic.com/img/diff/blueBlack.svg';
      } else if (trail.difficulty === 'black') {
        name = 'Very Challenging';
        // imgLink = 'https://cdn.apstatic.com/img/diff/blueBlack.svg';
      } else if (trail.difficulty === 'dblack') {
        name = 'Extremely Challenging';
        // imgLink = 'https://cdn.apstatic.com/img/diff/dblack.svg';
      } else {
        name = 'Not Provided'
        // imgLink = 'https://cdn.apstatic.com/img/diff/green.svg';        
      }

      return (
        
        // OLD
        // <li key={trail.id.toString()} >
        //   <div className='list-item' >
        //     <img className='portrait' src= {trail.imgSmallMed}  alt={trail.name} width='300px' /> <br/>
        //     <Link to={`/posts/${trail.id}`} >
        //       Save this hike!
        //     </Link> <br/>
        //     Name: {trail.name} <br/>
        //     Length (round-trip): {trail.length} mi<br/>
        //     Condition: {trail.conditionStatus} <br/>
        //     Stars: {trail.stars} out of {trail.starVotes} votes <br/>
        //   </div>
        // </li>

        // NEW
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
              {/* (<img className='diff-img' src={`${imgLink}`}  alt={`${name}`} width='20px' />) <br/> */}
            </p>
            {/* <span className='diff-block' >
            </span> */}
              <span className='top' >
                <ReactStars 
                  // count={5}
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
    // will console log twice
    // console.log(this.props.posts);
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
export default connect(mapsStateToProps, { fetchTrails, fetchCoordinates })(PostsIndex);