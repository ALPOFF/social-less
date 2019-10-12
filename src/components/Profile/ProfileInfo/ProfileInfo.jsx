import React from "react";
import classes from './ProfileInfo.module.css'
import Preloader from "../../common/preloader/Preloader";


const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return <div>
        <div>
            <img src={'http://s3.amazonaws.com/wallpapers2/wallpapers/images/000/000/582/thumb/andromeda_galaxy.jpg?1499899637'}/>
        </div>
        <div className={classes.descriptionBlock}>
            <img src={props.profile.photos.large} />
            ava + description
        </div>
    </div>

}

export default ProfileInfo;
