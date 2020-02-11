import {dialogsAPI} from "../api/Api";
import {setCurrentPage, setIsFetching, setTotalUsersCount, setUsers} from "./users-reducer";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';
const SET_CURRENT_DIALOG = 'SET_CURRENT_DIALOG';
const SET_MESSAGES_CURRENT_DIALOG = 'SET_MESSAGES_CURRENT_DIALOG';
const SET_DIALOGS = 'SET_DIALOGS';
const SET_IS_FETCHING_DIALOG = 'SET_IS_FETCHING_DIALOG';
const SET_IS_FETCHING_MESSAGES = 'SET_IS_FETCHING_MESSAGES';

let initialState = {
    dialogs: [],
    messages: [],
    currentDialog: null,
    isFetchingDialogs: false,
    isFetchingMessages: false

};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            if (action.name === "newMessageBody") return {
                ...state,
                newMessageBody: action.body
            };
            else if (action.name === "additionalyInfo") return {
                ...state,
                additionalyInfo: action.body
            };
        case  SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 4, message: body, likesCount: 0}],
                newMessageBody: '',
                additionalyInfo: ''
            };
        case  SET_DIALOGS:
            return {
                ...state,
                dialogs: action.dialogs
            };
        case  SET_CURRENT_DIALOG:
            return {
                ...state,
                currentDialog: action.currentDialog
            };
        case  SET_MESSAGES_CURRENT_DIALOG:
            return {
                ...state,
                messages: action.messages
            };
        case  SET_IS_FETCHING_DIALOG:
            return {
                ...state,
                isFetchingDialogs: action.isFetchingDialogs
            };
        case  SET_IS_FETCHING_MESSAGES:
            return {
                ...state,
                isFetchingMessages: action.isFetchingMessages
            };
        default:
            return state;
    }
};

export const setIsFetchingDialogs = (isFetchingDialogs) => {
    return {
        type: SET_IS_FETCHING_DIALOG,
        isFetchingDialogs
    }
};

export const setIsFetchingMessages = (isFetchingMessages) => {
    return {
        type: SET_IS_FETCHING_MESSAGES,
        isFetchingMessages
    }
};

export const addMessageActionCreator = () => {
    return {
        type: SEND_MESSAGE
    }
};

export const updateNewMessageTextActionCreator = (name, text) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        name,
        body: text
    }
};

export const setDialogsActionCreator = (dialogs) => {
    return {
        type: SET_DIALOGS,
        dialogs: dialogs
    }
};
export const setCurrentDialogActionCreator = (id) => {
    return {
        type: SET_CURRENT_DIALOG,
        currentDialog: id
    }
};
export const setMessagesCurrentDialogActionCreator = (messages) => {
    return {
        type: SET_MESSAGES_CURRENT_DIALOG,
        messages: messages
    }
};

export const getDialogsThunkCreator = () => {
    return (dispatch) => {
        dispatch(setIsFetchingDialogs(true));
        dialogsAPI.getDialogs().then(data => {
            dispatch(setIsFetchingDialogs(false));
            dispatch(setDialogsActionCreator(data.data));
        });
    }
};
export const getAllMessageDialogsThunkCreator = (currentDialog) => {
    return (dispatch) => {
        dispatch(setIsFetchingMessages(true));
        dialogsAPI.getMessages(currentDialog).then(data => {
            dispatch(setIsFetchingMessages(false))
            dispatch(setMessagesCurrentDialogActionCreator(data.data));
        });
    }
};


export default dialogsReducer;