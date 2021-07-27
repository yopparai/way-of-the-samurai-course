import Post from "./Post/Post";
import s from './MyPosts.module.css'
import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";

const MyPosts = (props) => {
    const postsElements = props.posts
        .map(post => <Post message={post.message} likeCount={post.likesCount}/>)
    const newPostElement = React.createRef()
    const addPost = () => {
        const action = addPostActionCreator()
        props.dispatch(action)
    }
    const onPostChange = () => {
        const text = newPostElement.current.value
        let action = updateNewPostTextActionCreator(text)
        props.dispatch(action)
    }
    return <div className={s.postBlock}>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange}/>
            </div>
            <div>
                <button onClick={addPost}>Add post
                </button>
            </div>
        </div>
        <div className={s.posts}>
            {postsElements}
        </div>
    </div>;
}

export default MyPosts