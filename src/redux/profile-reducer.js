import {authAPI, profileAPI, usersAPI} from "../api/Api";
import {setIsFetching, setTotalUsersCount, setUsers} from "./users-reducer";
import {stopSubmit} from "redux-form";
import {getAuthMeThunkCreator} from "./auth-reducer";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
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
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id != action.postId),
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

export const deletePost = (postId) => {
    return {
        type: DELETE_POST,
        postId
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

export const updateProfileThunkCreator = (userId, fullName, aboutMe, lookingForAJob, lookingForAJobDescription, contacts) => {
    return async (dispatch) => {
        let response = await profileAPI.updateProfile(fullName, aboutMe, lookingForAJob, lookingForAJobDescription, contacts);
        if (response.data.resultCode === 0) {
            dispatch(getProfileThunkCreator(userId))
        } else {
            let message = response.data.messages.length > 0 ? response.data.messages[0] : "some error";
            let action = stopSubmit('pfofile-edit', {_error: message});
            dispatch(action);
            return Promise.reject(response.data.messages[0]);
        }

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

/*export const updateUserStatusThunkCreator = (status) => {
    return async (dispatch) => {
        try {
            let response = await profileAPI.updateStatus(status)
            if (response.data.resultCode === 0) {
                dispatch(setUserStatus(status));
            }
        } catch (error) {
            alert(error.message);
        }
    }
};*/
export const updateUserStatusThunkCreator = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
    .then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setUserStatus(status));
        }
    }).catch(error => alert(error.message));

}};

export const updateMainPhotoThunkCreator = (userId, photo) => {
    return async (dispatch) => {
        debugger;
        let response = await profileAPI.updatePhoto(photo);
        if (response.data.resultCode === 0) {
            dispatch(getProfileThunkCreator(userId))
        }/* else {
            let message = response.data.messages.length > 0 ? response.data.messages[0] : "some error";
            let action = stopSubmit('pfofile-edit', {_error: message});
            dispatch(action);
            return Promise.reject(response.data.messages[0]);
        }
*/
    }
};


export default profileReducer;