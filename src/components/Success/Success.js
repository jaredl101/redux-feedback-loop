import React, { Component } from 'react';
import { Button } from '@material-ui/core';

class Success extends Component {
  // This component is the page the user will see upon successful data sent to server

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
        <Button variant="contained" color="primary" size="medium" onClick={this.onClick} > Leave New Feedback</Button>

     </div >
    );
  }
}

export default Success;
