import {profileAPI, usersAPI} from "../api/Api";
import {setIsFetching, setTotalUsersCount, setUsers} from "./users-reducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
let initialState = {

    posts: [
        {id: 1, post: "First post", likesCount: 2},
        {id: 2, post: "Second post", likesCount: 22},
    ],
    newPostText: "textik",
    profile: null,
    status: ''

};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = state.newPostText;
            return {
                ...state,
                posts: [...state.posts, {id: 5, post: newPost, likesCount: 0}],
                newPostText: ''
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newtext
            };
         case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
         case SET_STATUS:
            return {
                ...state,
                status: action.status
            };
        default:
            return state;
    }
};

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

export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
};

export const setUserStatus = (status) => {
    return {
        type: SET_STATUS,
        status
    }
};

export const getProfileThunkCreator = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data));
            });
    }
};

export const getUserStatusThunkCreator = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then(response => {
                debugger;
                dispatch(setUserStatus(response.data));
            });
    }
};

export const updateUserStatusThunkCreator = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setUserStatus(status));
                }
            });
    }
};

export default profileReducer;