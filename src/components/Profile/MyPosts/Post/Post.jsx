import s from './Post.module.css'

const Post = (props) =>
    <div className={s.item}>
        <img src='https://www.meme-arsenal.com/memes/8ab5fe07681cd172915e9472a0a8443d.jpg'/>
        {props.message}
        <div>
            <span>like</span>
        </div>
        <div>
            <span>{props.likeCount} likes</span>
        </div>
    </div>

export default Post