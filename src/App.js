import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) =>  {
    return (
        <BrowserRouter>
        <div className={'app-wrapper'}>
          <Header />
          <Nav/>
          <div className={'app-wrapper-content'}>
             {/* <Route path = '/dialogs' component = {Dialogs}/>
              <Route path = '/profile' component = {Profile}/>*/}

              <Route path = '/dialogs' render = { () => <DialogsContainer store={props.store} />}/>
              <Route path = '/profile' render = { () => <Profile store={props.store} />}/>
          </div>
          {/*<Profile/>*/}
        </div>
        </BrowserRouter>

            );
}





export default App;
