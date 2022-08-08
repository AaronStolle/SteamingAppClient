import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from "redux-thunk";

import App from './components/App.js';
import reducers from './reducers'

//const composeEnhancers = window.__REDUX_DEVTOOLS_ENTENSION_COMPOSE__ || compose

// here we are using composeWithDevTools from npm package to use the devtool

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.querySelector('#root'))