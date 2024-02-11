import axios from "axios";
import { loginFail, loginSuccess, logoutSuccess, isToken } from "../actions/loginAction";
import { userFail, userLogout, userSuccess } from "../actions/userAction";

const BASE_URL = "http://localhost:3001/api/v1";

/**
 * Login function
 * @param { String } email 
 * @param { String } password 
 * @param { Boolean } rememberMe 
 * @returns { Object }
 */
const login = (email, password, rememberMe) => (dispatch) => {
    axios.post(BASE_URL + "/user/login", { email, password })
        .then((response) => {
            if (rememberMe) {
                localStorage.setItem("token", JSON.stringify(response.data.body.token));
            }else{
                sessionStorage.setItem("token", JSON.stringify(response.data.body.token));
            }
            dispatch(loginSuccess(response.data))
            return response.data;
        })
        .catch((err) => {
            dispatch(loginFail(err.response.data.message))
        })
}

/**
 * Get user profile
 * @param { String } token 
 */
const userProfile = (value_token) => (dispatch) => {
    const token= localStorage.getItem("token") !== null ? localStorage.getItem("token").slice(1,localStorage.getItem("token").length-1) : value_token;
    axios.post(BASE_URL + "/user/profile", { token }, { headers: { "Authorization": `Bearer ${token}` } })
        .then((response) => {
            dispatch(userSuccess(response.data))
            dispatch(isToken())
        })
        .catch((err) => {
            dispatch(userFail(err.response))
        })
}

/**
 * Update user profile
 * @param { String } firstName 
 * @param { String } lastName 
 * @param { String } token 
 */


/**
 * Logout function
 */
const logout = () => (dispatch) => {
    sessionStorage.clear();
    localStorage.removeItem('token')
    dispatch(userLogout());
    dispatch(logoutSuccess());
}

const auth_service = { login, logout, userProfile}

export default auth_service