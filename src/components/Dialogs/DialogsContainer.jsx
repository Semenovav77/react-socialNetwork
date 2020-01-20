import React from 'react';
import {
    addMessageActionCreator,
    updateNewMessageTextActionCreator
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";


const DialogsContainer = (props) => {
    return (
       <Dialogs
           items={[
               {
                   id: "0882984d8266657048f875667f080fba",
                   user: {
                       id:"0892984d8266657048f875667f080fba",
                       fullname: "Onotolle Vasserman",
                       avatar: null
                   },
                   lastMessage: {
                       text: "Привет кул! как твои дела? сколько лет, сколько зим",
                       created_at: new Date(2019, 12, 1, 19,24,25),
                   }
               },
               {
                   id: Math.random(),
                   user: {
                       id:"0892984d8266657048f875667f080fba",
                       fullname: "Vasilij Pupkin",
                       avatar: 'https://social-network.samuraijs.com/activecontent/images/users/1779/user.jpg?v=7'
                   },
                   lastMessage: {
                       text: "Привет, нормально",
                       created_at:  new Date(),
                   }
               }
           ]}/>
    )
};

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
    /*withAuthRedirect,*/
)(DialogsContainer);

/*
let AuthRedirectComponent = withAuthRedirect(Dialogs);
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);
export default DialogsContainer;*/
