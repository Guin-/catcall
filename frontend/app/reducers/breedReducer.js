import { REQUEST, SUCCESS, FAILURE } from '../actions/breedActions'

const initialState= {
  isFetching: false,
  breeds: []
}

function catBreeds(state = initialState, action) {
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
        breeds: action.payload
    })
    default:
      return state
  }
}

export default catBreeds;
