import s from './Dialogs.module.css'

const Dialogs = () =>
    <div className={s.dialogs}>
        <div className={s.dialogItems}>
            <div className={`${s.dialog} ${s.active}`}>Andrey</div>
            <div className={s.dialog}>Masha</div>
            <div className={s.dialog}>Sasha</div>
            <div className={s.dialog}>Misha</div>
            <div className={s.dialog}>Jenny</div>
            <div className={s.dialog}>Ivan</div>
        </div>
        <div className={s.messages}>
            <div className={s.message}>Hi</div>
            <div className={s.message}>How are you</div>
            <div className={s.message}>Yo</div>
        </div>
    </div>

export default Dialogs