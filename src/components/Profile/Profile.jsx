import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
    const posts = [
        {id: 1, message: 'Hello!', likesCount: 24},
        {id: 2, message: 'How are you?', likesCount: 10},
    ]
    return <div className={s.content}>
        <ProfileInfo/>
        <MyPosts posts={posts}/>
    </div>;
}

export default Profile