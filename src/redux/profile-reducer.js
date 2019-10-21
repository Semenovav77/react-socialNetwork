import {profileAPI, usersAPI} from "../api/Api";
import {setIsFetching, setTotalUsersCount, setUsers} from "./users-reducer";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
let initialState = {

    posts: [
        {id: 1, post: "First post", likesCount: 2},
        {id: 2, post: "Second post", likesCount: 22},
    ],
    profile: null,
    status: ''

};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = action.newPost;
            return {
                ...state,
                posts: [...state.posts, {id: 5, post: newPost, likesCount: 0}],
                newPostText: ''
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

export const addPostActionCreator = (newPost) => {
    return {
        type: ADD_POST,
        newPost
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