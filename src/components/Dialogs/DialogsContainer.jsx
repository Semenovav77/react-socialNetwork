import React, {useEffect, useState} from 'react';
import {
    getAllMessageDialogsThunkCreator,
    getDialogsThunkCreator,
    setCurrentDialogActionCreator
} from "../../redux/dialogs-reducer";
import DialogsFilter from "./DialogsFilter/DialogsFilter";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";


const DialogsContainer = ({
                              dialogs, messages, currentDialog,
                              isFetchingDialogs, isFetchingMessages,
                              getAllMessageDialogsThunkCreator,
                              getDialogsThunkCreator, setCurrentDialogActionCreator
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
            getDialogsThunkCreator={getDialogsThunkCreator}/>
    )
};

let mapStateToProps = (state) => {
    return {
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
    connect(mapStateToProps, {getAllMessageDialogsThunkCreator, getDialogsThunkCreator, setCurrentDialogActionCreator}),
    /*withAuthRedirect,*/
)(DialogsContainer);

/*
let AuthRedirectComponent = withAuthRedirect(Dialogs);
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);
export default DialogsContainer;*/
