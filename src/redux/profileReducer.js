const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT_ACTION = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: 3,
                message: state.newPostText,
                likesCount: 0
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state
        case UPDATE_NEW_POST_TEXT_ACTION:
            state.newPostText = action.newPostText
            return state
        default:
            return state

    }
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = text => ({type: UPDATE_NEW_POST_TEXT_ACTION, newPostText: text});


export default profileReducer