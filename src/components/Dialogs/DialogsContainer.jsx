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
                       id:"57048f875667f080fba",
                       fullname: "Vasilij Pupkin",
                       avatar: null
                   },
                   lastMessage: {
                       text: "Привет кул! как твои дела? сколько лет, сколько зим",
                       created_at: new Date(2018, 12, 1, 19,24,25),
                   }
               },
               {
                   id: Math.random(),
                   user: {
                       id:"4d8266657048f875667f080fba",
                       fullname: "Vasilij Pupkin",
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
                       avatar: null
                   },
                   lastMessage: {
                       text: "Привет кул! как твои дела? сколько лет, сколько зим",
                       created_at: new Date(2017, 12, 1, 19,24,25),
                   }
               },
               {
                   id: Math.random(),
                   user: {
                       id:"84d8266657048f875667f080fba",
                       fullname: "Vasilij Pupkin",
                       avatar: 'https://social-network.samuraijs.com/activecontent/images/users/1779/user.jpg?v=7'
                   },
                   lastMessage: {
                       text: "Привет, нормально",
                       created_at:  new Date(),
                   }
               },
               {
                   id: Math.random(),
                   user: {
                       id:"875667f080fba",
                       fullname: "Vasilij Pupkin",
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
                       id:"48f875667f080fba",
                       fullname: "Vasilij Pupkin",
                       avatar: null
                   },
                   lastMessage: {
                       text: "Привет кул! как твои дела? сколько лет, сколько зим",
                       created_at: new Date(2011, 12, 1, 19,24,25),

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
