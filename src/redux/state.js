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
                {id: 4, name: 'Alex'}]
        }
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

    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };

        this._state.profilePage.postData.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state)
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state)
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };

            this._state.profilePage.postData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state)
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state)
        }
    }
}

export default store;
window.store = store;
