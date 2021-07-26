import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";

const Dialogs = (props) => {
    const dialogsElements = props.dialogsPage.dialogs
        .map(dialog => <DialogItem id={dialog.id} name={dialog.name}/>)
    const messagesElements = props.dialogsPage.messages
        .map(message => <Message message={message.message}/>)
    const newMessageElement = React.createRef()
    const addMessage = () => {
        const action = {type: 'ADD-MESSAGE'};
        props.dispatch(action)
    }
    const onMessageChange = () => {
        const text = newMessageElement.current.value
        const action = {type: 'UPDATE-NEW-MESSAGE-TEXT', newMessageText: text}
        props.dispatch(action)
    }
    return <div className={s.dialogs}>
        <div className={s.dialogItems}>
            {dialogsElements}
        </div>
        <div className={s.messages}>
            <div>{messagesElements}</div>
            <div>
                <textarea ref={newMessageElement} value={props.dialogsPage.newMessageText} onChange={onMessageChange}/>
            </div>
            <div>
                <button onClick={addMessage}>Add message
                </button>
            </div>
        </div>
    </div>
}

export default Dialogs