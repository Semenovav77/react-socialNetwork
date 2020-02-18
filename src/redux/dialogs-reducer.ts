import {dialogsAPI} from "../api/Api";
import {setCurrentPage, setIsFetching, setTotalUsersCount, setUsers} from "./users-reducer";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';
const SET_CURRENT_DIALOG = 'SET_CURRENT_DIALOG';
const SET_MESSAGES_CURRENT_DIALOG = 'SET_MESSAGES_CURRENT_DIALOG';
const SET_DIALOGS = 'SET_DIALOGS';
const SET_IS_FETCHING_DIALOG = 'SET_IS_FETCHING_DIALOG';
const SET_IS_FETCHING_MESSAGES = 'SET_IS_FETCHING_MESSAGES';

type UserType = {
    id: string
    fullname: string
    avatar: string | null
}
type DialogType = {
    id: string
    text: string | null
    created_at: string
    user: UserType
}

type UserMessageType = {
    id: string
    fullname: string
    avatar: string
}
type MessageType = {
    id: string
    text: string | null
    created_at: string
    user: UserMessageType
    dialog: string
}
let initialState = {
    dialogs: [] as Array<DialogType>,
    messages: [] as Array<MessageType>,
    currentDialog: null as null | string,
    isFetchingDialogs: false,
    isFetchingMessages: false

};

export type InitialStateType = typeof initialState;

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
    currentDialog: string
}

export const setCurrentDialogActionCreator = (id: string): SetCurrentDialogActionCreatorActionType => {
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

export const getDialogsThunkCreator = () => {
    return (dispatch: any) => {
        dispatch(setIsFetchingDialogs(true));
        dialogsAPI.getDialogs().then((data: any) => {
            dispatch(setIsFetchingDialogs(false));
            dispatch(setDialogsActionCreator(data.data));
        });
    }
};
export const getAllMessageDialogsThunkCreator = (currentDialog: string) => {
    return (dispatch: any) => {
        dispatch(setIsFetchingMessages(true));
        dialogsAPI.getMessages(currentDialog).then((data: any) => {
            dispatch(setIsFetchingMessages(false));
            dispatch(setMessagesCurrentDialogActionCreator(data.data));
        });
    }
};


export default dialogsReducer;