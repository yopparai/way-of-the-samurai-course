import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import {connect} from "react-redux";
import MyPosts from "./MyPosts";

const mapStateToProps = (state) => ({
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
})

const mapDispatchToProps = (dispatch) => ({
    addPost: () => {
        const action = addPostActionCreator()
        dispatch(action)
    },
    updateNewPostText: (text) => {
        let action = updateNewPostTextActionCreator(text)
        dispatch(action)
    }
})

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer