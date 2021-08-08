import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogsReducer";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";

const mapStateToProps = (state) => ({
    dialogsPage: state.dialogsPage
})
const mapDispatchToProps = (dispatch) => ({
    addMessage: () => {
        const action = addMessageActionCreator()
        dispatch(action)
    },
    updateNewMessageText: (text) => {
        const action = updateNewMessageTextActionCreator(text)
        dispatch(action)
    }
})

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer