import React from 'react'
import './style.pcss'

export default class SearchInput extends React.Component {
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
        })} value={this.state.value} type='text' className='search-input__input' placeholder='Search...'/>
        <button type='submit'
                className='search-input__button'>Search
        </button>
      </form>
    )
  }
}


