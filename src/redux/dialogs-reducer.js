import {dialogsAPI} from "../api/Api";
import {setCurrentPage, setIsFetching, setTotalUsersCount, setUsers} from "./users-reducer";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';
const SET_CURRENT_DIALOG = 'SET_CURRENT_DIALOG';
const SET_MESSAGES_CURRENT_DIALOG = 'SET_MESSAGES_CURRENT_DIALOG';
const SET_DIALOGS = 'SET_DIALOGS';

let initialState = {
/*    messages: [
        {
        id: "0882984d8266657048f875667f080fba",
        text: "Привет кул! как твои дела? сколько лет, сколько зим",
        created_at: new Date(2019, 12, 1, 19, 24, 25),
        user: {
            id: "0892984d8266657048f875667f080fba",
            fullname: "Onotolle Vasserman",
            avatar: null,
        },
        dialog: "0892984d8266657048f875667f080fba",
        },
        {
            id: Math.random(),
            text: "Привет кул! как твои дела? сколько лет, сколько зим",
            created_at: new Date(2018, 12, 1, 19, 24, 25),
            user: {
                id: "57048f875667f080fba",
                fullname: "Vasilij Pupkin",
                avatar: null
            },
            dialog: "0892984d8266657048f875667f080fba",
        },
        {
            id: Math.random(),
            text: "Привет кул! как твои дела? сколько лет, сколько зим",
            created_at: new Date(2019, 12, 1, 19, 24, 25),
            user: {
                id: "4d8266657048f875667f080fba",
                fullname: "Vasilij Pupkin",
                avatar: null
            },
            dialog: "0892984d8266657048f875667f080fba",
        },
        {
            id: Math.random(),
            text: "Привет, нормально",
            created_at: new Date(),
            user: {
                id: "84d8266657048f875667f080fba",
                fullname: "Vasilij Pupkin",
                avatar: 'https://social-network.samuraijs.com/activecontent/images/users/1779/user.jpg?v=7'
            },
            dialog: "0892984d8266657048f875667f080fba",
        },
    ],
    items: [
        {
            id: "0882984d8266657048f875667f080fba",
            user: {
                id: "0892984d8266657048f875667f080fba",
                fullname: "Onotolle Vasserman",
                avatar: null,
            },
            lastMessage: {
                text: "Привет кул! как твои дела? сколько лет, сколько зим",
                created_at: new Date(2019, 12, 1, 19, 24, 25),
            }
        },
        {
            id: Math.random(),
            user: {
                id: "57048f875667f080fba",
                fullname: "Vasilij Pupkin",
                avatar: null
            },
            lastMessage: {
                text: "Привет кул! как твои дела? сколько лет, сколько зим",
                created_at: new Date(2018, 12, 1, 19, 24, 25),
            }
        },
        {
            id: Math.random(),
            user: {
                id: "4d8266657048f875667f080fba",
                fullname: "Vasilij Pupkin",
                avatar: null
            },
            lastMessage: {
                text: "Привет кул! как твои дела? сколько лет, сколько зим",
                created_at: new Date(2019, 12, 1, 19, 24, 25),
            }
        },
        {
            id: Math.random(),
            user: {
                id: "0892984d8266657048f875667f080fba",
                fullname: "Vasilij Pupkin",
                avatar: null
            },
            lastMessage: {
                text: "Привет кул! как твои дела? сколько лет, сколько зим",
                created_at: new Date(2017, 12, 1, 19, 24, 25),
            }
        },
        {
            id: Math.random(),
            user: {
                id: "84d8266657048f875667f080fba",
                fullname: "Vasilij Pupkin",
                avatar: 'https://social-network.samuraijs.com/activecontent/images/users/1779/user.jpg?v=7'
            },
            lastMessage: {
                text: "Привет, нормально",
                created_at: new Date(),
            }
        },
        {
            id: Math.random(),
            user: {
                id: "875667f0kjhkhj80fba",
                fullname: "Vasilij Pupkin",
                avatar: null
            },
            lastMessage: {
                text: "Привет кул! как твои дела? сколько лет, сколько зим",
                created_at: new Date(2019, 12, 1, 19, 24, 25),
            }
        },
        {
            id: Math.random(),
            user: {
                id: "875667f08fghjgyu0fba",
                fullname: "Vasilij Pupkin",
                avatar: null
            },
            lastMessage: {
                text: "Привет кул! как твои дела? сколько лет, сколько зим",
                created_at: new Date(2019, 12, 1, 19, 24, 25),
            }
        },
        {
            id: Math.random(),
            user: {
                id: "875667f0ghjgfj80fba",
                fullname: "Vasilij Pupkin",
                avatar: null
            },
            lastMessage: {
                text: "Привет кул! как твои дела? сколько лет, сколько зим",
                created_at: new Date(2019, 12, 1, 19, 24, 25),
            }
        },
        {
            id: Math.random(),
            user: {
                id: "87567f080fbagfjgfh",
                fullname: "Vasilij Pupkin",
                avatar: null
            },
            lastMessage: {
                text: "Привет кул! как твои дела? сколько лет, сколько зим",
                created_at: new Date(2019, 12, 1, 19, 24, 25),
            }
        },
        {
            id: Math.random(),
            user: {
                id: "875667f0fbatyuty",
                fullname: "Vasilij Pupkin",
                avatar: null
            },
            lastMessage: {
                text: "Привет кул! как твои дела? сколько лет, сколько зим",
                created_at: new Date(2019, 12, 1, 19, 24, 25),
            }
        },
        {
            id: Math.random(),
            user: {
                id: "875667f080fba56756",
                fullname: "Vasilij Pupkin",
                avatar: null
            },
            lastMessage: {
                text: "Привет кул! как твои дела? сколько лет, сколько зим",
                created_at: new Date(2019, 12, 1, 19, 24, 25),
            }
        },
        {
            id: Math.random(),
            user: {
                id: "8756f080fbarty",
                fullname: "Vasilij Pupkin",
                avatar: null
            },
            lastMessage: {
                text: "Привет кул! как твои дела? сколько лет, сколько зим",
                created_at: new Date(2019, 12, 1, 19, 24, 25),
            }
        },
        {
            id: Math.random(),
            user: {
                id: "875667f080f",
                fullname: "Vasilij Pupkin",
                avatar: null
            },
            lastMessage: {
                text: "Привет кул! как твои дела? сколько лет, сколько зим",
                created_at: new Date(2019, 12, 1, 19, 24, 25),
            }
        },
        {
            id: Math.random(),
            user: {
                id: "875667f080fbaytu",
                fullname: "Vasilij Pupkin",
                avatar: null
            },
            lastMessage: {
                text: "Привет кул! как твои дела? сколько лет, сколько зим",
                created_at: new Date(2019, 12, 1, 19, 24, 25),
            }
        }
    ],*/

    dialogs: [   /* {
     id: "0882984d8266657048f875667f080fba",
        text: "Привет кул! как твои дела? сколько лет, сколько зим",
        created_at: "Fri Nov 22 2019 00:00:00 GMT+0300 (Moscow Standard Time)",
        user: {
            id: "57048f875667f080fba",
            fullname: "Vasilij Pupkin",
            avatar: null
        }
    }*/],
    messages: [ /*{
        id: "0882984d8266657048f875667f080fba",
        text: "Привет кул! как твои дела? сколько лет, сколько зим",
        created_at:"Fri Nov 22 2019 00:00:00 GMT+0300 (Moscow Standard Time)",
        user: {
            id: "0892984d8266657048f875667f080fba",
            fullname: "Onotolle Vasserman",
            avatar: null
        },
        dialog: "0892984d8266657048f875667f080fba"
    }*/],
    currentDialog: null

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
        default:
            return state;
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
        dialogsAPI.getDialogs().then(data => {
            dispatch(setDialogsActionCreator(data.data));
        });
    }
};
export const getAllMessageDialogsThunkCreator = (currentDialog) => {
    return (dispatch) => {
        dialogsAPI.getMessages(currentDialog).then(data => {
            dispatch(setMessagesCurrentDialogActionCreator(data.data));
        });
    }
};


export default dialogsReducer;