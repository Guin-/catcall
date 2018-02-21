import { combineReducers } from 'redux'
import randomCat from './catReducer'
import breedReducer from './breedReducer'

export default combineReducers({
  randomCat: randomCat,
  breeds: breedReducer
})
