import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, setUserProfile} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.getProfile(this.props.match.params.userId ?? 2)
    }

    render() {
        return <Profile {...this.props} />
    }
}

const WithAuthRedirectComponent = withAuthRedirect(ProfileContainer)
const WithRouterProfileContainer = withRouter(WithAuthRedirectComponent)

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

export default connect(mapStateToProps, {setUserProfile, getProfile})(WithRouterProfileContainer)
