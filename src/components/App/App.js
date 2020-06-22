import React, { Component } from 'react';
import Header from './../Header/Header';
import Landing from './../Landing/Landing';
//import Comments from './../Comments/Comments';
import Feeling from './../Feeling/Feeling';
import { connect } from 'react-redux';
import { HashRouter as Router, Link, Route } from 'react-router-dom';


import axios from 'axios';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path='/' component={Landing} />
          <Route exact path='/Feeling' component={Feeling} />
        </div>
      </Router>
    );
  }
}

export default App;
