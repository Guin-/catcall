import { CLEAR_ERROR } from '../actions/clearError'

const intitialState = {
  error: null
}

function error(state = intitialState, action){
  switch (action.type) {
    case CLEAR_ERROR:
      return Object.assign({}, state, {
        error: null
    })
    default:
      return state
  }
}

export default error
