import {Field, reduxForm} from "redux-form";
import {Input, Textarea} from "../../common/FormsControls/FormsControls";
import s from './ProfileInfo.module.css'
import style from "../../common/FormsControls/FormsControls.module.css";

const ProfileDataForm = ({handleSubmit, profile, error}) =>
    <form onSubmit={handleSubmit}>
        <div>
            <button>Save</button>
        </div>
        {error &&
            <div className={style.formSummaryError}>
                {error}
            </div>}
        <div>
            <b>Full name</b>:
            <Field
                placeholder='Full name'
                name='fullName'
                component={Input}
            />
        </div>
        <div>
            <b>Looking for a job</b>:
            <Field
                name='lookingForAJob'
                component={Input}
                type='checkbox'
            />
        </div>
        <div>
            <b>My professional skills</b>:
            <Field
                placeholder='My professional skills'
                name='lookingForAJobDescription'
                component={Textarea}
            />
        </div>
        <div>
            <b>About me</b>:
            <Field
                placeholder='About me'
                name='aboutMe'
                component={Textarea}
            />
        </div>
        <div>
            <b>Contacts</b>: {
            Object.keys(profile.contacts).map(contactTitle =>
                <div key={contactTitle} className={s.contact}>
                    <b>{contactTitle}</b>:
                    <Field
                        placeholder={contactTitle}
                        name={`contacts.${contactTitle}`}
                        component={Input}
                    />
                </div>)}
        </div>
    </form>

const ProfileDataReduxForm = reduxForm({form: 'editProfile'})(ProfileDataForm)

export default ProfileDataReduxForm
