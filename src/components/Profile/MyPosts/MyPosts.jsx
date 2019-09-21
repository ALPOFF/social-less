import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements = props.postData.map( post => <Post message={post.message} like={post.likesCount}/>)

    return <div className={classes.postsBlock}>
        <h3>my posts</h3>
        <div>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
                <button>Remove</button>
            </div>
        </div>
        <div className={classes.posts}>
            {postsElements}
        </div>
    </div>

}

export default MyPosts;