import React, {Component} from 'react';
import './App.css';
import Nav from "./components/Nav/Nav";
import {Route, withRouter} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/preloader/Preloader";

class App extends Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized)
        {return <Preloader/>}

        return (
            <div className={'app-wrapper'}>
                <HeaderContainer/>
                <Nav/>
                <div className={'app-wrapper-content'}>
                    {/* <Route path = '/dialogs' component = {Dialogs}/>
              <Route path = '/profile' component = {Profile}/>*/}
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                </div>
                {/*<Profile/>*/}
            </div>

        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);
