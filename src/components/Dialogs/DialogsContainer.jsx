import React from 'react';
import {
    addMessageActionCreator,
    updateNewMessageTextActionCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

/*const DialogsContainer = (props) => {
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
};*/

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (body) => {
            dispatch(updateNewMessageTextActionCreator(body))
        },
        sendMessage: () => {
            dispatch(addMessageActionCreator());
        }
    }
};


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;