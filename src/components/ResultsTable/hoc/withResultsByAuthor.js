import React from 'react'

import {searchByAuthor} from 'requests'
import PropTypes from "prop-types";

import _ from 'lodash'
import {ITEMS_PER_PAGE} from 'constants/common'

export default function (Component) {
  return class extends React.Component {

    static propTypes = {
      authorID: PropTypes.number,
      fetchQuestionsByAuthorRequest: PropTypes.func,
      fetchQuestionsByAuthorSuccess: PropTypes.func,
      fetchQuestionsByAuthorFailure: PropTypes.func,
    }

    constructor(props) {
      super(props)


      this.loadPage = this.loadPage.bind(this)
    }

    componentDidMount() {
      if (this.props.authorID) {
        this.loadPage(1)
      }
    }

    componentDidUpdate(prevProps, prevState) {
      if (prevProps.authorID !== this.props.authorID) {
        this.loadPage(1)
      }
    }

    loadPage(page) {
      this.props.fetchQuestionsByAuthorRequest()

      searchByAuthor(this.props.authorID, page,ITEMS_PER_PAGE).then((response) => {
        this.props.fetchQuestionsByAuthorSuccess(response.data.items, page, response.data.has_more, response.data.total)

      }).catch((error) => {
        this.props.fetchQuestionsByAuthorFailure(error)
      });
    }


    render() {
      let errorMessage = ''
      let error = this.props.searchByAuthor.error

      if (!_.isEmpty(error)) {
        if (error.response) {
          errorMessage = error.response.data.error_message
        } else {
          errorMessage = 'Something went wrong'
        }
      }


      return (

        <Component items={this.props.searchByAuthor.items} page={this.props.searchByAuthor.page}
                   errorMessage={errorMessage}
                   status={this.props.searchByAuthor.status}
                   total={this.props.searchByAuthor.total}
                   loadPage={(page) => this.loadPage(page)}
                   hasMore={this.props.searchByAuthor.hasMore}
                   {...this.props} />
      )
    }
  }
}

