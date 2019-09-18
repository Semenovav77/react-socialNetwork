let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, post: "First post", likesCount: 2},
                {id: 2, post: "Second post", likesCount: 22},
            ],
            newPostText: "textik"

        },
        messagesPage: {
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
            ]
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


    dispatch(action){ //{ type: 'ADD-POST'}
        debugger;
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5, post: this._state.profilePage.newPostText, likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._rerenderTree(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newtext;
            this._rerenderTree(this._state);
        }

    }
}


export default store;
window.store = store;