import { REQUEST, SUCCESS, FAILURE, CLEAR } from '../actions/catDetailActions'
import { CLEAR_ERROR } from '../actions/clearError'

const initialState= {
  isFetching: false,
  catDetail: {},
  error: null
}

function catDetail(state = initialState, action) {
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
        catDetail: action.payload
    })
    default:
      return state
  }
}

export default catDetail;
