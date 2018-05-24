import {connect} from 'react-redux'
import withResultsByAuthor from '../hoc/withResultsByAuthor'

import ResultsTable from '../ResultsTable'
import {bindActionCreators} from 'redux'

import {
  fetchQuestionsByAuthorRequest,
  fetchQuestionsByAuthorSuccess,
  fetchQuestionsByAuthorFailure
} from '../../../actions/search'


function mapStateToProps(state) {
  return {
    searchByAuthor: state.searchByAuthor
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchQuestionsByAuthorRequest,
    fetchQuestionsByAuthorSuccess,
    fetchQuestionsByAuthorFailure
  }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withResultsByAuthor(ResultsTable))
