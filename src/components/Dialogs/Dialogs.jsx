import React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogsElements = props.dialogsData
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

    /*        [
            <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>,
            <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>,
            <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>,
            <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
        ];*/

    let messagesElements = props.messagesData.map(message => <Message message={message.message}/>);

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;
