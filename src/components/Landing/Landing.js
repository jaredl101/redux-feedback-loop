import React, { Component } from 'react';
import { HashRouter as Router, Link, Route } from 'react-router-dom';


class Landing extends Component {
  render() {
    return (
      <div>
        <h3>Click to begin the survey!</h3>
        <br />
        <Link to='/Feeling'><button type="submit">Begin</button></Link>
      </div>
    );
  }
}

export default Landing;
