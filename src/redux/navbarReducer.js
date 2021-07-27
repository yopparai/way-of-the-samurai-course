const initialState = {
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

const navbarReducer = (state = initialState, action) => {
    return state
}

export default navbarReducer
