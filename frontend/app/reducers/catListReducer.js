import { REQUEST, SUCCESS, FAILURE } from '../actions/catListActions'

const initialState= {
  isFetching: false,
  catList: []
}

function catList(state = initialState, action) {
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
        catList: action.payload
    })
    default:
      return state
  }
}

export default catList;
