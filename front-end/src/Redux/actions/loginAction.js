
import { createAction } from '@reduxjs/toolkit';

export const loginSuccess = createAction('login/loginSuccess');
export const loginFail = createAction('login/loginFail');
export const logoutSuccess = createAction('login/logoutSuccess');
export const isToken = createAction('login/isToken');
export const logoClick = createAction('login/logoClick');

