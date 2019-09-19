import React from 'react';
import classes from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog + ' ' + classes.active}>
                    Lex
                </div>
                <div className={classes.dialog}>
                    Ilyas
                </div>
                <div className={classes.dialog}>
                    Slavec
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>Hi</div>
                <div className={classes.message}>How r u</div>
                <div className={classes.message}>It</div>
            </div>
        </div>
    )
}

export default Dialogs;
