import React from "react";
import classes from './ProfileInfo.module.css'
import Preloader from "../../common/preloader/Preloader";
import ProfileStatus from "./ProfileStatus"

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return <div>
        {/*<div>
            <img src={'http://s3.amazonaws.com/wallpapers2/wallpapers/images/000/000/582/thumb/andromeda_galaxy.jpg?1499899637'}/>
        </div>*/}
        <div className={classes.descriptionBlock}>
            {props.profile.fullName}
            {props.profile.photos.large === null ?
                <div><img src="https://www.fii.org/wp-content/uploads/2017/02/fg-avatar-anonymous-user-retina.png" alt="" height={150}/></div>
                : <img src={props.profile.photos.large}/>}
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
        </div>
    </div>

}

export default ProfileInfo;
