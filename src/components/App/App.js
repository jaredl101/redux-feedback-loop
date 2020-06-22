import React, { Component } from 'react';
import Header from './../Header/Header';
import Landing from './../Landing/Landing';
import Feeling from './../Feeling/Feeling';
import Understanding from './../Understanding/Understanding';
import Supported from './../Supported/Supported';
import Comments from './../Comments/Comments';
import Review from './../Review/Review';
import Success from './../Success/Success';

import { connect } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';


//import axios from 'axios';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path='/' component={Landing} />
          <Route exact path='/Feeling' component={Feeling} />
          <Route exact path='/Understanding' component={Understanding} />
          <Route exact path='/Supported' component={Supported} />
          <Route exact path='/Comments' component={Comments} />
          <Route exact path='/Review' component={Review} />
          <Route exact path='/Success' component={Success} />
        </div>
      </Router>
    );
  }
}

export default connect()(App);
