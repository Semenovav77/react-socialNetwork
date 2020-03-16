import {authAPI, ResultCodeEnum, securityAPI as security, usersAPI} from "../api/Api";
import {stopSubmit} from 'redux-form';
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";
import {openNotification} from './../helpers/openNotification';

const SET_USER_DATA = 'auth/SET_USER_DATA';
const GET_CAPTCHA_URL = 'GET_CAPTCHA_URL';
const USER_LOGOUT = 'USER_LOGOUT';

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

type ActionsTypes = SetAuthUserDataActionType | GetCaptchaURLActionType | logoutActionType;

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

type logoutActionType = {
    type: typeof USER_LOGOUT
}
const logoutAction = (): logoutActionType => {
    return {
        type: USER_LOGOUT
    }
};

type GetCaptchaURLActionType = {
    type: typeof GET_CAPTCHA_URL
    url: string | null
}
export const getCaptchaURL = (url: string | null): GetCaptchaURLActionType => {
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
        try {
            let response = await usersAPI.getAuthMe();
            if (response.resultCode === ResultCodeEnum.Success) {
                let {id, login, email} = response.data;
                dispatch(setAuthUserData(id, email, login, true))
            }
        }
        catch (err) {
            openNotification({
                title: 'Ошибка!',
                text: err.message,
                type: 'error',
            });
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
    return async (dispatch) => {
        try {
            let response = await authAPI.login(email, password, rememberme, captcha);
            if (response.resultCode === ResultCodeEnum.Success) {
                openNotification({
                    title: 'Отлично!',
                    text: 'Авторизация успешна.',
                    type: 'success',
                });
                dispatch(getAuthMeThunkCreator());
                dispatch(getCaptchaURL(null))
            } else {
                if (response.resultCode === ResultCodeEnum.CaptchaIsRequired) {
                    openNotification({
                        title: 'Ошибка!',
                        text: response.messages[0],
                        type: 'error',
                    });
                    dispatch(getCaptchaThunkCreator())
                }}
                if (response.resultCode === 1) {
                    openNotification({
                        title: 'Ошибка!',
                        text: response.messages[0],
                        type: 'error',
                    });
                }
          /*  let message = response.messages.length > 0 ? response.messages[0] : "some error";
            let action = stopSubmit('login', {_error: message});
            dispatch(action);*/
        } catch(err) {
            openNotification({
                title: 'Ошибка!',
                text: err.message,
                type: 'error',
            });
        }
    }
};

export const logoutThunkCreator = (): ThunkAction<void, AppStateType, unknown, ActionsTypes> => {
    return async (dispatch) => {
        try {
            let response = await authAPI.logout();
            if (response.resultCode === ResultCodeEnum.Success) {
                openNotification({
                    title: 'Отлично!',
                    text: 'Вы успешно разлогинились.',
                    type: 'success',
                });
                dispatch(logoutAction());
                /*dispatch(setAuthUserData(null, null, null, false));
                dispatch(getAuthMeThunkCreator());*/
            }
            if (response.resultCode === 1) {
                openNotification({
                    title: 'Ошибка!',
                    text: response.messages[0],
                    type: 'error',
                });
            }
        }
       catch (err) {
           openNotification({
               title: 'Ошибка!',
               text: err.message,
               type: 'error',
           });
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