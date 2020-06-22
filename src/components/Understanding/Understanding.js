import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';



class Understanding extends Component {
  state = {
    reactionToAdd: {
      understanding: ''
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

  handleSubmit = (event) => {
    console.log(`Adding new order to pizzaOrder`);
    const { dispatch } = this.props;
    dispatch({ type: 'ADD_FEELING', payload: this.state.reactionToAdd });
    this.setState({
      ReactionToAdd: {
        feeling: 0,
      }
    })

  }

  render() {


    return (
      <div>
        <h2>How well are you understanding the content?</h2>
        <form>
          <input type="text" placeholder="Understanding?"
            // value={this.state.reactionToAdd.feeling}
            onChange={(event) => this.handleChangeFor('understanding', event)}
          />

          <Link to='/Supported'><button type="submit">Next</button></Link>
        </form>

      </div>
    );
  }
}

export default Understanding;