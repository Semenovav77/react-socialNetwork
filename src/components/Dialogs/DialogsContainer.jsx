import React from 'react';
import {
    addMessageActionCreator,
    updateNewMessageTextActionCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState();
    let sendMessageClick = () => {
        props.store.dispatch(addMessageActionCreator());
    }

    let onMessageChange = (body) => {
        props.store.dispatch(updateNewMessageTextActionCreator(body));
    }
    debugger;
    return (
       <Dialogs updateNewMessageText={onMessageChange} sendMessage={sendMessageClick}
       dialogsPage={state.dialogsPage}/>
    )
}

export default DialogsContainer;