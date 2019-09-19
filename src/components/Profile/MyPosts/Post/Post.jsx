import React from "react";
import classes from './Post.module.css'

const Post = (props) => {
    return <div className={classes.item}>
        <img src="https://www.atc.co.nz/media/3039/avadiakhaby2018.jpg?center=0.39333333333333331,0.52166666666666661&mode=crop&width=980&height=980&rnd=131751474400000000" alt=""/>
        { props.message }
        <div>  <span>like {props.like}</span>
           </div>

                    </div>
}

export default Post;
