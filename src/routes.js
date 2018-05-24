import React from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import SearchPage from "./components/SearchPage";
import Question from './components/Question'
import Root from './components/Root'
export default () =>
  <BrowserRouter>
    <Root>
      <Route path='/' exact component={SearchPage}/>
      <Route path='/search' exact component={SearchPage}/>
      <Route path='/question/:questionID' component={Question}/>
    </Root>
  </BrowserRouter>

