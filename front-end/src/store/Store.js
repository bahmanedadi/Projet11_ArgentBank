
import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from '../reducers/userReducer'
import { tokenReducer} from '../reducers/loginReducer'

export const store = configureStore({
  reducer: {
    token: tokenReducer,
    getUser: userReducer,
   
  },
})