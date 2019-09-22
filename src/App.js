import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

const App = (props) =>  {
    return (
        <BrowserRouter>
        <div className={'app-wrapper'}>
          <Header />
          <Nav/>
          <div className={'app-wrapper-content'}>
             {/* <Route path = '/dialogs' component = {Dialogs}/>
              <Route path = '/profile' component = {Profile}/>*/}

              <Route path = '/dialogs' render = { () => <Dialogs state={props.state.messagesPage}/>}/>
              <Route path = '/profile' render = { () => <Profile dispatch={props.dispatch} profilePage={props.state.profilePage} />}/>
          </div>
          {/*<Profile/>*/}
        </div>
        </BrowserRouter>

            );
}





export default App;
