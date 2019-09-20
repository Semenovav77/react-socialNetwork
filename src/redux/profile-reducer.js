const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
let initialState={

        posts: [
            {id: 1, post: "First post", likesCount: 2},
            {id: 2, post: "Second post", likesCount: 22},
        ],
        newPostText: "textik"

}

const profileReducer = (state = initialState, action) => {
    debugger;
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5, post: state.newPostText, likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newtext;
            return state;
        default:
            return state;
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newtext: text
    }
};

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
};

export default profileReducer;