import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import axios from 'axios';
import { Button } from '@material-ui/core';

class Review extends Component {
  // This component is the screen they will see before submitting data.
  // If this page is left, data will not be sent.

  handleSubmit = (event) => {
    // handleSubmit sends the users data to the database
    //alert('Thanks for taking the survey! Feel free to take another one')
    event.preventDefault();
    let infoToSend = 
    {
      feeling: this.props.feedback.feeling,
      understanding: this.props.feedback.understanding,
      support: this.props.feedback.support,
      comments: this.props.feedback.comments,
    }
    axios.post('/api/feedback', infoToSend)
      .then(() => {
        this.props.history.push("/Success");
      }).catch((error) => {
        console.log('There was an error', error)
      });
  }

  render() { 
    return (
      <div>
        <h2>Any comments you want to leave?</h2>
        <form onSubmit={this.handleSubmit}>
         
            <p>Feelings: {this.props.feedback.feeling} </p>
            <p>Understanding: {this.props.feedback.understanding}</p>
            <p>Support: {this.props.feedback.support}</p>
            <p>Comments: {this.props.feedback.comments}</p>
         

          <div><Button variant="contained" color="secondary" size="small" type="submit">Submit</Button></div>
        </form>

      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    feedback: state.feedbackReducer
  }
}

export default withRouter(connect(mapStateToProps)(Review));