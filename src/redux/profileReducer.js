import {profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = 'way-of-the-samurai-course/profile/ADD_POST';
const DELETE_POST = 'way-of-the-samurai-course/profile/DELETE_POST';
const SET_USER_PROFILE = 'way-of-the-samurai-course/profile/SET_USER_PROFILE';
const SET_USER_STATUS = 'way-of-the-samurai-course/profile/SET_USER_STATUS';
const SAVE_PHOTO_SUCCESS = 'way-of-the-samurai-course/profile/SAVE_PHOTO_SUCCESS';

const initialState = {
    posts: [
        {id: 1, message: 'Hello!', likesCount: 24},
        {id: 2, message: 'How are you?', likesCount: 10},
    ],
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: 3,
                message: action.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.postId)
            }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_USER_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state,
                profile: {
                    ...state.profile,
                    photos: action.photos
                }
            }
        }
        default:
            return state
    }
}

export const addPost = newPostText => ({type: ADD_POST, newPostText})
export const deletePost = postId => ({type: DELETE_POST, postId});
export const setUserProfile = profile => ({type: SET_USER_PROFILE, profile})
export const setUserStatus = status => ({type: SET_USER_STATUS, status})
export const savePhotoSuccess = photos => ({type: SAVE_PHOTO_SUCCESS, photos})

export const getProfile = (userId) => async (dispatch) => {
    const data = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(data))
}

export const getStatus = (userId) => async (dispatch) => {
    const data = await profileAPI.getStatus(userId)
    dispatch(setUserStatus(data))
}

export const updateStatus = (status) => async (dispatch) => {
    const data = await profileAPI.updateStatus(status)
    if (data.resultCode === 0)
        dispatch(setUserStatus(status))
}

export const savePhoto = (file) => async (dispatch) => {
    const data = await profileAPI.savePhoto(file)
    if (data.resultCode === 0)
        dispatch(savePhotoSuccess(data.data.photos))
}

export const saveProfile = (profile) => async (dispatch, getState) => {
    const data = await profileAPI.saveProfile(profile)
    if (data.resultCode === 0) {
        const userId = getState().auth.userId
        dispatch(getProfile(userId))
    } else {
        dispatch(stopSubmit('editProfile', {_error: data.messages[0]}))
        return Promise.reject(data.messages[0])
    }
}

export default profileReducer
