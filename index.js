import React, { Component } from 'react';
import { render } from 'react-dom';
import rootReducer from './src/system/rootReducer';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './App';

const store = createStore(rootReducer, composeWithDevTools());

render(
  <Provider store={store}>
  <App />
  </Provider>, 
  document.getElementById('root'));
