import React from 'react'

import {searchByTag} from 'requests'
import PropTypes from "prop-types";
import {ITEMS_PER_PAGE} from 'constants/common'

export default function (Component) {
  return class extends React.Component {

    static propTypes = {
      tag: PropTypes.string,
      searchByTag: PropTypes.object,
      fetchQuestionsByTagRequest: PropTypes.func,
      fetchQuestionsByTagSuccess: PropTypes.func,
      fetchQuestionsByTagFailure: PropTypes.func,
    }

    constructor(props) {
      super(props)

      this.loadPage = this.loadPage.bind(this)
    }

    componentDidMount() {
      if (this.props.tag) {
        this.loadPage(1)
      }
    }

    componentDidUpdate(prevProps, prevState) {
      if (prevProps.tag !== this.props.tag) {
        this.loadPage(1)
      }
    }

    loadPage(page) {
      this.props.fetchQuestionsByTagRequest()

      searchByTag(this.props.tag, page, ITEMS_PER_PAGE).then((response) => {
        this.props.fetchQuestionsByTagSuccess(response.data.items, page, response.data.has_more, response.data.total)
      }).catch((error) => {
        this.props.fetchQuestionsByTagFailure(error)
      });
    }


    render() {
      let errorMessage = ''
      let error = this.props.searchByTag.error

      if (!_.isEmpty(error)) {
        if (error.response) {
          errorMessage = error.response.data.error_message
        } else {
          errorMessage = 'Something went wrong'
        }
      }

      return (
        <Component items={this.props.searchByTag.items} page={this.props.searchByTag.page}
                   errorMessage={errorMessage}
                   status={this.props.searchByTag.status}
                   total={this.props.searchByTag.total}
                   loadPage={(page) => this.loadPage(page)}
                   hasMore={this.props.searchByTag.hasMore}
                   {...this.props} />
      )
    }
  }
}

