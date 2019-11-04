require('bootstrap/dist/css/bootstrap.min.css');

import React from 'react'
import "babel-polyfill";
import { render } from 'react-dom'
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { apiMiddleware } from 'redux-api-middleware'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './app'
import rootReducer from './reducers/index'
import '../app/styles/main.css'

const store = createStore(
  rootReducer,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(
    apiMiddleware,
    thunkMiddleware
  )
)

render(
    <Provider store={store}>
      <Router>
          <App />
      </Router>
    </Provider>,
  document.getElementById('react-app'))

module.hot.accept()

