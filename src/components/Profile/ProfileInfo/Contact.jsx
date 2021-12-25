import s from "./ProfileInfo.module.css";

const Contact = ({contactTitle, contactValue}) =>
    <div key={contactTitle} className={s.contact}>
        <b>{contactTitle}</b>: {contactValue}
    </div>

export default Contact
