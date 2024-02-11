import { createSlice } from "@reduxjs/toolkit";

/***  Initial User state  ***/
const userState = {
  title: null,
  content: null,
  author: null,
  id: null,
  error: null,
};

/***  User slice  ***/
const userAction = createSlice({
  name: "post",
  initialState: userState,
  reducers: {
    userSuccess: (state, action) => {
      /***  Update state properties based on the action payload  ***/
      state.title = action.payload.body.title;
      state.content = action.payload.body.content;
      state.author = action.payload.body.author;
      state.id = action.payload.body.id;
      state.error = null;
    },
    userFail: (state, action) => {
      /***  Reset state properties and set error based on the action payload ***/
      state.title = null;
      state.content = null;
      state.author = null;
      state.id = null;
      state.error = action.payload.message;
    },
    userLogout: (state) => {
      /***  Reset state properties on logout ***/

      state.title = null;
      state.content = null;
      state.author = null;
      state.id = null;
      state.error = null;
    },
    usertUpdateSuccess: (state, action) => {
      /***  Update state properties for an update success ***/
      state.title = action.payload.body.title;
      state.content = action.payload.body.content;
      state.author = action.payload.body.author;
      state.id = action.payload.body.id;
      state.error = null;
    },
    userUpdateFail: (state, action) => {
      /***  Update state properties for an update failure  ***/
      state.title = action.payload.body.title;
      state.content = action.payload.body.content;
      state.author = action.payload.body.author;
      state.id = action.payload.body.id;
      state.error = action.payload.message;
    },
  },
});

export const {
  userSuccess,
  userFail,
  userLogout,
  userUpdateSuccess,
  userUpdateFail,
} = userAction.actions;

export const userReducer = userAction.reducer;
