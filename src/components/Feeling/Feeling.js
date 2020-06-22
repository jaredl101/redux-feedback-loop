import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";



class Feeling extends Component {
  state = {
    reactionToAdd: {
      feeling: ''
    }
  }

  handleChangeFor = (propertyName) => (event) => {
    this.setState({
      reactionToAdd: {
        ...this.state.reactionToAdd,
        [propertyName]: event.target.value,
      }
    });
  }

  submitInfo = (event) => {
    // entry validation is done by the required attribute
    event.preventDefault();
    this.props.history.push("/Understanding");
  };

  render() {

    
    return (
      <div>
        <h2>How are you feeling today?</h2>
        <form onSubmit={this.submitInfo}>
          <input type="text" required placeholder="How are you feeling?"
            // value={this.state.reactionToAdd.feeling}
            onChange={(event) => this.handleChangeFor('feeling', event)}
          />
            
        <button type="submit">Next</button>
          </form>

      </div>
    );
  }
}

export default withRouter(Feeling);