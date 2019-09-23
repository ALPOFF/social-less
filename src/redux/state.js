import profilesReducer from "./profiles-reducer";
import dialogsReducer from "./dialogs-reducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {
    _state: {
        profilePage: {
            postData: [
                {id: 1, message: 'Hi post', likesCount: 4},
                {id: 2, message: 'How are you? post', likesCount: 2},
                {id: 3, message: 'Go for a walk post', likesCount: 14},
                {id: 4, message: 'Lets do it! post', likesCount: 23}],
            newPostText: "it kam"
        },
        messagesPage: {
            messagesData: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Go for a walk'},
                {id: 4, message: 'Lets do it!'}],
            dialogsData: [
                {id: 1, name: 'Dima'},
                {id: 2, name: 'Andrew'},
                {id: 3, name: 'Slava'},
                {id: 4, name: 'Alex'}],
            newMessageBody: ""
        },

    },
    _callSubscriber() {
        console.log("dsadasd");
    }, //метод
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profilesReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
        this._callSubscriber(this._state)

    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT, newText: text
    }
}

export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}

export const updateNewMessageBodyCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY, body: body
    }
}

export default store;
window.store = store;
