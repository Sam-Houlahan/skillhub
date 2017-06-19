// import {getAllCategories} from '../utils/api'
 import request from '../utils/api'

 export const USERS_PROFILE = 'USERS_PROFILE'
 export const UPDATE_PROFILE = 'UPDATE_PROFILE'
 export const GET_PROFILE = 'GET_PROFILE'
 export const REQUEST_CATEGORIES = 'REQUEST_CATEGORIES'
 export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'
 export const RECEIVE_CATEGORY_USERS_LEARN = 'RECEIVE_CATEGORY_USERS_LEARN'
 export const RECEIVE_CATEGORY_USERS_OFFER = 'RECEIVE_CATEGORY_USERS_OFFER'
 export const GET_LOCATION = 'GET_LOCATIONS'
 export const PUSHED_SENDER_ID = 'PUSHED_SENDER_ID'
 export const GET_SKILLS = 'GET_SKILLS'
 export const WAITING_INDICATOR = 'WAITING_INDICATOR'
 export const NOT_WAITING = 'NOT_WAITING'

 export function updateProfile (text) {
   return {
     type: UPDATE_PROFILE,
     updatedProfile: {
       userName: '',
       firstName: text.firstName,
       lastName: text.lastName,
       email: '',
       photoUrl: text.profilePic,
       locationCity: text.locationCity,
       bio: text.bio,
       skillsOffered: text.skillsOffered,
       skillsWanted: text.skillsWanted
     }
   }
 }

 export const waitingIndicator = () => {
  return {
    type: WAITING_INDICATOR
  }
}

export const notWaiting = () => {
  return {
    type: NOT_WAITING
 }
}
 export const requestCategories = () => {
   return {
     type: REQUEST_CATEGORIES
   }
 }

 export const receiveCategories = (categories) => {
   return {
     type: RECEIVE_CATEGORIES,
     categories: categories
   }
 }

 export const receiveCategoryUsersLearn = (categoryUsersLearn) => {
   return {
     type: RECEIVE_CATEGORY_USERS_LEARN,
     categoryUsersLearn: categoryUsersLearn
   }
 }
 export const receiveCategoryUsersOffer = (categoryUsersOffer) => {
   return {
     type: RECEIVE_CATEGORY_USERS_OFFER,
     categoryUsersOffer: categoryUsersOffer
   }
 }

 export function saveProfileById (data) {
   return {
     type: GET_PROFILE,
     data
   }
 }

 export function getProfileOfUser (data) {
   return {
     type: USERS_PROFILE,
     isFetching: false,
     data
   }
 }

 export function locations (location) {
   return {
     type: GET_LOCATION,
     location
   }
 }

 export function skills (skills) {
   return {
     type: GET_SKILLS,
     skills
   }
 }

 export function addProfileToDb (profile) {
   return dispatch => {
     dispatch(waitingIndicator())
     return request('put', '/profile/edit', profile)
    .then((response) => {
      if (!response.ok) {
        return response.body.message
      } else {
        dispatch(notWaiting())
        return response.req
      }
    })
   }
 }

 export function addProfileSkillsOffered (skills) {
   return dispatch => {
     dispatch(waitingIndicator())
     return request('post', '/profile/skills-offered', skills)
    .then((response) => {
      if (!response.ok) {
        return response.body.message
      } else {
        dispatch(notWaiting())
        return response.req
      }
    })
   }
 }

 export function addProfileSkillsWanted (skills) {
   return dispatch => {
     dispatch(waitingIndicator())
     return request('post', '/profile/skills-learn', skills)
    .then((response) => {
      if (!response.ok) {
        return response.body.message
      } else {
        dispatch(notWaiting())
        return response.req
      }
    })
   }
 }

 export function mapSenderId (senderId) {
   return dispatch => {
     dispatch(pushedSenderId(senderId))
   }
 }

 function pushedSenderId (senderId) {
   return {
     type: PUSHED_SENDER_ID,
     senderId
   }
 }

 export const fetchCategories = () => {
   return (dispatch, getState) => {
     const state = getState()
     dispatch(waitingIndicator())
     if (state.categories.length === 0) {
       getAllCategories((err, res) => {
         if (err) return console.log(err)
         dispatch(receiveCategories(res.result))
         dispatch(notWaiting())
       })
     }
   }
 }

 export function getProfileById (id, callback) {
   return dispatch => {
     request('get', `/profiles/${id}`)
    .then(res => {
      dispatch(saveProfileById(res.body.result))
    })
   }
 }

 export function getAllCategories (callback) {
   return dispatch => {
     dispatch(waitingIndicator())
     request('get', '/categories')
     .then(res => {
       dispatch(notWaiting())
       dispatch(receiveCategories(res.body.result)
     )
     })
   }
 }

 export function getUsersProfile (callback) {
   return dispatch => {
     dispatch(waitingIndicator())
     request('get', `/profile`)
     .then(res => {
       dispatch(getProfileOfUser(res.body.result))
       dispatch(notWaiting())
     })
   }
 }

 export function getCategoryUsersLearn (id, callback) {
   return dispatch => {
     dispatch(waitingIndicator())
     request('get', `/learn/${id}`)
     .then(res => {
       dispatch(notWaiting())
       dispatch(receiveCategoryUsersLearn(res.body.result))
     })
   }
 }

 export function getCategoryUsersOffer (id, callback) {
   return dispatch => {
     dispatch(waitingIndicator())
     request('get', `/offer/${id}`)
     .then(res => {
       dispatch(notWaiting())       
       dispatch(receiveCategoryUsersOffer(res.body.result))
     })
   }
 }

 export function getLocations () {
   return dispatch => {
     dispatch(waitingIndicator())
     request('get', '/profile/edit')
    .then(res => {
      dispatch(notWaiting())
      dispatch(locations(res.body.result))
    })
   }
 }

 export function getSkills () {
   return dispatch => {
     dispatch(waitingIndicator())
     request('get', '/profile/edit/skills')
    .then(res => {
      dispatch(notWaiting())
      dispatch(skills(res.body.result))
    })
   }
 }
