import {authAPI, usersAPI} from "../api/Api";
import {stopSubmit} from 'redux-form';

const SET_USER_DATA = 'auth/SET_USER_DATA';


let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                /* isAuth: action.data.isAuth*/
            };
        default:
            return state;
    }
};

export const setAuthUserData = (id, email, login, isAuth) => {
    return {
        type: SET_USER_DATA,
        data: {
            id,
            email,
            login,
            isAuth
        }
    }
};

/*export const getAuthMeThunkCreator = () => {
    return (dispatch) => {
       return usersAPI.getAuthMe()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data;
                    dispatch(setAuthUserData(id, email, login, true))
                }
            });
    }
};*/
export const getAuthMeThunkCreator = () => {
    return async (dispatch) => {
        let response = await usersAPI.getAuthMe();
        if (response.data.resultCode === 0) {
            let {id, login, email} = response.data.data;
            dispatch(setAuthUserData(id, email, login, true))
        }
    }
};
/*

export const loginThunkCreator = (email, password, rememberme) => {
    return (dispatch) => {
        authAPI.login(email, password, rememberme)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(getAuthMeThunkCreator())
                } else {
                    let message = response.data.messages.length > 0 ? response.data.messages[0] : "some error";
                    let action = stopSubmit('login', {_error: message});
                    dispatch(action);
                }
            });
    }
};
*/

export const loginThunkCreator = (email, password, rememberme) => {
    return async (dispatch) => {
        let response = await authAPI.login(email, password, rememberme);
        if (response.data.resultCode === 0) {
            dispatch(getAuthMeThunkCreator())
        } else {
            let message = response.data.messages.length > 0 ? response.data.messages[0] : "some error";
            let action = stopSubmit('login', {_error: message});
            dispatch(action);
        }

    }
};
export const logoutThunkCreator = () => {
    return async (dispatch) => {
        let response = await authAPI.logout();
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
            dispatch(getAuthMeThunkCreator());
        }
    }
};
/*export const logoutThunkCreator = () => {
    return (dispatch) => {
        authAPI.logout()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null, false));
                    dispatch(getAuthMeThunkCreator());
                }
            });
    }
};*/

export default authReducer;