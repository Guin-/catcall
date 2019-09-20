import { RSAA } from 'redux-api-middleware'

export const REQUEST = 'CAT_DETAIL_REQUEST'
export const SUCCESS = 'CAT_DETAIL_SUCCESS'
export const FAILURE = 'CAT_DETAIL_FAILURE'
export const CLEAR = 'CAT_DETAIL_CLEAR'

export function fetchCatDetail(id) {
  return {
    [RSAA]: {
      endpoint: '/api/animals/' + id,
      method: 'GET',
      types: [
        REQUEST,
        {
          type: SUCCESS,
          payload: (action, state, res) => {
            return res.json().then(json => json['animal'])
          }
        },
        FAILURE
      ]
    }
  }
}


export function clearCatDetail(){
  return {type: CLEAR}
}
