import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";



class Understanding extends Component {
  state = {
    responseToAdd: {
      understanding: 0
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
        <form onSubmit={this.submitInfo}>
          <input type="text" placeholder="Understanding?" required
            // value={this.state.reactionToAdd.feeling}
            onChange={(event) => this.handleChangeFor('understanding', event)}
          />

          <button type="submit">Next</button>
        </form>

      </div>
    );
  }
}


export default withRouter(connect()(Understanding));