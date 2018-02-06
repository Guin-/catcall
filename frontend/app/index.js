require('bootstrap/dist/css/bootstrap.min.css');

import React from 'react'
import { render } from 'react-dom'
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import App from './app'
import randomCat from './reducers/index'
import { fetchRandomCat } from './actions/index'

const store = createStore(
  randomCat,
  applyMiddleware(
    thunkMiddleware
  )
)

store.dispatch(fetchRandomCat())
  .then(() => console.log(store.getState()))


render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('react-app'))

module.hot.accept()
