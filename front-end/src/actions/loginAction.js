import { createAction } from '@reduxjs/toolkit';
import {userSuccess,userFail} from "../actions/userAction";
import axios from "axios";

const BASE_URL = "http://localhost:3001/api/v1";

// Créateurs d'actions
export const loginSuccess = createAction('login/loginSuccess');
export const loginFail = createAction('login/loginFail');
export const logoutSuccess = createAction('login/logoutSuccess');
export const isToken = createAction('login/isToken');
export const logoClick = createAction('login/logoClick');

// Fonctions d'action
export const login = (email, password, rememberMe) => (dispatch) => {
    axios.post(BASE_URL + "/user/login", { email, password })
        .then((response) => {
            if (rememberMe) {
                localStorage.setItem("token", JSON.stringify(response.data.body.token));
            } else {
                sessionStorage.setItem("token", JSON.stringify(response.data.body.token));
            }
            dispatch(loginSuccess(response.data))
            return response.data;
        })
        .catch((err) => {
            dispatch(loginFail(err.response.data.message))
        })
}

export const logout = () => (dispatch) => {
    sessionStorage.clear();
    localStorage.removeItem('token')
    dispatch(logoutSuccess());
}
export const userProfile = (value_token) => (dispatch) => {
    const token = localStorage.getItem("token") !== null ? localStorage.getItem("token").slice(1, localStorage.getItem("token").length - 1) : value_token;
    axios.post(BASE_URL + "/user/profile", { token }, { headers: { "Authorization": `Bearer ${token}` } })
        .then((response) => {
            dispatch(userSuccess(response.data))
        })
        .catch((err) => {
            dispatch(userFail(err.response))
        })
}
const auth_service = { login, logout }

export default auth_service;