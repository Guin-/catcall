import { RSAA } from 'redux-api-middleware'
import { cleanCatData } from '../actions/catDetailActions'

export const REQUEST = 'RANDOM_CAT_REQUEST'
export const SUCCESS = 'RANDOM_CAT_SUCCESS'
export const FAILURE = 'RANDOM_CAT_FAILURE'

export function fetchRandomCat() {
  return {
    [RSAA]: {
      endpoint: '/api/pet.getRandom?output=full',
      method: 'GET',
      types: [
        REQUEST,
        {
          type: SUCCESS,
          payload: (action, state, res) => {
            return res.json().then(json => json['petfinder']['pet'])
              .then(pet => cleanCatData(pet))
          }
        },
        FAILURE
      ]
    }
  }
}
