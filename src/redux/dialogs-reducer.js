const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState ={

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
        newMessageBody: ""

};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type){
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case  SEND_MESSAGE:
            let body = state.newMessageBody;
            state.messages.push({id: 4, message: body, likesCount: 0});
            state.newMessageBody = '';
            return state;
        default:
            return state;
    }
}

export const addMessageActionCreator = () => {
    return {
        type: SEND_MESSAGE
    }
};

export const updateNewMessageTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: text
    }
};


export default dialogsReducer;