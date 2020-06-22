import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { TextField, Button } from '@material-ui/core';


class Supported extends Component {
  state = {
    responseToAdd: {
      support: 0
    }
  }

  handleChangeFor = (propertyName, event) => {
    this.setState({
      responseToAdd: {
        ...this.state.responseToAdd,
        [propertyName]: event.target.value
      }
    })
  }

  submitInfo = (event) => {
    // entry validation is done by the required attribute
    if (this.state.responseToAdd.support > 5 || this.state.responseToAdd.support < 0) {
      alert('Reponse must be a score between 0-5!')
      return false;
    }
    console.log(`Going to comments page`);
    event.preventDefault();
    const { dispatch } = this.props;
    dispatch({ type: 'ADD_INFO', payload: this.state.responseToAdd });
    this.props.history.push("/Comments");
  };


  render() {
    return (
      <div>
        <h2>How well are you being supported?</h2>
        <br />
        <p>Please enter a score between 0-5:</p>
        <form onSubmit={this.submitInfo}>
          <TextField 
          type="number" placeholder="supported?" required label="Supported?"
            // value={this.state.reactionToAdd.feeling}
            onChange={(event) => this.handleChangeFor('support', event)}
          />
          <br />
          <br />

          <div><Button variant="contained" color="primary" size="small" type="submit">Next</Button></div>
        </form>

      </div>
    );
  }
}

export default withRouter(connect()(Supported));