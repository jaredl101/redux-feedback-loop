import React, { Component } from 'react';

class Success extends Component {


  onClick = (event) => {
    event.preventDefault();
    //dispatch({ type: 'ADD_INFO', payload: this.state.responseToAdd });
    this.props.history.push("/");

  }

  render() {
    return (
      <div>
        <h1>Thank you!</h1>
        <br />
        <button onClick={this.onClick} > Leave New Feedback</button>

     </div >
    );
  }
}

export default Success;
