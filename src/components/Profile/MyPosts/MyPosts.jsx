import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
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
            <Post message='Hi, h r u' like='15'/>
            <Post message='first post' like='20'/>
        </div>
    </div>

}

export default MyPosts;
