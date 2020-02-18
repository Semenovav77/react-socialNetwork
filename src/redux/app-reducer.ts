
import {getAuthMeThunkCreator} from "./auth-reducer";
const SET_INITIALIZED  = 'SET_INITIALIZED';

export type InitialStateType = {
    initialized: boolean
}

let initialState: InitialStateType = {
    initialized: false
};

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

export const initializeApp = () => {
    return (dispatch: any) => {
       let promise = dispatch(getAuthMeThunkCreator());
       //dispatch
       //dispatch
        //promise
        Promise.all([promise])
            .then(() => {
            dispatch(InitSuccess());
        });
    }
};

export default appReducer;