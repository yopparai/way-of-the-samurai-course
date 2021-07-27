import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import navbarReducer from "./navbarReducer";

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
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.navbar = navbarReducer(this._state.navbar, action)

        this._callSubscriber(this._state)
    }
}

export default store