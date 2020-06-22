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
    newState = { ...newState, ...action.payload };
  }
  return newState;
};


const storeInstance = createStore(
  combineReducers({
    feedbackReducer,
  }),
  applyMiddleware(logger),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
