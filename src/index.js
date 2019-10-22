import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App1 from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, applyMiddleware, combineReducers } from 'redux';
import {Provider} from 'react-redux'
import {ProductProvider} from "./context";
import Products from './reducer/productsStore'

const store=createStore(Products)
ReactDOM.render(
  <Provider  store={store}>
    <Router>
      <App1 />
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
