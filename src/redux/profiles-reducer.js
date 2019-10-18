import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS'

let initialState = {
    postData: [
        {id: 1, message: 'Hi post', likesCount: 4},
        {id: 2, message: 'How are you? post', likesCount: 2},
        {id: 3, message: 'Go for a walk post', likesCount: 14},
        {id: 4, message: 'Lets do it! post', likesCount: 23}],
    profile: null,
    status: ""
}

const profilesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                postData: [...state.postData, newPost],
            };
            case SET_STATUS:
            return {
                ...state,
                status: action.status
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

export const addPostActionCreator = (newPostText) => {
    return {
        type: ADD_POST,
        newPostText
    }
}

const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE, profile
    }
}

export const setStatus = (status) => {
    return {
        type: SET_STATUS,
        status
    }
}


export const getUserProfile = (userId) => {
    return (dispatch) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
    })
    }
}

export const getStatus = (userId) => {
    return (dispatch) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(setStatus(response.data));
    })
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    })
    }
}



export default profilesReducer;
