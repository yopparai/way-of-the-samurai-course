import {Component} from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {authorize, setAuthUserData} from "../../redux/authReducer";

class HeaderContainer extends Component {
    componentDidMount() {
        this.props.authorize()
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {setAuthUserData, authorize})(HeaderContainer)
