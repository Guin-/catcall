import { RSAA } from 'redux-api-middleware'

export const REQUEST = 'CAT_LIST_REQUEST'
export const SUCCESS = 'CAT_LIST_SUCCESS'
export const FAILURE = 'CAT_LIST_FAILURE'

export function fetchCatList(location) {
  return {
    [RSAA]: {
      endpoint: '/api/pet.find?&location=' + location,
      method: 'GET',
      types: [
        REQUEST,
        {
          type: SUCCESS,
          payload: (action, state, res) => {
            return res.json().then(json => json['petfinder']['pets'])
          }
        },
        FAILURE
      ]
    }
  }
}
