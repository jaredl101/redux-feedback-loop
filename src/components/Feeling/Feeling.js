import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";



class Feeling extends Component {
  state = {
    responseToAdd: {
      feeling: 0
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
    console.log(`testetsetsetestset ${this.state}`);
    
    if(this.state.responseToAdd.feeling > 5 || this.state.responseToAdd.feeling < 0){
      alert('Reponse must be a score between 0-5!')
      return false;
    }
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
        <br />
        <p>Please enter a score between 0-5:</p>
        <form onSubmit={this.submitInfo}>
          <input type="number" 
          required 
          placeholder="How are you feeling?"
            // min="1" max="5"
            // style="width: 70px"
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