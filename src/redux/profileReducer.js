const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT_ACTION = 'UPDATE-NEW-POST-TEXT';

const initialState = {
    posts: [
        {id: 1, message: 'Hello!', likesCount: 24},
        {id: 2, message: 'How are you?', likesCount: 10},
    ],
    newPostText: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: 3,
                message: state.newPostText,
                likesCount: 0
            }
            const stateCopy = {...state}
            stateCopy.posts = [...state.posts]
            stateCopy.posts.push(newPost)
            stateCopy.newPostText = ''
            return stateCopy
        case UPDATE_NEW_POST_TEXT_ACTION: {
            const stateCopy = {...state}
            stateCopy.newPostText = action.newPostText
            return stateCopy
        }
        default:
            return state
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = text => ({type: UPDATE_NEW_POST_TEXT_ACTION, newPostText: text});


export default profileReducer