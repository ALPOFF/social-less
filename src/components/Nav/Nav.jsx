import React from "react";
import classes from './Nav.module.css'
import {NavLink} from "react-router-dom";

const Nav = () => {
    return <nav className={classes.nav}>
        <div className={`${classes.item} ${classes.active}`}>
            <NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink>
        </div>

        <div className={classes.item}>
            <NavLink to="/dialogs" activeClassName={classes.active}>Messages</NavLink>
        </div>

        <div className={classes.item}>
            <NavLink to="/users" activeClassName={classes.active}>Users</NavLink>
        </div>

        <div className={classes.item}>
            <a>News</a>
        </div>

        <div className={classes.item}>
            <a>Music</a>
        </div>

        <div className={classes.item}>
            <a>Settings</a>
        </div>


    </nav>
}

export default Nav;
