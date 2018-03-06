import { REQUEST, SUCCESS, FAILURE } from '../actions/catDetailActions'

const initialState= {
  isFetching: false,
  catDetail: {}
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
