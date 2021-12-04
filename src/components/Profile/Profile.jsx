import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) =>
    <div className={s.content}>
        <ProfileInfo
            profile={props.profile}
            status={props.status}
            updateStatus={props.updateStatus}
        />
        <MyPostsContainer/>
    </div>

export default Profile
