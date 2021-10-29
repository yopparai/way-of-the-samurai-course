import {addMessage, updateNewMessageText} from "../../redux/dialogsReducer";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";

const mapStateToProps = (state) => ({
    dialogsPage: state.dialogsPage
})

const DialogsContainer = connect(
    mapStateToProps,
    {
        addMessage,
        updateNewMessageText
    }
)(Dialogs)

export default DialogsContainer
