import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";
import axios from 'axios';




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
    const { test } = this.props.feedback;
    console.log(`propsfsefsefsefsfesefsef are: ${test}`);
    console.log(`Adding new order to pizzaOrder`);
    alert('Thanks for taking the survey! Feel free to take another one')
    event.preventDefault();
    this.props.history.push("/");
    let infoToSend = 
    {
      feeling: this.props.feedback.feeling,
      understanding: this.props.feedback.understanding,
      support: this.props.feedback.support,
      comments: this.props.feedback.comments,
    }
    axios.post('/api/feedback', infoToSend)
      .then(() => {
        // clear our local state

        // const { dispatch } = this.props
        // dispatch({ type: `REMOVE_PIZZAS`, payload: [] })
        // dispatch({ type: `ADD_INFO`, payload: {} })
        // this.refreshPizzas();
      }).catch((error) => {
        console.log('There was an error', error)
      });
  }

  render() {
    // console.log(`this.props.feedback is: ${this.props.feedback}`);
    // for(let i = 0; i < this.props.feedback.length; i++){
    //   console.log(`prop loop is: ${this.props.feedback[i].feeling}`);
      
    // }
    // {this.props.feedback.map(feedback => feedback ={feedback})}
    
    // const { feedback } = this.props.feedback;
    // console.log(`props are: ${feedback}`);
    // const newFeedback = [...this.props.feedback]
    // console.log(`newFeedback is ${newFeedback}`);

    //const { feedback } = this.props.feedback;
    console.log(`TEST: ${this.props.feedback.feeling}`);
    
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