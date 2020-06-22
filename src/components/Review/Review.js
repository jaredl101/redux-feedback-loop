import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import axios from 'axios';

class Review extends Component {

  handleSubmit = (event) => {

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
         <ul>
            <p>Feelings: {this.props.feedback.feeling} </p>
            <p>Understanding: {this.props.feedback.understanding}</p>
            <p>Support: {this.props.feedback.support}</p>
            <p>Comments: {this.props.feedback.comments}</p>
         </ul>

          <button type="submit">Submit</button>
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