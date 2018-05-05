import { combineReducers } from 'redux'
import breedReducer from './breedReducer'
import catDetail from './catDetailReducer'
import catList from './catListReducer'
import zipcode from './zipcodeReducer'

export default combineReducers({
  breeds: breedReducer,
  catDetail: catDetail,
  catList: catList,
  zipcode: zipcode
})
