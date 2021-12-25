import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import React, {Component, lazy, Suspense} from "react";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/reduxStore";

const DialogsContainer = lazy(() => import("./components/Dialogs/DialogsContainer"))
const ProfileContainer = lazy(() => import("./components/Profile/ProfileContainer"))

class App extends Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized)
            return <Preloader/>
        return <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Switch>
                        <Route path='/profile/:userId?'
                               render={() => <Suspense fallback={<Preloader/>}><ProfileContainer/></Suspense>}
                        />
                        <Route path='/dialogs'
                               render={() => <Suspense fallback={<Preloader/>}><DialogsContainer/></Suspense>}
                        />
                        <Route path='/users'
                               render={() => <UsersContainer/>}
                        />
                        <Route path='/login'
                               render={() => <Login/>}
                        />
                        <Route path='*'
                               render={() => <div>404 NOT FOUND</div>}
                        />
                        <Redirect from="/" to="/profile"/>
                    </Switch>
                </div>
            </div>
        </BrowserRouter>;
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

const AppContainer = connect(mapStateToProps, {initializeApp})(App)
const MainApp = () => <Provider store={store}>
    <AppContainer/>
</Provider>

export default MainApp
