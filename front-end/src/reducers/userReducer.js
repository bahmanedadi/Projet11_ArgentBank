import { createSlice } from "@reduxjs/toolkit";

/***  Initial User state  ***/
const userState = {
  firstName: null,
  title: null,
  content: null,
  author: null,
  id: null,
  error: null,
};

/***  User slice  ***/
const userAction = createSlice({
  name: "user",
  initialState: userState,
  reducers: {
    userSuccess: (state, action) => {

      Object.assign(state, action.payload.body); // Mettre à jour les propriétés de l'utilisateur
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
    userUpdateSuccess: (state, action) => {
      /***  Update state properties for an update success ***/
      return {
        ...state, // Copiez d'abord toutes les propriétés de l'état actuel
        ...action.payload.body, // Mettez à jour les propriétés de l'utilisateur
        error: null, // Réinitialisez l'erreur à null
      };
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
