const state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hello!', likesCount: 24},
            {id: 2, message: 'How are you?', likesCount: 10},
        ]
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
    }
}

export default state