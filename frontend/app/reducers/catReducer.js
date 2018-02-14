import { REQUEST, SUCCESS, FAILURE } from '../actions/catActions'

const initialState= {
  isFetching: false,
  randomCat: {}
}

function randomCat(state = initialState, action) {
  switch (action.type) {
    case REQUEST:
      return Object.assign({}, state, {
        isFetching: true
    })
    case FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.payload
    })
    case SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        randomCat: action.payload
    })
    default:
      return state
  }
}

export default randomCat;
