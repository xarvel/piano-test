import {
  FETCH_QUESTION_REQUEST,
  FETCH_QUESTION_SUCCESS,
  FETCH_QUESTION_FAILURE
} from 'constants/actionTypes'

function fetchQuestionRequest() {
  return {
    type: FETCH_QUESTION_REQUEST
  }
}

function fetchQuestionSuccess(data) {
  return {
    type: FETCH_QUESTION_SUCCESS,
    data: data
  }
}


function fetchQuestionFailed(error) {
  return {
    type: FETCH_QUESTION_FAILURE,
    error: error
  }
}

export {fetchQuestionRequest, fetchQuestionSuccess, fetchQuestionFailed}
