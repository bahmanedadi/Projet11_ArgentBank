import { configureStore, createSlice } from "@reduxjs/toolkit";
import tokenReducer from "../reducers/loginReducer";

const userSlice = createSlice({
    name: "user",
    initialState: {
        isLogged: false,
        token: '',
        firstName: '',
        lastName: ''
    },
    reducers: {
        connectUser: (state, action) => {
            state = {
                ...state,
                isLogged: true,
                token: action.payload,
            };
            return state;
        },
        getUser: (state, action) => {
            state = {
                ...state,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName
            };
            return state;
        },
        disconnectUser: (state) => {
            state = {
                isLogged: false,
                token: '',
                firstName: '',
                lastName: ''
            }
            return state;
        }
    }
});
export const { connectUser, getUser, disconnectUser } = userSlice.actions;

export const store = configureStore({
    reducer: {
        user: userSlice.reducer
       
    }
});