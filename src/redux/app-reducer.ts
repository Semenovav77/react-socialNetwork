
import {getAuthMeThunkCreator} from "./auth-reducer";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";
const SET_INITIALIZED  = 'SET_INITIALIZED';

export type InitialStateType = {
    initialized: boolean
}

let initialState: InitialStateType = {
    initialized: false
};

type ActionsTypes = SetInitializedActionType;

const appReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true,
            };
        default:
            return state;
    }
};

type SetInitializedActionType = {
     type: typeof SET_INITIALIZED //'SET_INITIALIZED'
 }

export const InitSuccess = (): SetInitializedActionType => {
    return {
        type: SET_INITIALIZED,
    }
};

export const initializeApp = (): ThunkAction<void, AppStateType, unknown, ActionsTypes> => {
    return (dispatch) => {
       let promise = dispatch(getAuthMeThunkCreator());
       Promise.all([promise])
            .then(() => {
            dispatch(InitSuccess());
        });
    }
};

export default appReducer;