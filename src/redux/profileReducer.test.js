import profileReducer, {addPost, deletePost} from "./profileReducer";

const state = {
    posts: [
        {id: 1, message: 'Hello!', likesCount: 24},
        {id: 2, message: 'How are you?', likesCount: 10},
    ]
}

it('Length of posts should be incremented', () => {
    const action = addPost('This is my new post text')
    const newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(3)
})

it('Message of new post should be correct', () => {
    const action = addPost('This is my new post text')
    const newState = profileReducer(state, action)
    expect(newState.posts[2].message).toBe('This is my new post text')
})

it('After deleting length of message should be decrement', () => {
    const action = deletePost(1)
    const newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(1)
})

it(`After deleting length of message shouldn't be decrement if id is incorrect`, () => {
    const action = deletePost(999)
    const newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(2)
})
