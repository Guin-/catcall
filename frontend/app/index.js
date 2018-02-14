require('bootstrap/dist/css/bootstrap.min.css');

import React from 'react'
import { render } from 'react-dom'
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { apiMiddleware } from 'redux-api-middleware'
import { Provider } from 'react-redux'
import App from './app'
import randomCat from './reducers/catReducer'
import { fetchRandomCat } from './actions/catActions'


const store = createStore(
  randomCat,
  applyMiddleware(
    apiMiddleware,
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
