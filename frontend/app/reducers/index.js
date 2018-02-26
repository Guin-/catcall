import { combineReducers } from 'redux'
import randomCat from './catReducer'
import breedReducer from './breedReducer'
import catDetail from './catDetailReducer'
import catList from './catListReducer'

export default combineReducers({
  randomCat: randomCat,
  breeds: breedReducer,
  catDetail: catDetail
  catList: catList
})
