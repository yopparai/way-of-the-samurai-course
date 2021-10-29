import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return <div>
        <div>
            <img src='https://i.pinimg.com/originals/c1/50/f8/c150f806a08b037564541f249d3e3214.jpg'/>
        </div>
        <div className={s.descriptionBlock}>
            <img src={props.profile.photos.large}/>
            ava + description
        </div>
    </div>;
}

export default ProfileInfo
