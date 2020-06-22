import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";



class Review extends Component {
  state = {
    reactionToAdd: {
      feelings: '',
      understanding: '',
      support: '',
      comments: ''
    }
  }



  handleSubmit = (event) => {
    console.log(`Adding new order to pizzaOrder`);
    alert('Thanks for taking the survey! Feel free to take another one')
    event.preventDefault();
    this.props.history.push("/");
  //   const { dispatch } = this.props;
  //   dispatch({ type: 'ADD_FEELING', payload: this.state.reactionToAdd });
  //   this.setState({
  //     ReactionToAdd: {
  //       feeling: 0,
  //     }
  //   })

 }

  render() {


    return (
      <div>
        <h2>Any comments you want to leave?</h2>
        <form onSubmit={this.handleSubmit}>
         <ul>
            <p>Feelings: </p>
            <p>Understanding: </p>
            <p>Support: </p>
            <p>Comments: </p>
         </ul>

          <button type="submit">Submit</button>
        </form>

      </div>
    );
  }
}

export default withRouter(Review);