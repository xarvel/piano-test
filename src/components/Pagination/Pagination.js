import React from 'react'
import {ITEMS_PER_PAGE} from 'constants/common'
import PropTypes from 'prop-types'


export default class Pagination extends React.Component {
  static propTypes = {
    currentPage: PropTypes.number.isRequired,
    setPage: PropTypes.func.isRequired,
    hasMore: PropTypes.bool.isRequired,
    total: PropTypes.number.isRequired
  }

  render() {
    return (
      <div className='pagination'>
        <button type='button' disabled={this.props.currentPage === 1} className='pagination__button'
                onClick={() => this.props.setPage(1)}>
          <i className='icon icon_double-arrow-left'/>
        </button>
        <button type='button' className='pagination__button' disabled={this.props.currentPage === 1}
                onClick={() => this.props.setPage(this.props.currentPage - 1)}
        ><i className='icon icon_arrow-left'/></button>
        <div className='pagination__button'>{this.props.currentPage}</div>
        <button type='button' className='pagination__button' disabled={!this.props.hasMore} onClick={() => this.props.setPage(this.props.currentPage + 1)}><i className='icon icon_arrow-right'/></button>
        <button type='button' disabled={!this.props.hasMore} className='pagination__button'
                onClick={() => this.props.setPage(Math.ceil(this.props.total/ITEMS_PER_PAGE))}>
          <i className='icon icon_double-arrow-right'/>
        </button>
      </div>
    )
  }
}


