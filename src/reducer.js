import { combineReducers } from 'redux'

import { FETCH_CHARACTERS_FULFILLED } from './actions'

const charactersReducer = (characters = [], action) => {
  console.log(`completed: ${JSON.stringify()}`)
  if (action.type === FETCH_CHARACTERS_FULFILLED) {
    return action.payload
  }
  return characters
}

export default combineReducers({
  characters: charactersReducer,
})
