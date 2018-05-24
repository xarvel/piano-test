import React from 'react'
import './style.pcss'
export default class Root extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='root'>
        {this.props.children}
      </div>
    )
  }
}


