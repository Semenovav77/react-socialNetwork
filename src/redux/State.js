const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, post: "First post", likesCount: 2},
                {id: 2, post: "Second post", likesCount: 22},
            ],
            newPostText: "textik"

        },
        dialogsPage: {
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
        }
    },
    _rerenderTree() {
        console.log("state was changed");
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._rerenderTree = observer;
    },


    dispatch(action) { //{ type: 'ADD-POST'}
        debugger;
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5, post: this._state.profilePage.newPostText, likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._rerenderTree(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newtext;
            this._rerenderTree(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._rerenderTree(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.messages.push({id: 4, message: body, likesCount: 0});
            this._state.dialogsPage.newMessageBody = '';
            this._rerenderTree(this._state);

        }

    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
};

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newtext: text
    }
};

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

export default store;
window.store = store;