import React, {useEffect, useState} from 'react';
import {
    getAllMessageDialogsThunkCreator,
    getDialogsThunkCreator
} from "../../redux/dialogs-reducer";
import DialogsFilter from "./DialogsFilter/DialogsFilter";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";


const DialogsContainer = ({dialogs, messages, getAllMessageDialogsThunkCreator, getDialogsThunkCreator}) => {
    return (
       <DialogsFilter
           dialogs={dialogs}
           messages={messages}
           getAllMessageDialogsThunkCreator={getAllMessageDialogsThunkCreator}
           getDialogsThunkCreator={getDialogsThunkCreator}/>
    )
};

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
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
    connect(mapStateToProps, {getAllMessageDialogsThunkCreator, getDialogsThunkCreator}),
    /*withAuthRedirect,*/
)(DialogsContainer);

/*
let AuthRedirectComponent = withAuthRedirect(Dialogs);
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);
export default DialogsContainer;*/
