import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () =>
    <div className={s.content}>
        <div>
            <img
                src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'/>
        </div>
        <div>
            ava + description
        </div>
        <MyPosts/>
    </div>

export default Profile