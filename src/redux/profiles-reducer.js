import {usersAPI} from "../components/api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    postData: [
        {id: 1, message: 'Hi post', likesCount: 4},
        {id: 2, message: 'How are you? post', likesCount: 2},
        {id: 3, message: 'Go for a walk post', likesCount: 14},
        {id: 4, message: 'Lets do it! post', likesCount: 23}],
    newPostText: "it kam",
    profile: null
}

const profilesReducer = (state = initialState, action) => {
    let stateCopy;
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                postData: [...state.postData, newPost],
                newPostText: ''
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        default:
            return state;
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

const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE, profile
    }
}


export const getUserProfile = (userId) => {
    return (dispatch) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
    })
    }
}

export default profilesReducer;
