import Post from "./Post/Post";
import s from './MyPosts.module.css'

const MyPosts = () => {
    const posts = [
        {id: 1, message: 'Hello!', likesCount: 24},
        {id: 2, message: 'How are you?', likesCount: 10},
    ]
    const postsElements = posts
        .map(post => <Post message={post.message} likeCount={post.likesCount}/>)
    return <div className={s.postBlock}>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </div>
        <div className={s.posts}>
            {postsElements}
        </div>
    </div>;
}

export default MyPosts