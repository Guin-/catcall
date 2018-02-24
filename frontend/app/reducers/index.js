import { combineReducers } from 'redux'
import randomCat from './catReducer'
import breedReducer from './breedReducer'
import catDetail from './catDetailReducer'

export default combineReducers({
  randomCat: randomCat,
  breeds: breedReducer,
  catDetail: catDetail
})
