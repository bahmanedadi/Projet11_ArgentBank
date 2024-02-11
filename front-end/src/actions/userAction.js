import { createAction } from '@reduxjs/toolkit';

// Action creators
export const userSuccess = createAction('post/postSuccess');
export const userFail = createAction('post/postFail');
export const userLogout = createAction('post/postLogout');
export const userUpdateSuccess = createAction('post/postUpdateSuccess');
export const userUpdateFail = createAction('post/postUpdateFail');
