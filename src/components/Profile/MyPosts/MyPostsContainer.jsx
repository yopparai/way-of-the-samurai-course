import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    const state = props.store.getState()
    const addPost = () => {
        const action = addPostActionCreator()
        props.store.dispatch(action)
    }
    const updateNewPostText = (text) => {
        let action = updateNewPostTextActionCreator(text)
        props.store.dispatch(action)
    }
    return <MyPosts
        addPost={addPost}
        updateNewPostText={updateNewPostText}
        posts={state.profilePage.posts}
        newPostText={state.profilePage.newPostText}
    />
}

export default MyPostsContainer