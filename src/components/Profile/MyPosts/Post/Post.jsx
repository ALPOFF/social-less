import React from "react";
import classes from './Post.module.css'

const Post = (props) => {
    return <div className={classes.item}>
        <img src="http://bootstraptema.ru/snippets/icons/2016/mia/3.png" alt=""/>
        { props.message }
        <div>  <span>like {props.like}</span>
           </div>

                    </div>
}

export default Post;
