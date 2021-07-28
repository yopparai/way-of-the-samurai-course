import Post from "./Post/Post";
import s from './MyPosts.module.css'
import React from "react";

const MyPosts = (props) => {
    const postsElements = props.posts
        .map(post => <Post message={post.message} likeCount={post.likesCount}/>)
    const newPostElement = React.createRef()
    const onAddPost = () => {
        props.addPost()
    }
    const onPostChange = () => {
        const text = newPostElement.current.value
        props.updateNewPostText(text)
    }
    return <div className={s.postBlock}>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange}/>
            </div>
            <div>
                <button onClick={onAddPost}>Add post
                </button>
            </div>
        </div>
        <div className={s.posts}>
            {postsElements}
        </div>
    </div>;
}

export default MyPosts