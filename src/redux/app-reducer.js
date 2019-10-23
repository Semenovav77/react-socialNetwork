
import {getAuthMeThunkCreator} from "./auth-reducer";
const SET_INITIALIZED  = 'SET_INITIALIZED';


let initialState = {
    initialized: false,
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            };
        default:
            return state;
    }
};

export const InitSuccess = () => {
    return {
        type: SET_INITIALIZED,
    }
};

export const initializeApp = () => {
    return (dispatch) => {
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