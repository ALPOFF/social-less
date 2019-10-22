import profilesReducer, {addPostActionCreator, deletePost} from "./profiles-reducer";
import ReactDOM from "react-dom";
import App from "../App";

let state = {
    postData: [
        {id: 1, message: 'Hi post', likesCount: 4},
        {id: 2, message: 'How are you? post', likesCount: 2},
        {id: 3, message: 'Go for a walk post', likesCount: 14},
        {id: 4, message: 'Lets do it! post', likesCount: 23}]
}

it('length of posts should be incremented', () => {
    let action = addPostActionCreator("it kam")
    let newState = profilesReducer(state, action)

    expect(newState.postData.length).toBe(5);
});

it('message of new post should be correct', () => {
    let action = addPostActionCreator("it kam")
    let newState = profilesReducer(state, action)

    expect(newState.postData[4].message).toBe("it kam");
});

it('after deleting length of messages should be decrement', () => {
    let action = deletePost(1)
    let newState = profilesReducer(state, action)

    expect(newState.postData.length).toBe(3);
});

it(`after deleting length of messages shouldn't be decrement if id is incorrect`, () => {
    let action = deletePost(1000)
    let newState = profilesReducer(state, action)

    expect(newState.postData.length).toBe(4);
});


