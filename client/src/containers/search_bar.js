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
    // this.onInputChange = this.onInputChange.bind(this);        
    // this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  // onInputChange(event) {
  //   // this.setState (I don't have it)
  //   this.setState({address: event.target.value});
  // }


  // onFormSubmit(event) {
  //   event.preventDefault();

  //   // // We need to go and fetch weather data
  //   // this.props.fetchTrails(this.state.lat, this.state.lon);

  //   // We need to go and fetch coordinates data
  //   this.props.fetchCoordinates(this.state.address);
  //   // clear search input, will pass it to value in input
  //   // this.setState({ address: '' });
  // }

  // Google autocomplete functions
  handleChange = (address) => {
    this.setState({ address })
  }

  handleSelect = (address) => {
    console.log('handleSelect', address);
    
    geocodeByAddress(address)
      .then(results => {
        getLatLng(results[0]);
        console.log(results[0].formatted_address);
        this.props.fetchCoordinates(results[0].formatted_address);
      })
      .then(latLng => {console.log('Success', latLng)})
      .catch(error => console.error('Error', error))
  }

  render() {
    return (
      <div className='wrap' >
        <div className='search' >
          <PlaceAutoComplete
            value={this.state.address}
            onChange={this.handleChange}
            onSelect={this.handleSelect}
          >
          {({ getInputProps, suggestions, getSuggestionItemProps }) => (
            <div>
              <input
                {...getInputProps({
                  placeholder: 'Search Places ...',
                  className: 'location-search-input',
                  // value: {this.state.address},
                  // onChange: {this.onInputChange}
                })}
              />
              <div className="autocomplete-dropdown-container">
                {suggestions.map(suggestion => {
                  const className = suggestion.active ? 'suggestion-item--active' : 'suggestion-item';
                  // inline style for demonstration purpose
                  const style = suggestion.active
                              ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                              : { backgroundColor: '#ffffff', cursor: 'pointer' };
                  return (
                    <div {...getSuggestionItemProps(suggestion, { className, style })}>
                      <span>{suggestion.description}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          )}
          {/* <form onSubmit={this.onFormSubmit} className='input-group'>
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
          </form> */}
          </PlaceAutoComplete>
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