import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../containers/home'
import ListContainer from '../containers/listContainer'
import DetailContainer from '../containers/detailContainer'
import About from './about'

const MainRouter = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/cats' component={ListContainer}/>
      <Route path='/cats/:id' component={DetailContainer}/>
      <Route path='/about' component={About}/>
    </Switch>
  </main>
)

export default MainRouter;
