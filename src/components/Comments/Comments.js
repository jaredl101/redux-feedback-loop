import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";




class Comments extends Component {
  state = {
      comments: ''
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
          <input type="text" placeholder="Comments"
            // value={this.state.reactionToAdd.feeling}
            onChange={(event) => this.handleChangeFor('comments', event)}
          />

          <button type="submit">Next</button>
        </form>

      </div>
    );
  }
}

export default withRouter(connect()(Comments));