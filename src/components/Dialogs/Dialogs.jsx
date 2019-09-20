import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
    let state = props.dialogsPage;
    let dialogsElements = state.dialogs
        .map(d => <DialogItem name={d.name} id={d.id}/>)

    let messagesElements = state.messages
        .map(m => <Message message={m.message}/>)

    let sendMessage = () => {
        props.sendMessage();;
    }

    let onMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageText(body);
    }
    debugger;
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>
                    {messagesElements}
                </div>
                <div>
                    <textarea onChange={onMessageChange}
                              placeholder='Enter your message'
                              value={state.newMessageBody}>
                    </textarea>
                </div>
                <div>
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;