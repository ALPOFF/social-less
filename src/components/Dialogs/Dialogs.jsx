import React from 'react';
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom"

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return <div className={classes.dialog + ' ' + classes.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return <div className={classes.message}>{props.message}</div>
}

const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Slava'},
        {id: 4, name: 'Alex'}];

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
            </div>
            <div className={classes.messages}>
                <Message message="Hi"/>
                <Message message="Buy"/>
                <Message message="Sell"/>
            </div>
        </div>
    )
}

export default Dialogs;
