import {createSelector} from "reselect";


export const getUsers = (state) => {
    return state.usersPage.users;
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

export const getPageSize = (state) => {
    return state.usersPage.pageSize;
};
export const getTotalUserCount = (state) => {
    return state.usersPage.totalUsersCount;
};
export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
};
export const getIsFetching = (state) => {
    return state.usersPage.isFetching;
};
export const getFollowingProgress = (state) => {
    return state.usersPage.followingProgress;
};