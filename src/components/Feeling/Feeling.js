import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";



class Feeling extends Component {
  state = {
    
      feeling: 0
  
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
        <form onSubmit={this.submitInfo}>
          <input type="text" 
          required 
          placeholder="How are you feeling?"
          //defaultValue={this.state.responseToAdd.feeling} 
          //value={this.state.responseToAdd.feeling}
          onChange={(event) => this.handleChangeFor('feeling', event)}
          />
            
        <button type="submit">Next</button>
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