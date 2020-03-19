import {dialogsAPI} from "../api/Api";
import {setCurrentPage, setIsFetching, setTotalUsersCount, setUsers} from "./users-reducer";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";
import {getProfileThunkCreator} from "./profile-reducer";
import {openNotification} from "../helpers/openNotification";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';
const SET_CURRENT_DIALOG = 'SET_CURRENT_DIALOG';
const SET_MESSAGES_CURRENT_DIALOG = 'SET_MESSAGES_CURRENT_DIALOG';
const SET_DIALOGS = 'SET_DIALOGS';
const SET_IS_FETCHING_DIALOG = 'SET_IS_FETCHING_DIALOG';
const SET_IS_FETCHING_MESSAGES = 'SET_IS_FETCHING_MESSAGES';


type DialogType = {
    id: string
    text: string | null
    userName: string
    lastDialogActivityDate: string
    lastUserActivityDate: string
    newMessagesCount: number
    photos: {
        small: string | null
        large: string | null
    }

}

type MessageType = {
    id: string
    body: string | null
    addedAt: string
    senderId: number
    senderName: string
    recipientId: number
    viewed: boolean
}

type MessagesType = {
    items: {
        id: string
        body: string | null
        addedAt: string
        senderId: number
        senderName: string
        recipientId: number
        viewed: boolean
    }
}

let initialState = {
    dialogs: [] as Array<DialogType>,
    messages: [] as Array<MessagesType>,
    currentDialog: null as null | number,
    isFetchingDialogs: false,
    isFetchingMessages: false

};

export type InitialStateType = typeof initialState;

type ActionsTypes = SetIsFetchingDialogsActionType | SetIsFetchingMessagesActionType | SetDialogsActionCreatorActionType
    | SetCurrentDialogActionCreatorActionType | setMessagesCurrentDialogActionCreatorActionType

const dialogsReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
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

type SetIsFetchingDialogsActionType = {
    type: typeof SET_IS_FETCHING_DIALOG,
    isFetchingDialogs: boolean
}
export const setIsFetchingDialogs = (isFetchingDialogs: boolean): SetIsFetchingDialogsActionType => {
    return {
        type: SET_IS_FETCHING_DIALOG,
        isFetchingDialogs
    }
};

type SetIsFetchingMessagesActionType = {
    type: typeof SET_IS_FETCHING_MESSAGES,
    isFetchingMessages: boolean
}
export const setIsFetchingMessages = (isFetchingMessages: boolean): SetIsFetchingMessagesActionType => {
    return {
        type: SET_IS_FETCHING_MESSAGES,
        isFetchingMessages
    }
};

/*export const addMessageActionCreator = () => {
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
};*/

type SetDialogsActionCreatorActionType = {
    type: typeof SET_DIALOGS
    dialogs: Array<DialogType>
}
export const setDialogsActionCreator = (dialogs: Array<DialogType>): SetDialogsActionCreatorActionType => {
    return {
        type: SET_DIALOGS,
        dialogs: dialogs
    }
};

type SetCurrentDialogActionCreatorActionType = {
    type: typeof SET_CURRENT_DIALOG
    currentDialog: number
}
export const setCurrentDialogActionCreator = (id: number): SetCurrentDialogActionCreatorActionType => {
    return {
        type: SET_CURRENT_DIALOG,
        currentDialog: id
    }
};

type setMessagesCurrentDialogActionCreatorActionType = {
    type: typeof SET_MESSAGES_CURRENT_DIALOG
    messages: Array<MessageType>
}
export const setMessagesCurrentDialogActionCreator = (messages: Array<MessageType>): setMessagesCurrentDialogActionCreatorActionType => {
    return {
        type: SET_MESSAGES_CURRENT_DIALOG,
        messages: messages
    }
};

export const addDialogThunkCreator = (userId: number): ThunkAction<void, AppStateType, unknown, ActionsTypes> => {
    return (dispatch) => {
        dispatch(setIsFetchingDialogs(true));
        dialogsAPI.addDialog(userId).then((data: any) => {
            dispatch(setIsFetchingDialogs(false));
        }).catch((err) => {
            openNotification({
                title: 'Ошибка!',
                text: err.message,
                type: 'error',
            });
        })
    };

};

export const sendMessageThunkCreator = (userId: number, message: string): ThunkAction<void, AppStateType, unknown, ActionsTypes> => {
    return (dispatch) => {
        dialogsAPI.sendMessage(userId, message).then((data: any) => {
            if (data.data.resultCode === 0) {
                dispatch(getAllMessageDialogsThunkCreator(userId))
            }
        });
    }
};

export const deleteMessageThunkCreator = (messageId: string, userId: number): ThunkAction<void, AppStateType, unknown, ActionsTypes> => {
    return (dispatch) => {
        dialogsAPI.deleteMessage(messageId).then((data: any) => {
            if (data.data.resultCode === 0) {
                dispatch(getAllMessageDialogsThunkCreator(userId))
            }
        });
    }
};


export const getDialogsThunkCreator = (): ThunkAction<void, AppStateType, unknown, ActionsTypes> => {
    return (dispatch) => {
        dispatch(setIsFetchingDialogs(true));
        dialogsAPI.getDialogs().then((data: any) => {
            dispatch(setIsFetchingDialogs(false));
            dispatch(setDialogsActionCreator(data.data));
        });
    }
};

export const getAllMessageDialogsThunkCreator = (currentDialog: number): ThunkAction<void, AppStateType, unknown, ActionsTypes> => {
    return (dispatch) => {
        dispatch(setIsFetchingMessages(true));
        dialogsAPI.getMessages(currentDialog).then((data: any) => {
            dispatch(setIsFetchingMessages(false));
            dispatch(setMessagesCurrentDialogActionCreator(data.data));
        });
    }
};


export default dialogsReducer;