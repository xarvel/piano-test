import React from 'react'

import PropTypes from 'prop-types'

import './style.pcss'

export default class Modal extends React.Component {

  static propTypes = {
    isOpened: PropTypes.bool.isRequired,
    width: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]).isRequired,
    title: PropTypes.string.isRequired,
    children: PropTypes.any,
    onClose: PropTypes.func.isRequired,
  }

  render() {
    const {
      width = 300,
      children = null,
      title = '',
    } = this.props
    return (
      <div
        onClick={(event) => {
          if (event.currentTarget === event.target) {
            this.props.onClose()
          }
        }}
        className={'modal ' + (this.props.isOpened ? '' : 'modal_closed')}
      >
        <div className='modal__content' style={{
          top: '100px',
          left: 0,
          width: width
        }}>
          <div className='modal__header'>

            <button
              className='modal__close'
              type="button"
              onClick={() => this.props.onClose()}/>

            <div className="modal__title ">{title}</div>
          </div>
          <div className='modal__body'>
            {this.props.isOpened && children} {/*DO NOT CHANGE*/}
          </div>
        </div>
      </div>
    )
  }
}

