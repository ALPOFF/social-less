import {applyMiddleware, combineReducers, createStore} from "redux";
import profilesReducer from "./profiles-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk" //import thunkmiddleware

let reducers = combineReducers({
    profilePage: profilesReducer,
    messagesPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware)); //second param - middlw for thunk

window.store = store;

export default store;
