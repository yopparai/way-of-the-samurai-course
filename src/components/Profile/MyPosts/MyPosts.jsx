import Post from "./Post/Post";

const MyPosts = () =>
    <div>
        My posts
        <div>
            <textarea/>
            <button>Add post</button>
        </div>
        <div>
            <Post message='Hello!' likeCount='24'/>
            <Post message='How are you?' likeCount='10'/>
        </div>
    </div>

export default MyPosts