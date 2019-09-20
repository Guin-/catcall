import { RSAA } from 'redux-api-middleware'

export const REQUEST = 'CAT_LIST_REQUEST'
export const SUCCESS = 'CAT_LIST_SUCCESS'
export const FAILURE = 'CAT_LIST_FAILURE'
export const CLEAR = 'CAT_LIST_CLEAR'

export function fetchCatList(location, page) {
  return {
    [RSAA]: {
      endpoint: '/api/animals?&location=' + location + '&page=' +  page,
      method: 'GET',
      types: [
        REQUEST,
        {
          type: SUCCESS,
          payload: (action, state, res) => {
            return res.json().then(json => json['animals'])
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

