import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return <div>
        <ProfileInfo/>
        <MyPosts addPost={props.addPost}
                 postData={props.profilePage.postData}
                 newPostText={props.profilePage.newPostText}
                 updateNewPostText={props.updateNewPostText} />
    </div>

}

export default Profile;
