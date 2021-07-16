import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    const dialogsElements = props.state.dialogs
        .map(dialog => <DialogItem id={dialog.id} name={dialog.name}/>)
    const messagesElements = props.state.messages
        .map(message => <Message message={message.message}/>)
    return <div className={s.dialogs}>
        <div className={s.dialogItems}>
            {dialogsElements}
        </div>
        <div className={s.messages}>
            {messagesElements}
        </div>
    </div>
}

export default Dialogs