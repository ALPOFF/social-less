import React from 'react';
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={classes.header}>
        <img src='https://seeklogo.com/images/C/company-name-logo-09881CAD1A-seeklogo.com.png'/>

        <div className={classes.loginBlock}>
            {props.isAuth ? props.login
                :<NavLink to={'/login/'}>Login</NavLink>}
        </div>
    </header>
}

export default Header;
