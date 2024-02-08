import { createReducer } from '@reduxjs/toolkit'
import { loadApiToken, loadApiTokenError, loadApiTokenSuccess } from "../actions/loginAction"


const initialStateToken = {
    isLoading: false,
    token: '',
    tokenExist: '',
    error: '',
  }
  // reducer
  export const tokenReducer = createReducer(initialStateToken, (builder) => {
    return builder
      .addCase(loadApiToken, (draft) => {
        draft.isLoading = true
        draft.token = ''
        draft.tokenExist = ''
        draft.error =  ''
        return
      })
      .addCase(loadApiTokenSuccess, (draft, action) => {
        draft.isLoading = false
        draft.token = action.payload
        draft.tokenExist = true
        draft.error =  ''
        return
      })
      .addCase(loadApiTokenError, (draft, action) => {
        draft.isLoading = false
        draft.token = ''
        draft.tokenExist = false
        draft.error = action.payload
        return
      })
  })
  