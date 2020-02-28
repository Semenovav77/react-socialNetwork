import {authAPI, ResultCodeEnum, securityAPI as security, usersAPI} from "../api/Api";
import {stopSubmit} from 'redux-form';
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";

const SET_USER_DATA = 'auth/SET_USER_DATA';
const GET_CAPTCHA_URL = 'GET_CAPTCHA_URL';

export type InitialStateType = {
    id: number | null
    email:string | null
    login: string | null
    isAuth: boolean
    captchaURL: string | null
};

let initialState: InitialStateType= {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaURL: null
};

type ActionsTypes = SetAuthUserDataActionType | GetCaptchaURLActionType;

const authReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                /* isAuth: action.data.isAuth*/
            };
        case GET_CAPTCHA_URL:
            return {
                ...state,
                captchaURL: action.url,
            };
        default:
            return state;
    }
};

type SetAuthUserDataActionDataType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}
type SetAuthUserDataActionType = {
    type: typeof SET_USER_DATA
    data: SetAuthUserDataActionDataType
}

export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean): SetAuthUserDataActionType => {
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

type GetCaptchaURLActionType = {
    type: typeof GET_CAPTCHA_URL
    url: string
}
export const getCaptchaURL = (url: string): GetCaptchaURLActionType => {
    return {
        type: GET_CAPTCHA_URL,
        url
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

export const getAuthMeThunkCreator = (): ThunkAction<void, AppStateType, unknown, ActionsTypes> => {
    return async (dispatch) => {
        let response = await usersAPI.getAuthMe();
        if (response.resultCode === ResultCodeEnum.Success) {
            let {id, login, email} = response.data;
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

export const loginThunkCreator = (email: string, password: string, rememberme: boolean, captcha: string): ThunkAction<void, AppStateType, unknown, ActionsTypes> => {
    return async (dispatch: any) => {
        let response = await authAPI.login(email, password, rememberme, captcha);
        if (response.resultCode === ResultCodeEnum.Success) {
            dispatch(getAuthMeThunkCreator())
        }  else {
            if (response.resultCode === ResultCodeEnum.CaptchaIsRequired) {
                dispatch(getCaptchaThunkCreator())
            }
            let message = response.messages.length > 0 ? response.messages[0] : "some error";
            let action = stopSubmit('login', {_error: message});
            dispatch(action);
        }

    }
};

export const logoutThunkCreator = (): ThunkAction<void, AppStateType, unknown, ActionsTypes> => {
    return async (dispatch) => {
        let response = await authAPI.logout();
        if (response.resultCode === ResultCodeEnum.Success) {
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

export const getCaptchaThunkCreator = (): ThunkAction<void, AppStateType, unknown, ActionsTypes> => {
    return async (dispatch) => {
        let response = await security.captcha();
        let url = response.data.url;
        dispatch(getCaptchaURL(url))
    }
};

export default authReducer;