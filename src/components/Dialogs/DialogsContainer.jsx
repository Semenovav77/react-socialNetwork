import React from 'react';
import {
    addMessageActionCreator,
    updateNewMessageTextActionCreator
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";

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
        dialogsPage: state.dialogsPage,
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (name, body) => {
            dispatch(updateNewMessageTextActionCreator(name, body))
        },
        sendMessage: () => {
            dispatch(addMessageActionCreator());
        }
    }
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);

/*
let AuthRedirectComponent = withAuthRedirect(Dialogs);
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);
export default DialogsContainer;*/
