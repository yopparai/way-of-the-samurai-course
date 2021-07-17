import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";

const Dialogs = (props) => {
    const dialogsElements = props.state.dialogs
        .map(dialog => <DialogItem id={dialog.id} name={dialog.name}/>)
    const messagesElements = props.state.messages
        .map(message => <Message message={message.message}/>)
    const newMessageElement = React.createRef()
    const addMessage = () => {
        const text = newMessageElement.current.value
        alert(text)
    }
    return <div className={s.dialogs}>
        <div className={s.dialogItems}>
            {dialogsElements}
        </div>
        <div className={s.messages}>
            <div>{messagesElements}</div>
            <div>
                <textarea ref={newMessageElement}/>
            </div>
            <div>
                <button onClick={addMessage}>Add message
                </button>
            </div>
        </div>
    </div>
}

export default Dialogs