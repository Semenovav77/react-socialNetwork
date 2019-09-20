import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


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
        },
        sidebar: {}

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
        this._state.profilePage = profileReducer(this._state.profilePage,action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage,action);
        this._state.sidebar = sidebarReducer(this._state.sidebar,action);

        this._rerenderTree(this._state);


    }
}


export default store;
window.store = store;