import { RANDOM_CAT_REQUEST, RANDOM_CAT_SUCCESS, RANDOM_CAT_FAILURE, RESET_ERROR} from '../actions/'

function randomCat(state = {
  isFetching: false,
  randomCat: {},
  error: null
}, action) {
  switch (action.type) {
    case RANDOM_CAT_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
    })
    case RANDOM_CAT_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error
    })
    case RANDOM_CAT_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        randomCat: action.randomCat
    })
    case RESET_ERROR:
      return Object.assign({}, state, {
        error: null
    })
    default:
      return state
  }
}

export default randomCat;
