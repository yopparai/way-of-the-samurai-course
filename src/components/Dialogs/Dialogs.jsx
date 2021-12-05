import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import {Field, reduxForm} from "redux-form";

const AddMessageForm = (props) =>
    <form onSubmit={props.handleSubmit}>
        <div>
            <Field
                component='textarea'
                name='newMessageText'
                placeholder='Enter your message'
            />
        </div>
        <div>
            <button>Add message</button>
        </div>
    </form>

const AddMessageFormRedux = reduxForm({form: 'dialogsAddMessageForm'})(AddMessageForm)

const Dialogs = (props) => {
    const dialogsElements = props.dialogsPage.dialogs
        .map(dialog => <DialogItem id={dialog.id} name={dialog.name}/>)
    const messagesElements = props.dialogsPage.messages
        .map(message => <Message message={message.message}/>)
    const addNewMessage = (values) => {
        props.addMessage(values.newMessageText)
    }
    return <div className={s.dialogs}>
        <div className={s.dialogItems}>
            {dialogsElements}
        </div>
        <div className={s.messages}>
            <div>{messagesElements}</div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    </div>
}

export default Dialogs
