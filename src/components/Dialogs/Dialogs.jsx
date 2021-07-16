import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = () => {
    const dialogs = [
        {id: 1, name: 'Andrey'},
        {id: 2, name: 'Masha'},
        {id: 3, name: 'Sasha'},
        {id: 4, name: 'Misha'},
        {id: 5, name: 'Jenny'},
        {id: 6, name: 'Ivan'}
    ]
    const dialogsElements = dialogs
        .map(dialog => <DialogItem id={dialog.id} name={dialog.name}/>)
    const messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'Yo'}
    ]
    const messagesElements = messages
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