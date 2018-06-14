import { RSAA } from 'redux-api-middleware'
import { forEach } from 'lodash'

export const REQUEST = 'CAT_DETAIL_REQUEST'
export const SUCCESS = 'CAT_DETAIL_SUCCESS'
export const FAILURE = 'CAT_DETAIL_FAILURE'
export const CLEAR = 'CAT_DETAIL_CLEAR'

export function cleanCatData(pet) {
  let cleanData = {}
  _.forEach(pet, function(value, parentKey) {
    _.forEach(value, function(value, key) {
      if (_.isArray(value)) {
          pet[parentKey] = _.map(value, '$t')
          cleanData[parentKey] = pet[parentKey]
      }
      else if (key==='$t') {
        pet[parentKey] = value
        cleanData[parentKey] = pet[parentKey]
      }
      else {
        pet[key] = value['$t'] || value
        cleanData[key] = pet[key]
      }
    })
  })
  return cleanData
}

export function fetchCatDetail(id) {
  return {
    [RSAA]: {
      endpoint: '/api/pet.get?&id=' + id + '&output=full',
      method: 'GET',
      fetch: async (endpoint) => {
        let res = await fetch(endpoint)
        if (res.status === 200) {
          let json = await res.json()
          return new Response(
             JSON.stringify({
              ...json
             }),
            {
              // passed to success or failure based on status code
              status: json.petfinder.header.status.code.$t === '100' ? 200 : 404,
              statusText: json.petfinder.header.status.message.$t
            }
          )
        }
        else {
          return res
        }
      },
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


export function clearCatDetail(){
  return {type: CLEAR}
}
