import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from '../../../assets/images/default-user-avatar.png'
import {useState} from "react";
import ProfileDataForm from "./ProfileDataForm";
import Contact from "./Contact";

const ProfileData = ({profile, isOwner, goToEditMode}) =>
    <div>
        <div>
            {isOwner && <button onClick={goToEditMode}>Edit</button>}
        </div>
        <div>
            <b>Full name</b>: {profile.fullName}
        </div>
        <div>
            <b>Looking for a job</b>: {profile.lookingForAJob ? 'Yes' : 'No'}
        </div>
        {profile.lookingForAJob &&
            <div>
                <b>My professional skills</b>: {profile.lookingForAJobDescription}
            </div>
        }
        <div>
            <b>About me</b>: {profile.aboutMe}
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts)
            .map(contactTitle =>
                <Contact
                    key={contactTitle}
                    contactTitle={contactTitle}
                    contactValue={profile.contacts[contactTitle]}
                />
            )}
        </div>
    </div>

const ProfileInfo = ({isOwner, profile, status, updateStatus, savePhoto, saveProfile}) => {
    const [editMode, setEditMode] = useState(false)

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData)
            .then(() => setEditMode(false))
    }

    return <div>
        <div className={s.descriptionBlock}>
            <div><img src={profile.photos.large || userPhoto} className={s.mainPhoto}/></div>
            {isOwner && <input type='file' onChange={onMainPhotoSelected}/>}
            {
                editMode
                    ? <ProfileDataForm
                        initialValues={profile}
                        profile={profile}
                        onSubmit={onSubmit}
                    />
                    : <ProfileData
                        profile={profile}
                        isOwner={isOwner}
                        goToEditMode={() => setEditMode(true)}
                    />
            }
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
        </div>
    </div>;
}

export default ProfileInfo
