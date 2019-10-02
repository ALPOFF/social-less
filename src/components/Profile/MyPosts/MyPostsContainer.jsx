import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profiles-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = (props) => {

    return (
        <StoreContext.Consumer>
            {store => {
                let state = store.getState();
                let addPost = () => {
                    store.dispatch(addPostActionCreator());
                }

                let onPostChange = (text) => {
                    let action = updateNewPostTextActionCreator(text);
                    store.dispatch(action);
                }
                return <MyPosts updateNewPostText={onPostChange}
                                addPost={addPost}
                                postData={state.profilePage.postData}
                                newPostText={state.profilePage.newPostText}/>
            }
        }
        </StoreContext.Consumer>

    )
}

export default MyPostsContainer;
