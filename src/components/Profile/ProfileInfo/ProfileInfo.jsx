import s from './ProfileInfo.module.css'

const ProfileInfo = () =>
    <div>
        <div>
            <img src='https://i.pinimg.com/originals/c1/50/f8/c150f806a08b037564541f249d3e3214.jpg'/>
        </div>
        <div className={s.descriptionBlock}>
            ava + description
        </div>
    </div>

export default ProfileInfo