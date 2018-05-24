import Question from './Question'
import {fetchQuestionRequest, fetchQuestionSuccess, fetchQuestionFailed} from 'actions/question'

import {bindActionCreators} from "redux";
import {connect} from "react-redux";


function mapStateToProps(state) {
  return {
    question: state.question
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchQuestionRequest,
    fetchQuestionSuccess,
    fetchQuestionFailed
  }, dispatch)
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Question)
