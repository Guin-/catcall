import { REQUEST, SUCCESS, FAILURE, CLEAR } from '../actions/catListActions'
import { CLEAR_ERROR } from '../actions/clearError'

const initialState= {
  isFetching: false,
  catList: [],
  error: null
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
    case CLEAR_ERROR:
      return Object.assign({}, state, {
       error: null
    })
    case CLEAR:
      return Object.assign({}, state, {
       catList: []
    })
    case SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        // concat data from each new fetch to the catlist state instead of replacing it
        catList: [ ...state.catList, ...action.payload ]
    })
    default:
      return state
  }
}

export default catList;
