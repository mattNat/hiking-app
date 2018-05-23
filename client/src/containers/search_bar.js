import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCoordinates } from '../actions/index';
import PlaceAutoComplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

import './search_bar.css'

/*
set controlled state
*/
class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      address: ''
    };

    // this (which is an instance of search bar)
    this.onInputChange = this.onInputChange.bind(this);        
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    // this.setState (I don't have it)
    this.setState({address: event.target.value});
  }


  onFormSubmit(event) {
    event.preventDefault();

    // // We need to go and fetch weather data
    // this.props.fetchTrails(this.state.lat, this.state.lon);

    // We need to go and fetch coordinates data
    this.props.fetchCoordinates(this.state.address);
    // clear search input, will pass it to value in input
    // this.setState({ address: '' });
  }

  render() {
    return (
      <div className='wrap' >
        <div className='search' >

          <form onSubmit={this.onFormSubmit} className='input-group'>
            <input 
              placeholder='Address or location...'
              className='searchTerm'
              value={this.state.address}
              onChange={this.onInputChange}
            />
            <span className='input-group-btn'>
              <button type='submit' className='searchButton'>
                <i className="fa fa-search"></i>
              </button>
            </span>
          </form>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCoordinates }, dispatch);
}

// pass null, redux does not need state here
// gives access to this.props.fetchWeather
export default connect(null, mapDispatchToProps)(SearchBar);