import React, {useEffect, useState} from 'react';
import {
    getAllMessageDialogsThunkCreator,
    getDialogsThunkCreator,
    setCurrentDialogActionCreator,
    sendMessageThunkCreator,
    deleteMessageThunkCreator
} from "../../redux/dialogs-reducer";
import DialogsFilter from "./DialogsFilter/DialogsFilter";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";
import {withRouter} from "react-router-dom";

const DialogsContainer = ({
                              dialogs, messages, currentDialog, id,
                              isFetchingDialogs, isFetchingMessages,
                              getAllMessageDialogsThunkCreator,
                              getDialogsThunkCreator, setCurrentDialogActionCreator, match, sendMessageThunkCreator, deleteMessageThunkCreator
                          }) => {
    return (
        <DialogsFilter
            dialogs={dialogs}
            messages={messages}
            currentDialog={currentDialog}
            isFetchingDialogs={isFetchingDialogs}
            isFetchingMessages={isFetchingMessages}
            getAllMessageDialogsThunkCreator={getAllMessageDialogsThunkCreator}
            setCurrentDialogActionCreator={setCurrentDialogActionCreator}
            getDialogsThunkCreator={getDialogsThunkCreator}
            match={match}
            sendMessageThunkCreator={sendMessageThunkCreator}
            deleteMessageThunkCreator={deleteMessageThunkCreator}
            id={id}
        />
    )
};

let mapStateToProps = (state) => {
    return {
        id: state.auth.id,
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        currentDialog: state.dialogsPage.currentDialog,
        isFetchingDialogs: state.dialogsPage.isFetchingDialogs,
        isFetchingMessages: state.dialogsPage.isFetchingMessages
    }
};
/*let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (name, body) => {
            dispatch(updateNewMessageTextActionCreator(name, body))
        },
        sendMessage: () => {
            dispatch(addMessageActionCreator());
        }
    }
};*/

export default compose(
    connect(mapStateToProps, {getAllMessageDialogsThunkCreator, getDialogsThunkCreator,
        sendMessageThunkCreator, setCurrentDialogActionCreator, deleteMessageThunkCreator}),
    withAuthRedirect,
    withRouter,
)(DialogsContainer);

/*
let AuthRedirectComponent = withAuthRedirect(Dialogs);
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);
export default DialogsContainer;*/
