import { RSAA } from 'redux-api-middleware'
import { cleanCatData } from '../actions/catDetailActions'

export const REQUEST = 'CAT_LIST_REQUEST'
export const SUCCESS = 'CAT_LIST_SUCCESS'
export const FAILURE = 'CAT_LIST_FAILURE'
export const CLEAR = 'CAT_LIST_CLEAR'

export function fetchCatList(location, offset) {
  return {
    [RSAA]: {
      endpoint: '/api/pet.find?&location=' + location + '&offset=' +  offset,
      method: 'GET',
      types: [
        REQUEST,
        {
          type: SUCCESS,
          payload: (action, state, res) => {
            return res.json().then(json => json['petfinder']['pets']['pet'])
              .then(pets => _.map(pets, cleanCatData))
          }
        },
        FAILURE
      ]
    }
  }
}

export function clearCatList(){
  return {type: CLEAR}
}
