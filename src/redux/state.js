let rerenderEntireTree = () => {
    console.log("dsadasd");
}

let state = {
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
}

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };

    state.profilePage.postData.push(newPost);
    state.profilePage.newPostText='';
    rerenderEntireTree(state)
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state)
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;
