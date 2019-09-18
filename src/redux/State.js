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
    getState() {
        return this._state;
    },
    _rerenderTree() {
        console.log("state was changed");
    },
    addPost() {
        debugger;
        let newPost = {
            id: 5, post: this._state.profilePage.newPostText, likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._rerenderTree(this._state);
    },
    updateNewPostText(newtext) {
        this._state.profilePage.newPostText = newtext;
        this._rerenderTree(this._state);
    },
    subscribe(observer) {
        this._rerenderTree = observer;
    }
}


export default store;
window.store = store;