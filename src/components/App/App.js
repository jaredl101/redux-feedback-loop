import React, { Component } from 'react';
import Header from './../Header/Header';
//import Comments from './../Comments/Comments';
import Feeling from './../Feeling/Feeling';

import axios from 'axios';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header />
       <Feeling />
      </div>
    );
  }
}

export default App;
