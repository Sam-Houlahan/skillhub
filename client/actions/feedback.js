import request from '../utils/api'

import {waitingIndicator, notWaiting} from './index'

export const FEEDBACK_SUCCESS = 'FEEDBACK_SUCCESS'

export function fetchFeedback (id) {
  return function (dispatch) {
    dispatch(waitingIndicator())
    return request('get', '/feedback', id)
     .then(res => {
       dispatch(receiveFeedback(res.body.result))
       dispatch(notWaiting())
     })
  }
}

export function receiveFeedback (feedback) {
  return {
    type: FEEDBACK_SUCCESS,
    response: feedback
  }
}

export function postFeedback (feedbackData) {
  return dispatch => {
    dispatch(waitingIndicator())
    return request('post', '/feedback', feedbackData)
      .then(() => {
        dispatch(fetchFeedback(feedbackData.profile_id))
      })
  }
}
