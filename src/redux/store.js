const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT_ACTION = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hello!', likesCount: 24},
                {id: 2, message: 'How are you?', likesCount: 10},
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Andrey'},
                {id: 2, name: 'Masha'},
                {id: 3, name: 'Sasha'},
                {id: 4, name: 'Misha'},
                {id: 5, name: 'Jenny'},
                {id: 6, name: 'Ivan'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you'},
                {id: 3, message: 'Yo'}
            ],
            newMessageText: ''
        },
        navbar: {
            friends: [
                {id: 1, name: 'Sergey', avatar: 'https://wallpaperaccess.com/full/2020287.jpg'},
                {
                    id: 2,
                    name: 'Benjamin',
                    avatar: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/rose-729509__340.jpg'
                },
                {id: 3, name: 'Fran', avatar: 'https://www.un.org/sites/un2.un.org/files/ourbeautifulocean-12x.png'}
            ]
        }
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            const newPost = {
                id: 3,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_POST_TEXT_ACTION) {
            this._state.profilePage.newPostText = action.newPostText
            this._callSubscriber(this._state)
        } else if (action.type === ADD_MESSAGE) {
            const newMessage = {
                id: 4,
                message: this._state.dialogsPage.newMessageText
            }
            this._state.dialogsPage.messages.push(newMessage)
            this._state.dialogsPage.newMessageText = ''
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.newMessageText
            this._callSubscriber(this._state)
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = text => ({type: UPDATE_NEW_POST_TEXT_ACTION, newPostText: text});

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})

export const updateNewMessageTextActionCreator = text => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: text});

export default store