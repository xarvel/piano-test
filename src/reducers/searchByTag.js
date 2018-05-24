import {
  FETCH_SEARCH_BY_TAG_REQUEST,
  FETCH_SEARCH_BY_TAG_SUCCESS,
  FETCH_SEARCH_BY_TAG_FAILURE
} from '../constants/actionTypes'

import {
  STATE_NOT_LOADED,
  STATE_LOADING,
  STATE_LOADED,
  STATE_FAILED
} from '../constants/common'

export default function (state = {
  error: {},
  status: STATE_NOT_LOADED,
  items: [],
  page: 1,
  hasMore: false,
  total: 0,
}, action) {
  switch (action.type) {
    case FETCH_SEARCH_BY_TAG_REQUEST:
      return Object.assign({}, state, {
        status: STATE_LOADING,
        items: []
      })
    case FETCH_SEARCH_BY_TAG_SUCCESS:
      return Object.assign({}, state, {
        status: STATE_LOADED,
        items: action.data,
        page: action.page,
        hasMore: action.hasMore,
        total: action.total,
        error: action.error
      })
    case FETCH_SEARCH_BY_TAG_FAILURE:
      return Object.assign({}, state, {
        status: STATE_FAILED
      })
    default:
      return state
  }
}
