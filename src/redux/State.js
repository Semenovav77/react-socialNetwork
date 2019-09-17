let rerenderTree = () => {
    console.log("state was changed");
}
let state = {
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
}
window.state = state;

export const addPost = () => {
    let newPost = {
        id: 5, post: state.profilePage.newPostText, likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderTree(state);
}

export const updateNewPostText = (newtext) => {
    state.profilePage.newPostText = newtext;
    rerenderTree(state);
}

export const subscribe = (observer) => {
    rerenderTree=observer;
}

export default state;