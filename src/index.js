import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import logger from 'redux-logger';

// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const feedbackReducer = (state = {  }, action) => {
  let newState = { ...state };
  if (action.type === "ADD_INFO") {
    // payload need to be an object containing all of the customer info
    newState = { ...newState, ...action.payload };
  }
  return newState;
};

// The store only accepts one reducer
const storeInstance = createStore(
  // so we have to combine them first
  combineReducers({
    feedbackReducer,
  }),
  applyMiddleware(logger),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
