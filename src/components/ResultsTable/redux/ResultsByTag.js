import {connect} from 'react-redux'
import withResultsByTag from '../hoc/withResultsByTag'

import ResultsTable from '../ResultsTable'
import {bindActionCreators} from 'redux'

import {
  fetchQuestionsByTagRequest,
  fetchQuestionsByTagSuccess,
  fetchQuestionsByTagFailure
} from '../../../actions/search'


function mapStateToProps(state) {
  return {
    searchByTag: state.searchByTag
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchQuestionsByTagRequest,
    fetchQuestionsByTagSuccess,
    fetchQuestionsByTagFailure
  }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withResultsByTag(ResultsTable))
