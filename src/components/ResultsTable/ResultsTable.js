import React from 'react'
import './style.pcss'
import {Link} from 'react-router-dom'
import Pagination from '../Pagination'
import {STATE_LOADING, STATE_LOADED, STATE_NOT_LOADED, STATE_FAILED} from '../../constants/common'
import PropTypes from 'prop-types'

export default class ResultsTable extends React.Component {
  static propTypes = {
    status: PropTypes.oneOf([STATE_LOADING, STATE_LOADED, STATE_NOT_LOADED, STATE_FAILED]).isRequired,
    items: PropTypes.array.isRequired,
    loadByAuthor: PropTypes.func.isRequired,
    loadByTag: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    loadPage: PropTypes.func.isRequired,
    hasMore: PropTypes.bool.isRequired,
    total: PropTypes.number.isRequired,
    errorMessage: PropTypes.string.isRequired
  }


  render() {
    return (
      <div
        className={'results-table' + (this.props.status === STATE_LOADING ? ' results-table_loading' : '') + (this.props.status === STATE_FAILED ? ' results-table_error' : '')}>
        <div className='results-table__wrapper'>
          <table className='results-table__table'>
            <thead>
            <tr className='results-table__headrow'>
              <th>Author</th>
              <th>Topic</th>
              <th>Answers</th>
              <th>Tags</th>
            </tr>
            </thead>
            <tbody>
            {this.props.status === STATE_FAILED && <tr className='results-table__bodyrow'>
              <td colSpan={4}>{this.props.errorMessage}</td>
            </tr>}

            {this.props.status === STATE_LOADING && <tr className='results-table__bodyrow'>
              <td colSpan={4}>Loading...</td>
            </tr>}

            {this.props.status === STATE_LOADED && this.props.items.length === 0 &&
            <tr className='results-table__bodyrow'>
              <td colSpan={4}>No items to show</td>
            </tr>}
            {this.props.items.map((item, index) => <tr key={index} className='results-table__bodyrow'>
              <td>
                <button type='button'
                        onClick={() => this.props.loadByAuthor(item['owner']['user_id'], item['owner']['display_name'])}>{item['owner']['display_name']}</button>
              </td>
              <td>
                <Link to={'/question/' + item['question_id']}>{item['title']}</Link>
              </td>
              <td>{item['answer_count']}</td>
              <td>{item['tags'].map((tag, index) =>
                <button type='button' onClick={() => this.props.loadByTag(tag)} key={index}>{tag}</button>)}</td>
            </tr>)}

            </tbody>
          </table>
        </div>

        <Pagination currentPage={this.props.page} setPage={(page) => this.props.loadPage(page)}
                    hasMore={this.props.hasMore} total={this.props.total}/>
      </div>
    )
  }
}


