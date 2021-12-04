import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getStatus, updateStatus} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        const myUserId = 21034
        this.props.getProfile(this.props.match.params.userId ?? myUserId)
        this.props.getStatus(this.props.match.params.userId ?? myUserId)
    }

    render() {
        return <Profile {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

export default compose(
    connect(
        mapStateToProps,
        {
            getProfile,
            getStatus,
            updateStatus
        }
    ),
    withRouter
)(ProfileContainer)
