import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { TextField, Button } from '@material-ui/core';

class Comments extends Component {
  // This component will ask the user if they would like to add any comments
  // Can be empty
  state = {
      comments: ''
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
    // submits the users info, can be empty
    console.log(`Going to review page`);
    event.preventDefault();
    const { dispatch } = this.props;
    dispatch({ type: 'ADD_INFO', payload: this.state.responseToAdd });
    this.props.history.push("/Review");

  }

  render() {
    return (
      <div>
        <h2>Any comments you want to leave?</h2>
        <form onSubmit={this.submitInfo}>
          <TextField 
          type="text" placeholder="Comments"
            // value={this.state.reactionToAdd.feeling}
            onChange={(event) => this.handleChangeFor('comments', event)}
          />
          <br />
          <br />

          <div><Button variant="contained" color="primary" size="small" type="submit">Next</Button></div>
        </form>

      </div>
    );
  }
}

export default withRouter(connect()(Comments));