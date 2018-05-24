import React from 'react'
import './style.pcss'
import PropTypes from 'prop-types'

export default class SearchInput extends React.Component {
  static propTypes = {
    onSearch: PropTypes.func.isRequired,
    currentQuery: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props)

    this.state = {
      value: ''
    }
  }

  render() {
    return (
      <form className='search-input' onSubmit={(event) => {
        event.preventDefault()
        this.props.onSearch(this.state.value)
      }}>
        <input onChange={(event) => this.setState({
          value: event.target.value
        })} value={this.state.value} type='text' className='search-input__input'
               placeholder={this.props.currentQuery !== '' ? this.props.currentQuery : 'Search...'}/>
        <button type='submit'
                className='search-input__button'>Search
        </button>
      </form>
    )
  }
}


