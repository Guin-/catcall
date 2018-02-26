import React from 'react'
import { Route, Switch } from 'react-router-dom'
import  Home from './home'
import About from './about'

const MainRouter = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
    </Switch>
  </main>
)

export default MainRouter;
