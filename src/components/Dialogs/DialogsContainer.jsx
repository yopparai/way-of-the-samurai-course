import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    const state = props.store.getState()
    const addMessage = () => {
        const action = addMessageActionCreator()
        props.store.dispatch(action)
    }
    const updateNewMessageText = (text) => {
        const action = updateNewMessageTextActionCreator(text)
        props.store.dispatch(action)
    }
    return <Dialogs
        addMessage={addMessage}
        updateNewMessageText={updateNewMessageText}
        dialogs={state.dialogsPage.dialogs}
        messages={state.dialogsPage.messages}
        newMessageText={state.dialogsPage.newMessageText}
    />
}

export default DialogsContainer