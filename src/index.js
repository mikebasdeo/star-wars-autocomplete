import React from 'react'
import ReactDOM from 'react-dom'

import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import reducer from './reducer'

import FetchCharacters from './FetchCharacters'
import Characters from './Characters'
// import thunk from 'redux-thunk'
import { createEpicMiddleware } from 'redux-observable'
import rootEpic from './fetch-character-epic'

import './styles.scss'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const epicMiddleware = createEpicMiddleware()

// const store = createStore(reducer);

const store = createStore(
  reducer,
  composeEnhancer(applyMiddleware(epicMiddleware)),
)

epicMiddleware.run(rootEpic)

const Application = () => {
  return (
    <div className="Application">
      <h1>Star Wars Autocomplete</h1>
      <FetchCharacters />
      <Characters />
    </div>
  )
}

const rootElement = document.getElementById('root')

ReactDOM.render(
  <Provider store={store}>
    <Application />
  </Provider>,
  rootElement,
)
