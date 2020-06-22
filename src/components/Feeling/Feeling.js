import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import {TextField, Button } from '@material-ui/core';




class Feeling extends Component {
  // This component will ask the user their 'feeling'
  // range is any number from 0-5
  state = {
    responseToAdd: {
      feeling: 0
    }
  }

  handleChangeFor = (propertyName, event) => {
    // Manages local state based on user input
    this.setState({
      responseToAdd: {
        ...this.state.responseToAdd,
        [propertyName]: event.target.value
      }
    })
  }


  submitInfo = (event) => {
    console.log(`testetsetsetestset ${this.state}`);
    
    if(this.state.responseToAdd.feeling > 5 || this.state.responseToAdd.feeling < 0){
      // simple function that combines with the require attribute to verify input
      alert('Reponse must be a score between 0-5!')
      return false;
    }

    console.log(`Going to understanding page`);
    event.preventDefault();
    const { dispatch } = this.props;
    dispatch({ type: 'ADD_INFO', payload: this.state.responseToAdd });
    this.props.history.push("/Understanding");
  };

  render() {

    
    return (
      <div>
        <h2>How are you feeling today?</h2>
        <br />
        <p>Please enter a score between 0-5:</p>
        <form onSubmit={this.submitInfo}>
          <TextField
          type="Number"
          required 
          placeholder="How are you feeling?"
          label="Feeling?"
          onChange={(event) => this.handleChangeFor('feeling', event)}
          />
            <br />
            <br />
          <div><Button variant="contained" color="primary" size="small" type="submit">Next</Button></div>
          </form>

      </div>
    );
  }
}

// pull Redux state
// const mapStateToProps = (state) => {
//   return {
//     feedBackReducer: state.feedbackReducer,
//   };
// };

export default withRouter(connect()(Feeling));