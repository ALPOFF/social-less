import React from "react";
import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return <div className={classes.content}>
        <div>
            <img src={'http://s3.amazonaws.com/wallpapers2/wallpapers/images/000/000/582/thumb/andromeda_galaxy.jpg?1499899637'}/>
        </div>
        <div>
            ava + description
        </div>

        <MyPosts/>
    </div>

}

export default Profile;
