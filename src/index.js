import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let postData = [
    {id: 1, message: 'Hi post', likesCount:4},
    {id: 2, message: 'How are you? post', likesCount:2},
    {id: 3, message: 'Go for a walk post', likesCount:14},
    {id: 4, message: 'Lets do it! post', likesCount:23}];

let dialogsData = [
    {id: 1, name: 'Dima'},
    {id: 2, name: 'Andrew'},
    {id: 3, name: 'Slava'},
    {id: 4, name: 'Alex'}];

let messagesData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Go for a walk'},
    {id: 4, message: 'Lets do it!'}];

ReactDOM.render(<App postData={postData} dialogsData={dialogsData} messagesData={messagesData}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
