import { createAction } from '@reduxjs/toolkit'
import axios from "axios"
import { getUser } from './userAction';

const baseURL = 'http://localhost:3001/api/v1/user/'


export const loadApiToken = createAction('load-token');

export const loadApiTokenSuccess = createAction(
  'get-token-success',
  (token) => {
    return {
      payload: { token },
    }
  }
)

export const loadApiTokenError = createAction(
  'get-token-error', (error) => {
  return {
    payload: { error },
  }
})


export const logOut = createAction('logout')

export const getToken = (email, password,rememberMe) => {
    
 return (dispatch) => {
   dispatch(loadApiToken())
   axios
     .post(baseURL + 'login', {
       email,
       password,
     })
     .then((response) => {
       dispatch(loadApiTokenSuccess(response.data.body.token))
       localStorage.setItem('token', response.data.body.token)
       const token = localStorage.getItem('token')
       dispatch(getUser(token))
       if (rememberMe.checked) {
        sessionStorage.setItem("token",response.data.body.token );
      }
     })
     .catch((error) => {
       dispatch(loadApiTokenError(error.message))
     })
 }
}