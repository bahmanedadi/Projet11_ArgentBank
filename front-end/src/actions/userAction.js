import { createAction } from '@reduxjs/toolkit';
import axios from "axios";

const BASE_URL = "http://localhost:3001/api/v1";

// Créateurs d'actions
export const userSuccess = createAction('post/postSuccess');
export const userFail = createAction('post/postFail');
export const userLogout = createAction('post/postLogout');
export const userUpdateSuccess = createAction('post/postUpdateSuccess');
export const userUpdateFail = createAction('post/postUpdateFail');

// Fonctions d'action
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
const auth_service = { login, logout, userProfile }

export default auth_service;