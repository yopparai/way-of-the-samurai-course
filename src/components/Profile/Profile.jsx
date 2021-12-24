import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = ({isOwner, profile, status, updateStatus, savePhoto}) =>
    <div className={s.content}>
        <ProfileInfo
            isOwner={isOwner}
            profile={profile}
            status={status}
            updateStatus={updateStatus}
            savePhoto={savePhoto}
        />
        <MyPostsContainer/>
    </div>

export default Profile
