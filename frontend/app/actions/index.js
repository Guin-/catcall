export const RANDOM_CAT_REQUEST = 'RANDOM_CAT_REQUEST'
export const RANDOM_CAT_SUCCESS = 'RANDOM_CAT_SUCCESS'
export const RANDOM_CAT_FAILURE = 'RANDOM_CAT_FAILURE'
export const RESET_ERROR = 'RESET_ERROR'

export function randomCatRequest() {
  return {
    type: RANDOM_CAT_REQUEST,
    RANDOM_CAT_REQUEST
  }
}

export function randomCatSuccess(json) {
  return {
    type: RANDOM_CAT_SUCCESS,
    randomCat: json['petfinder']['pet']
  }
}

export function randomCatFailure(error) {
  return {
    type: RANDOM_CAT_FAILURE,
    error: error.message || 'Something went wrong'
  }
}

export function resetError() {
  return {
    type: RESET_ERROR
  }
}

function handleErrors(response) {
  if(!response.ok) {
    throw Error(response.statusText)
  }
  return response
}

export function fetchRandomCat() {
  return function (dispatch) {
    dispatch(randomCatRequest)
    return fetch('/api/pet.getRandom?&output=full')
      .then(handleErrors)
      .then(response =>
            response.json().then(json => dispatch(randomCatSuccess(json))))
      .catch(error => dispatch(randomCatFailure(error)))
  }
}
