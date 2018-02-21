import { RSAA } from 'redux-api-middleware'
import { map } from 'lodash'

export const REQUEST = 'BREEDS_LIST_REQUEST'
export const SUCCESS = 'BREEDS_LIST_SUCCESS'
export const FAILURE = 'BREEDS_LIST_FAILURE'

function cleanBreedList(json) {
  let result = _.map(json, '$t')
  return result
}


export function fetchBreeds() {
  return {
    [RSAA]: {
      endpoint: '/api/breed.list?&animal=cat',
      method: 'GET',
      types: [
        REQUEST,
        {
          type: SUCCESS,
          payload: (action, state, res) => {
            return res.json().then(json => json['petfinder']['breeds']['breed'])
              .then(json => cleanBreedList(json))
          }
        },
        FAILURE
      ]
    }
  }
}
