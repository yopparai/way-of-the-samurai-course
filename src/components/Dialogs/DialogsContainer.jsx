import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () =>
    <StoreContext.Consumer>
        {
            store => {
                const state = store.getState()
                const addMessage = () => {
                    const action = addMessageActionCreator()
                    store.dispatch(action)
                }
                const updateNewMessageText = (text) => {
                    const action = updateNewMessageTextActionCreator(text)
                    store.dispatch(action)
                }
                return <Dialogs
                    addMessage={addMessage}
                    updateNewMessageText={updateNewMessageText}
                    dialogs={state.dialogsPage.dialogs}
                    messages={state.dialogsPage.messages}
                    newMessageText={state.dialogsPage.newMessageText}
                />
            }
        }
    </StoreContext.Consumer>

export default DialogsContainer