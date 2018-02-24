import { RSAA } from 'redux-api-middleware'
import { forEach } from 'lodash'

export const REQUEST = 'CAT_DETAIL_REQUEST'
export const SUCCESS = 'CAT_DETAIL_SUCCESS'
export const FAILURE = 'CAT_DETAIL_FAILURE'

function cleanCatDetail(json) {
  let result = _.forEach(json, function(value, parentKey) {
                  _.forEach(value, function(value, key) {
                    if (_.isArray(value)) {
                        json[parentKey] = _.map(value, '$t')
                    }
                    else if (key=='$t') {
                      json[parentKey] = value
                    }
                    else {
                      console.log( key, value)
                    }
                  })
                })
  return result
}


export function fetchCatDetail(id) {
  return {
    [RSAA]: {
      endpoint: '/api/pet.get?&id=' + id + '&output=full',
      method: 'GET',
      types: [
        REQUEST,
        {
          type: SUCCESS,
          payload: (action, state, res) => {
            return res.json().then(json => json['petfinder']['pet'])
              .then(json => cleanCatDetail(json))
          }
        },
        FAILURE
      ]
    }
  }
}
