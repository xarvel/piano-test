import React from 'react'

import {searchByQuery} from 'requests'
import PropTypes from 'prop-types'
import {ITEMS_PER_PAGE} from 'constants/common'

export default function (Component) {
  return class extends React.Component {
    static propTypes = {
      queryString: PropTypes.string,
      fetchQuestionsByQueryRequest: PropTypes.func,
      fetchQuestionsByQuerySuccess: PropTypes.func,
      fetchQuestionsByQueryFailure: PropTypes.func,
    }

    constructor(props) {
      super(props)

      this.loadPage = this.loadPage.bind(this)
    }

    componentDidMount() {
      if (this.props.queryString !== '') {
        this.loadPage(1)
      }
    }

    componentDidUpdate(prevProps, prevState) {
      if (prevProps.queryString !== this.props.queryString) {
        this.loadPage(1)
      }
    }

    loadPage(page) {
      this.props.fetchQuestionsByQueryRequest()

      searchByQuery(this.props.queryString, page,ITEMS_PER_PAGE).then((response) => {
        this.props.fetchQuestionsByQuerySuccess(response.data.items, page, response.data.has_more, response.data.total)
      }).catch((error) => {
        this.props.fetchQuestionsByQueryFailure(error)
      });
    }


    render() {
      let errorMessage = ''
      let error = this.props.searchByQuery.error

      if(!_.isEmpty(error)){
        if (error.response) {
          errorMessage = error.response.data.error_message
        } else {
          errorMessage = 'Something went wrong'
        }
      }

      return (<Component items={this.props.searchByQuery.items} page={this.props.searchByQuery.page}
                         errorMessage={errorMessage}
                         status={this.props.searchByQuery.status}
                         total={this.props.searchByQuery.total}
                         loadPage={(page) => this.loadPage(page)}
                         hasMore={this.props.searchByQuery.hasMore}
                         {...this.props} />)
    }
  }
}



