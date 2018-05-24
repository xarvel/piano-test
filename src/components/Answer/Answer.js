import React from 'react'
import moment from "moment/moment";
import './style.pcss'

export default ({answer}) =>
  <div className='answer'>
    <div className='answer__metadata'>
      <a className='answer__author' href={answer.owner.link} target='_blank'>{answer.owner.display_name}</a>
    </div>
    <span className='answer__date'>{moment(new Date(answer.creation_date * 1000)).fromNow()}</span>
    <div className='answer__content' dangerouslySetInnerHTML={{__html: answer.body}}/>
  </div>

