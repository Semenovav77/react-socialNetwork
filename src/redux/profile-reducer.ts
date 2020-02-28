import { profileAPI, usersAPI} from "../api/Api";
import {stopSubmit} from "redux-form";
import {ContactsOfProfileType, UserProfileType} from "../types/types";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";


const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';

let initialState = {
    posts: [
        {id: 1, post: "First post", likesCount: 2},
        {id: 2, post: "Second post", likesCount: 22},
    ],
    profile: null as null | UserProfileType,
    status: '',
    newPostText: ''
};

export type InitialStateType = typeof initialState;

type ActionsTypes = AddPostActionType | DeletePostActionType | SetUserProfileActionType | SetUserStatusActionType;
const profileReducer = (state = initialState, action: any): InitialStateType => {
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

type AddPostActionType = {
    type: typeof ADD_POST
    newPost: string
}
export const addPostActionCreator = (newPost: string): AddPostActionType => {
    return {
        type: ADD_POST,
        newPost
    }
};

type DeletePostActionType = {
    type: typeof DELETE_POST
    postId: number
}
export const deletePost = (postId:number): DeletePostActionType => {
    return {
        type: DELETE_POST,
        postId
    }
};

type SetUserProfileActionType = {
    type: typeof SET_USER_PROFILE
    profile: UserProfileType
}
export const setUserProfile = (profile: UserProfileType): SetUserProfileActionType => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
};

type SetUserStatusActionType = {
    type: typeof SET_STATUS
    status: string
}
export const setUserStatus = (status:string): SetUserStatusActionType => {
    return {
        type: SET_STATUS,
        status
    }
};

export const getProfileThunkCreator = (userId: number): ThunkAction<void, AppStateType, unknown, ActionsTypes> => {
    return (dispatch) => {
        usersAPI.getProfile(userId)
            .then((response: any) => {
                dispatch(setUserProfile(response.data));
            });
    }
};

export const updateProfileThunkCreator = (userId: number, fullName: string | null,
                                          aboutMe: string | null, lookingForAJob: boolean,
                                          lookingForAJobDescription: string | null, contacts: ContactsOfProfileType): ThunkAction<void, AppStateType, unknown, ActionsTypes | any> => {
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

export const getUserStatusThunkCreator = (userId: number): ThunkAction<void, AppStateType, unknown, ActionsTypes> => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then((response: any) => {
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
export const updateUserStatusThunkCreator = (status:string): ThunkAction<void, AppStateType, unknown, ActionsTypes> => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
    .then((response: any) => {
        if (response.data.resultCode === 0) {
            dispatch(setUserStatus(status));
        }
    }).catch((error: any) => alert(error.message));

}};

export const updateMainPhotoThunkCreator = (userId: number, photo: object): ThunkAction<void, AppStateType, unknown, ActionsTypes> => {
    return async (dispatch) => {
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