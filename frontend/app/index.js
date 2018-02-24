require('bootstrap/dist/css/bootstrap.min.css');

import React from 'react'
import { render } from 'react-dom'
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { apiMiddleware } from 'redux-api-middleware'
import { Provider } from 'react-redux'
import App from './app'
import { fetchRandomCat } from './actions/catActions'
import { fetchBreeds } from './actions/breedActions'
import {fetchCatDetail } from './actions/catDetailActions'
import rootReducer from './reducers/index'

const store = createStore(
  rootReducer,
  applyMiddleware(
    apiMiddleware,
    thunkMiddleware
  )
)

store.dispatch(fetchCatDetail(31555507))
//store.dispatch(fetchBreeds())
//store.dispatch(fetchRandomCat())
  .then(() => console.log(store.getState()))

render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('react-app'))

module.hot.accept()
