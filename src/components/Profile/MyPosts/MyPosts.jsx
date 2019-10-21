import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form"
import {maxLengthCreator, required} from "../../../utils/validators/validator";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength10 =  maxLengthCreator(10)

const MyPosts = React.memo(props => {

    let postsElements = props.postData.map(post => <Post message={post.message} like={post.likesCount}/>)

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return <div className={classes.postsBlock}>
        <h3>my posts</h3>
        <AddNewPostFormRedux onSubmit={onAddPost}/>
        <div className={classes.posts}>
            {postsElements}
        </div>
    </div>

});

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field validate = {[required, maxLength10]} component={Textarea} name="newPostText" placeholder={"Enter your text"}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm ({
    form: 'ProfileAddNewPostForm'
}) (AddNewPostForm)

export default MyPosts;
