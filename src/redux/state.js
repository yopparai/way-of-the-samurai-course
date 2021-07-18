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
    },
    navbar: {
        friends: [
            {id: 1, name: 'Sergey', avatar: 'https://wallpaperaccess.com/full/2020287.jpg'},
            {id: 2, name: 'Benjamin', avatar: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/rose-729509__340.jpg'},
            {id: 3, name: 'Fran', avatar: 'https://www.un.org/sites/un2.un.org/files/ourbeautifulocean-12x.png'}
        ]
    }
}

export const addPost = (postMessage) => {
    const newPost = {
        id: 3,
        message: postMessage,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
}

export default state