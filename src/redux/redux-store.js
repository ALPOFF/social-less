import {combineReducers, createStore} from "redux";
import profilesReducer from "./profiles-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    profilePage: profilesReducer,
    messagesPage: dialogsReducer,
    usersPage: usersReducer
});

let store = createStore(reducers);

export default store;
