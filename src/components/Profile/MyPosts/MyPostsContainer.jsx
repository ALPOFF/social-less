import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profiles-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        postData: state.profilePage.postData,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {dispatch(addPostActionCreator())
        },
        updateNewPostText: (text) => {dispatch(updateNewPostTextActionCreator(text))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts);

export default MyPostsContainer;
