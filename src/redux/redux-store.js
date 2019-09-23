import {combineReducers, createStore} from "redux";
import profilesReducer from "./profiles-reducer";
import dialogsReducer from "./dialogs-reducer";

let reducers = combineReducers({
    profilePage: profilesReducer,
    messagesPage: dialogsReducer
});

let store = createStore(reducers);

export default store;
