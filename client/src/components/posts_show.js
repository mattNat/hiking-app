import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchTrail, createPost } from '../actions';
import _ from 'lodash';

import RenderDatePicker from './date_picker';
import './posts_show.css'

class PostsShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchTrail(id);
  }

  renderField(field) {
    // es6 destructure
    const { meta } = field;

    const className = `form-group ${meta.touched && meta.error ? 'has-danger' : ''}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className='form-control'
          type='text'
          {...field.input}
        />
        {/* add ternary operation to not display error at pristine condition */}
        <div className='text-help'>
          {meta.touched ? meta.error : ''}
        </div>
      </div>
    )
  }

  onSubmit(values) {
    const trailData = ((Object.values(this.props.trail.undefined)[0])[0]);
    const submitData = Object.assign({}, values, trailData);
  
    // must match one of the routes defined in app
    // only attempt nav only after post has been created
    // callback function created, account for in reducer

    // POST TO SERVER && GO BACK TO SEARCH PAGE
    this.props.createPost(submitData, () => {
      this.props.history.push('/homepage');
    });
  };

  render() {
    const { handleSubmit } = this.props;
    console.log(this.props);

    const myTrail = this.props.trail.undefined || {};
    console.log((myTrail));
    
    if (!myTrail) {
      return <div>Loading...</div>
    }

    return _.map(myTrail.trails, trail => {
      // console.log(trail);
     
      return (
        <div key={trail.id.toString()}>
          <div className='form-main' >
            <div className='form' >
              <form className='save-form' onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <h3>Register Hiking Trail</h3>
                <Field
                  label='Group/Individual Name(s)'
                  name='user'
                  component={this.renderField}
                />
                <Field
                  label='Comment'
                  name='comment'
                  component={this.renderField}
                />
                <div className='set-date'>Date</div>
                <Field
                  component={RenderDatePicker}
                  label='Date'
                  name='date'
                  dateFormat="DD.MM.YYYY" 
                  showYearDropdown="{true}"
                />
                <button
                  type='submit' className='btn btn-primary'>Save
                </button>
                <Link to='/homepage' className='btn btn-danger' style={{ textDecoration: 'none' }}>Cancel</Link>
              </form>
            </div>
          </div>

          <h2>Name: {trail.name}</h2>
          <h3>Location: {trail.location} </h3>
          <p>{trail.summary}</p>
          <h4>Trail Statistics:</h4>
          <ul className='list-group-item' key={trail.name + ' stats'} >
            <li>Length (round-trip): {trail.length} mi </li>
            <li>Stars: {trail.stars} out of {trail.starVotes} votes </li>
            <li>Ascent: {trail.ascent} ft </li>
            <li>Low: {trail.low} ft</li>
            <li>High: {trail.high} ft</li>
          </ul>
          <h4>Trail Condition:</h4>
          <ul className='list-group-item' key={trail.name + ' condition'} >
            <li>Date checked: {trail.conditionDate} </li>
            <li>Status: {trail.conditionStatus} </li>
            <li>Details: {trail.conditionDetails}</li>
          </ul>
          <img className='id-img' src= {trail.imgMedium}  alt={trail.name} />
        </div>
      );
    });

  }
}

// destructuring...just give me the list of posts
function mapStateToProps(state) {
  return { trail: state.trail }
}

// wire up like connect helper
export default reduxForm({
  // validate,
  // name of the form
  form: 'PostsNewForm'
})(
  connect(mapStateToProps, { fetchTrail, createPost })(PostsShow)
);