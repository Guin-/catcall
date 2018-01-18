import React from 'react'
import { render } from 'react-dom'
import App from './app'


render(
    <div>
      <App />
    </div>,
  document.getElementById('react-app'))

module.hot.accept()
