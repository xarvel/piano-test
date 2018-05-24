import {connect} from 'react-redux'
import withResultsByQueryString from '../hoc/withResultsByQueryString'

import ResultsTable from '../ResultsTable'
import {bindActionCreators} from 'redux'

import {
  fetchQuestionsByQueryRequest,
  fetchQuestionsByQuerySuccess,
  fetchQuestionsByQueryFailure
} from '../../../actions/search'


function mapStateToProps(state) {
  return {
    searchByQuery: state.searchByQuery
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchQuestionsByQueryRequest,
    fetchQuestionsByQuerySuccess,
    fetchQuestionsByQueryFailure
  }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withResultsByQueryString(ResultsTable))
