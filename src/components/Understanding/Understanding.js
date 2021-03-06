import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { TextField, Button } from '@material-ui/core';



class Understanding extends Component {
  // This component will ask the user their 'understanding'
  // range is any number from 0-5
  state = {
    responseToAdd: {
      understanding: 0
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
    if (this.state.responseToAdd.understanding > 5 || this.state.responseToAdd.understanding < 0) {
       // simple function that combines with the require attribute to verify input
      alert('Reponse must be a score between 0-5!')
      return false;
    }
    console.log(`Going to supported page`);
    event.preventDefault();
    const { dispatch } = this.props;
    dispatch({ type: 'ADD_INFO', payload: this.state.responseToAdd });
    this.props.history.push("/Supported");
  };

  render() {


    return (
      <div>
        <h2>How well are you understanding the content?</h2>
        <br />
        <p>Please enter a score between 0-5:</p>
        <form onSubmit={this.submitInfo}>
          <TextField
          type="number" placeholder="Understanding?" required label="Understanding?"
            // value={this.state.reactionToAdd.feeling}
            onChange={(event) => this.handleChangeFor('understanding', event)}
          />
          <br />
          <br />
          <div><Button variant="contained" color="primary" size="small" type="submit">Next</Button></div>
        </form>

      </div>
    );
  }
}


export default withRouter(connect()(Understanding));