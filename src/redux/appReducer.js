import {authorize} from "./authReducer";

const INITIALIZED_SUCCESS = 'way-of-the-samurai-course/app/INITIALIZED_SUCCESS';

const initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS})

export const initializeApp = () => async (dispatch) => {
    await dispatch(authorize());
    dispatch(initializedSuccess())
}

export default appReducer
