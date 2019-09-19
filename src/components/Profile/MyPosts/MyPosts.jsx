import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return <div>
            my posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
                <div className={'posts'}>
                  <Post message='Hi, h r u' like='15'/>
                    <Post message='first post' like='20'/>
                </div>
        </div>

}

export default MyPosts;
