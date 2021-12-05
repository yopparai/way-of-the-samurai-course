import {addMessage} from "../../redux/dialogsReducer";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import React from "react";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state) => ({
    dialogsPage: state.dialogsPage
})

export default compose(
    connect(
        mapStateToProps,
        {
            addMessage
        }
    ),
    withAuthRedirect
)(Dialogs)
