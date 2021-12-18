import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'way-of-the-samurai-course/auth/SET_USER_DATA';

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.data}
        default:
            return state
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    data: {userId, email, login, isAuth}
})

export const authorize = () => async (dispatch) => {
    const data = await authAPI.authorize();
    if (data.resultCode === 0) {
        const {id, email, login} = data.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}

export const login = (email, password, rememberMe) => async (dispatch) => {
    const data = await authAPI.login(email, password, rememberMe)
    if (data.resultCode === 0) {
        dispatch(authorize())
    } else {
        const message = data.messages.length > 0 ? data.messages[0] : 'Some error'
        dispatch(stopSubmit('login', {_error: message}))
    }
}

export const logout = () => async (dispatch) => {
    const data = await authAPI.logout()
    if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export default authReducer
