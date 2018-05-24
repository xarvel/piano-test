import React from 'react'
import SearchInput from '../SearchInput'
import ReactDOM from 'react-dom'

import ResultsByQueryString from '../ResultsTable/redux/ResultsByQueryString'
import ResultsByAuthor from '../ResultsTable/redux/ResultsByAuthor'
import ResultsByTag from '../ResultsTable/redux/ResultsByTag'
import Modal from '../Modal'

export default class SearchPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      searchQuery: '',
      quickViewItems: [],
      quickViewPage: 1,
      quickViewType: '',
      quickViewAuthorID: '',
      quickViewAuthorName: '',
      quickViewTag: '',
      isModalOpened: false
    }

    this.handleSearch = this.handleSearch.bind(this)
    this.handleLoadByTag = this.handleLoadByTag.bind(this)
    this.handleLoadByAuthor = this.handleLoadByAuthor.bind(this)
  }


  handleSearch(queryString) {
    this.props.history.push('/search?q=' + queryString)
  }

  handleLoadByAuthor(id, name) {
    this.setState({
      isModalOpened: true,
      quickViewType: 'author',
      quickViewAuthorID: id,
      quickViewAuthorName: name
    }, () => {
      const quickViewAuthor = ReactDOM.findDOMNode(this.refs.quickViewAuthor)
      window.scrollTo(0, quickViewAuthor.offsetTop)
    })

  }

  handleLoadByTag(tag) {

    this.setState({
      isModalOpened: true,
      quickViewType: 'tag',
      quickViewTag: tag
    }, () => {
      const quickViewTag = ReactDOM.findDOMNode(this.refs.quickViewTag)
      window.scrollTo(0, quickViewTag.offsetTop);
    })
  }


  render() {

    const params = new URLSearchParams(this.props.location.search);
    const querySring = params.get('q') || '';

    return (
      <div className='page'>
        <SearchInput onSearch={this.handleSearch} currentQuery={querySring}/>
        {querySring !== '' && <div>
          <h2>Search by: {querySring}</h2>

          <div>
            <ResultsByQueryString
              queryString={querySring}
              loadByAuthor={this.handleLoadByAuthor}
              loadByTag={this.handleLoadByTag}/>
          </div>


        </div>}

        <Modal
          title={this.state.quickViewType === 'author' ? 'Questions by author:' + this.state.quickViewAuthorName : 'Questions by tag:' + this.state.quickViewTag}
          isOpened={this.state.isModalOpened} width='70%' onClose={() => {
          this.setState({
            isModalOpened: false
          })
        }}>
          {this.state.quickViewType === 'author' && <ResultsByAuthor
            ref='quickViewAuthor'
            authorID={this.state.quickViewAuthorID}
            loadByAuthor={this.handleLoadByAuthor}
            loadByTag={this.handleLoadByTag}/>}
          {this.state.quickViewType === 'tag' && <ResultsByTag
            ref='quickViewTag'
            tag={this.state.quickViewTag}
            loadByAuthor={this.handleLoadByAuthor}
            loadByTag={this.handleLoadByTag}/>}
        </Modal>
      </div>
    )
  }
}


