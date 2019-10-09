const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {

    dialogs: [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Petr"},
        {id: 3, name: "Aleksey"},
        {id: 4, name: "Fedor"},
    ],
    messages: [
        {id: 1, message: "Hi", likesCount: 12},
        {id: 2, message: "How are you", likesCount: 33},
        {id: 3, message: "Yo", likesCount: 6},
    ],
    newMessageBody: '111',
    additionalyInfo: '222'

};

const dialogsReducer = (state = initialState, action) => {
    debugger;
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            if (action.name == "newMessageBody") return {
                ...state,
                newMessageBody: action.body
            };
            else if (action.name == "additionalyInfo") return {
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


export default dialogsReducer;