import {profileAPI} from "../api/api";

const ADD_POST = 'way-of-the-samurai-course/profile/ADD_POST';
const DELETE_POST = 'way-of-the-samurai-course/profile/DELETE_POST';
const SET_USER_PROFILE = 'way-of-the-samurai-course/profile/SET_USER_PROFILE';
const SET_USER_STATUS = 'way-of-the-samurai-course/profile/SET_USER_STATUS';

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
        default:
            return state
    }
}

export const addPost = newPostText => ({type: ADD_POST, newPostText})
export const deletePost = postId => ({type: DELETE_POST, postId});
export const setUserProfile = profile => ({type: SET_USER_PROFILE, profile})
export const setUserStatus = status => ({type: SET_USER_STATUS, status})

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

export default profileReducer
