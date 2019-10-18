import React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form"

const Dialogs = (props) => {

    let state = props.messagesPage;

    let dialogsElements = state.dialogsData.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>);

    let messagesElements = state.messagesData.map(message => <Message key={message.id} message={message.message}/>);

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }

    if (!props.isAuth) return <Redirect to={"/login"}/>

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div>{messagesElements}</div>
            </div>
            <AddMesageFormRedux onSubmit={addNewMessage}/>
        </div>
    )
}

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component="textarea" name="newMessageBody" placeholder={"Enter your message"}/>
            <button>Send</button>
        </form>
    )
}

const AddMesageFormRedux = reduxForm ({
    form: 'dialogAddMessageForm'
}) (AddMessageForm)

export default Dialogs;
