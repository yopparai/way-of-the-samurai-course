import Post from "./Post/Post";
import s from './MyPosts.module.css'
import React from "react";
import {Field, reduxForm} from "redux-form";

const AddPostForm = (props) =>
    <form onSubmit={props.handleSubmit}>
        <div>
            <Field component='textarea' name='newPostText' placeholder='Enter your message'/>
        </div>
        <div>
            <button>Add post</button>
        </div>
    </form>

const AddPostFormRedux = reduxForm({form: 'profileAddNewPostForm'})(AddPostForm)

const MyPosts = (props) => {
    const postsElements = props.posts
        .map(post => <Post message={post.message} likeCount={post.likesCount}/>)
    const addPost = (values) => {
        props.addPost(values.newPostText)
    }
    return <div className={s.postBlock}>
        <h3>My posts</h3>
        <div>
            <AddPostFormRedux onSubmit={addPost}/>
        </div>
        <div className={s.posts}>
            {postsElements}
        </div>
    </div>;
}

export default MyPosts
