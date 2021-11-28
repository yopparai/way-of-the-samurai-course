import {addMessage, updateNewMessageText} from "../../redux/dialogsReducer";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import React from "react";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

const WithAuthRedirectComponent = withAuthRedirect(Dialogs)

const mapStateToProps = (state) => ({
    dialogsPage: state.dialogsPage
})

const DialogsContainer = connect(
    mapStateToProps,
    {
        addMessage,
        updateNewMessageText
    }
)(WithAuthRedirectComponent)

export default DialogsContainer
