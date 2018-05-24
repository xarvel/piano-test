import {
  FETCH_SEARCH_BY_QUERY_REQUEST,
  FETCH_SEARCH_BY_QUERY_SUCCESS,
  FETCH_SEARCH_BY_QUERY_FAILURE,

  FETCH_SEARCH_BY_AUTHOR_REQUEST,
  FETCH_SEARCH_BY_AUTHOR_SUCCESS,
  FETCH_SEARCH_BY_AUTHOR_FAILURE,
  FETCH_SEARCH_BY_TAG_REQUEST,
  FETCH_SEARCH_BY_TAG_SUCCESS,
  FETCH_SEARCH_BY_TAG_FAILURE,
} from '../constants/actionTypes'

function fetchQuestionsByQueryRequest() {
  return {
    type: FETCH_SEARCH_BY_QUERY_REQUEST
  }
}

function fetchQuestionsByQuerySuccess(data, page, hasMore, total) {
  return {
    type: FETCH_SEARCH_BY_QUERY_SUCCESS,
    data: data,
    page: page,
    hasMore: hasMore,
    total: total
  }
}

function fetchQuestionsByQueryFailure(error) {
  return {
    type: FETCH_SEARCH_BY_QUERY_FAILURE,
    error: error
  }
}


function fetchQuestionsByAuthorRequest() {
  return {
    type: FETCH_SEARCH_BY_AUTHOR_REQUEST
  }
}

function fetchQuestionsByAuthorSuccess(data, page, hasMore,total) {
  return {
    type: FETCH_SEARCH_BY_AUTHOR_SUCCESS,
    data: data,
    page: page,
    hasMore: hasMore,
    total: total
  }
}

function fetchQuestionsByAuthorFailure(error) {
  return {
    type: FETCH_SEARCH_BY_AUTHOR_FAILURE,
    error: error
  }
}


function fetchQuestionsByTagRequest() {
  return {
    type: FETCH_SEARCH_BY_TAG_REQUEST
  }
}

function fetchQuestionsByTagSuccess(data, page, hasMore, total) {
  return {
    type: FETCH_SEARCH_BY_TAG_SUCCESS,
    data: data,
    page: page,
    hasMore: hasMore,
    total: total
  }
}

function fetchQuestionsByTagFailure(error) {
  return {
    type: FETCH_SEARCH_BY_TAG_FAILURE,
    error: error
  }
}


export {
  fetchQuestionsByQueryRequest,
  fetchQuestionsByQuerySuccess,
  fetchQuestionsByQueryFailure,
  fetchQuestionsByAuthorRequest,
  fetchQuestionsByAuthorSuccess,
  fetchQuestionsByAuthorFailure,
  fetchQuestionsByTagRequest,
  fetchQuestionsByTagSuccess,
  fetchQuestionsByTagFailure
}
