

import { createReducer } from '@reduxjs/toolkit'
// actions imports
import {
  loadApiUser,
  loadApiUserError,
  loadApiUserSuccess,
} 
from '../actions/userAction.js'

import { logOut } from '../actions/userAction.js'

// REDUCER // ______________________________________________________________

// initial state
const initialStateUser = {
  isLoading: false,
  isLogged: false,
  user: {},
  error: '',
}
// reducer
export const userReducer = createReducer(initialStateUser, (builder) => {
  return builder
    .addCase(loadApiUser, (draft) => {
      draft.isLoading = true
      return
    })
    .addCase(loadApiUserSuccess, (draft, action) => {
      draft.isLoading = false
      draft.isLogged = true
      draft.user = action.payload
      draft.error = ''
      return
    })
    .addCase(loadApiUserError, (draft, action) => {
      draft.isLoading = false
      draft.isLogged = false
      draft.user = {}
      draft.error = action.payload
      return
    })
    .addCase(logOut, (draft, action) => {
      draft.isLoading = false
      draft.isLogged = false
      draft.user = {}
      draft.error = action.payload
      return
    })
    
})
