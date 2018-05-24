import React from 'react'

import ReactDOM from 'react-dom'
import Routes from './routes'
import {Provider} from 'react-redux'
import {createStore, combineReducers, compose} from 'redux'

import * as reducers from 'reducers'
import './lib/fonts'
import './stylesheets/main.pcss'

import DevTools from './devtools.js'

const store = createStore(combineReducers(
  Object.assign({}, reducers)
), compose(
  DevTools.instrument()
))

ReactDOM.render(
  <div className='font-opensans'>
    <Provider store={store}>
      <Routes/>
    </Provider>
    <DevTools store={store}/>
  </div>, document.getElementById('root'))
