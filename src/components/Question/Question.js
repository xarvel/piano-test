import React from 'react'
import {question} from 'requests'
import './style.pcss'
import moment from 'moment'
import Answer from '../Answer'
import {STATE_FAILED, STATE_LOADED, STATE_LOADING} from "constants/common";
import PropTypes from "prop-types";

export default class Question extends React.Component {

  static propTypes = {
    question: PropTypes.object,
    fetchQuestionRequest: PropTypes.func,
    fetchQuestionSuccess: PropTypes.func,
    fetchQuestionFailed: PropTypes.func,
  }


  componentDidMount() {
    this.props.fetchQuestionRequest()

    question(this.props.match.params.questionID).then((response) => {
      if (response.data.items.length === 1) {
        this.props.fetchQuestionSuccess(response.data.items[0])
      } else {
        this.props.fetchQuestionFailed(new Error('Not Found'))
      }
    }).catch((error) => {
      debugger
      this.props.fetchQuestionFailed(error)
    })
  }

  render() {
    let {status, data, error} = this.props.question
    let errorMessage = ''
    if (status === STATE_FAILED) {
      if (!_.isEmpty(error)) {
        if (error.response) {
          errorMessage = error.response.data.error_message
        } else {
          errorMessage = 'Something went wrong'
        }
      }
    }

    return (<div className='question typography question__wrapper'>

      <button type='button' onClick={this.props.history.goBack} className='question__back'>Back</button>


      {status === STATE_LOADING && <div className='question__loading'>
        Loading...
      </div>}

      {status === STATE_FAILED && <div className='question__error'>
        {errorMessage}
      </div>}

      {status === STATE_LOADED && <div>
        <h1 className='question__title' dangerouslySetInnerHTML={{__html: data.title}}/>
        <div>
          <span>Asked by <a href={data.owner.link}
                            target='_blank'>{data.owner.display_name}</a></span>
          <span
            className='question__date'>{moment(new Date(data.creation_date * 1000)).calendar()}</span>
        </div>
        <div className='question__content' dangerouslySetInnerHTML={{__html: data.body}}/>
        <br/>


        <div className='question__answers'>
          <h3>Answers:</h3>
          {data.answer_count === 0 && <div>There is no answers yet</div>}

          {data.answer_count !== 0 && data.answers.map((answer, index) => <Answer
            answer={answer} key={index}/>)}
        </div>


      </div>}


    </div>)
  }
}
