import {
  FETCH_QUESTION_REQUEST,
  FETCH_QUESTION_SUCCESS,
  FETCH_QUESTION_FAILURE
} from '../constants/actionTypes'

import {
  STATE_NOT_LOADED,
  STATE_LOADING,
  STATE_LOADED,
  STATE_FAILED
} from '../constants/common'

export default function (state = {
  status: STATE_NOT_LOADED,
  error: {},
  data: {}
}, action) {
  switch (action.type) {
    case FETCH_QUESTION_REQUEST:
      return Object.assign({}, state, {
        status: STATE_LOADING,
      })
    case FETCH_QUESTION_SUCCESS:
      return Object.assign({}, state, {
        status: STATE_LOADED,
        data: action.data,
      })
    case FETCH_QUESTION_FAILURE:
      return Object.assign({}, state, {
        status: STATE_FAILED,
        error: action.error
      })
    default:
      return state
  }
}

