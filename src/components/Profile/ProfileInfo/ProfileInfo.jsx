import s from './ProfileInfo.module.css'

const ProfileInfo = () =>
    <div>
        <div>
            <img src='https://wallpapercave.com/wp/wp4649492.jpg'/>
        </div>
        <div className={s.descriptionBlock}>
            ava + description
        </div>
    </div>

export default ProfileInfo