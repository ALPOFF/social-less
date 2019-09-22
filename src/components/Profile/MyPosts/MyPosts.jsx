import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements = props.postData.map( post => <Post message={post.message} like={post.likesCount}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
    }

    return <div className={classes.postsBlock}>
        <h3>my posts</h3>
        <div>
            <div>
                <textarea ref={ newPostElement}></textarea>
            </div>
            <div>
                <button onClick={ addPost }>Add post</button>
                <button>Remove</button>
            </div>
        </div>
        <div className={classes.posts}>
            {postsElements}
        </div>
    </div>

}

export default MyPosts;
