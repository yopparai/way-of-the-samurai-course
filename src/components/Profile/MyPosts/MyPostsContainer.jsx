import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = () =>
    <StoreContext.Consumer>
        {
            store => {
                const state = store.getState()
                const addPost = () => {
                    const action = addPostActionCreator()
                    store.dispatch(action)
                }
                const updateNewPostText = (text) => {
                    let action = updateNewPostTextActionCreator(text)
                    store.dispatch(action)
                }
                return <MyPosts
                    addPost={addPost}
                    updateNewPostText={updateNewPostText}
                    posts={state.profilePage.posts}
                    newPostText={state.profilePage.newPostText}
                />
            }
        }
    </StoreContext.Consumer>

export default MyPostsContainer