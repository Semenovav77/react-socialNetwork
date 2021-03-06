import {createSelector} from "reselect";
import {AppStateType} from "./redux-store";


export const getUsers = (state: AppStateType) => {
    return state.usersPage.users;
};

export const getIsAuth = (state: AppStateType) => {
    return state.auth.isAuth;
};
/*
export const getUsersSelector = (state) => {
    return getUsers(state).filter(u => true);
};
*/

export const getUsersReSelector = createSelector(getUsers, (userss) => {
    //debugger;
    return userss.filter(u => true);
});

export const getPageSize = (state: AppStateType) => {
    return state.usersPage.pageSize;
};
export const getTotalUserCount = (state: AppStateType) => {
    return state.usersPage.totalUsersCount;
};
export const getCurrentPage = (state: AppStateType) => {
    return state.usersPage.currentPage;
};
export const getIsFetching = (state: AppStateType) => {
    return state.usersPage.isFetching;
};
export const getFollowingProgress = (state: AppStateType) => {
    return state.usersPage.followingProgress;
};