import React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/state";


const Dialogs = (props) => {

    let state = props.store.getState().messagesPage

    let dialogsElements = state.dialogsData
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

    /*        [
            <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>,
            <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>,
            <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>,
            <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
        ];*/

    let messagesElements = state.messagesData.map(message => <Message message={message.message}/>);

    let newMessageBody = state.newMessageBody;
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={newMessageBody}
                                   onChange={onNewMessageChange}
                                   placeholder='Enter your message'></textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
