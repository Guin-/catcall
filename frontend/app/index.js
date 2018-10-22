require('bootstrap/dist/css/bootstrap.min.css');
require('bootstrap/dist/fonts/glyphicons-halflings-regular.woff');

import React from 'react'
import "babel-polyfill";
import { render } from 'react-dom'
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { apiMiddleware } from 'redux-api-middleware'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './app'
import ScrollToTop from '../app/components/scrollToTop'
import { fetchBreeds } from './actions/breedActions'
import { fetchCatDetail } from './actions/catDetailActions'
import { fetchCatList } from './actions/catListActions'
import { persistZip } from './actions/persistZip'
import rootReducer from './reducers/index'
import glyphicons from '../static/glyphicons-halfings-regular.woff'
import '../app/styles/main.css'

const store = createStore(
  rootReducer,
  applyMiddleware(
    apiMiddleware,
    thunkMiddleware
  )
)

render(
    <Provider store={store}>
      <Router>
        <ScrollToTop>
          <App />
        </ScrollToTop>
      </Router>
    </Provider>,
  document.getElementById('react-app'))

module.hot.accept()

