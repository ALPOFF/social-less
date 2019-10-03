import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profiles-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        postData: state.postData,
        newPostText: state.newPostText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {dispatch(addPostActionCreator())
        },
        onPostChange: (text) => {dispatch(updateNewPostTextActionCreator(text))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts);

export default MyPostsContainer;
