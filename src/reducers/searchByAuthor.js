import {
  FETCH_SEARCH_BY_AUTHOR_REQUEST,
  FETCH_SEARCH_BY_AUTHOR_SUCCESS,
  FETCH_SEARCH_BY_AUTHOR_FAILURE
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
  items: [],
  page: 1,
  hasMore: false,
  total: 0
}, action) {
  switch (action.type) {
    case FETCH_SEARCH_BY_AUTHOR_REQUEST:
      return Object.assign({},state, {
        status: STATE_LOADING,
        items: []
      })
    case FETCH_SEARCH_BY_AUTHOR_SUCCESS:
      return Object.assign({},state, {
        status: STATE_LOADED,
        items: action.data,
        page: action.page,
        hasMore: action.hasMore,
        total: action.total
      })
    case FETCH_SEARCH_BY_AUTHOR_FAILURE:
      return Object.assign({},state, {
        status: STATE_FAILED,
        error: action.error
      })
    default:
      return state
  }
}
