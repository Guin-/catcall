import { PERSIST_ZIP } from '../actions/persistZip'

const intitialState = {
  zipcode: ''
}

function zipcode(state = intitialState, action){
  switch (action.type) {
    case PERSIST_ZIP:
      return Object.assign({}, state, {
        zipcode: action.zipcode
    })
    default:
      return state
  }
}

export default zipcode
