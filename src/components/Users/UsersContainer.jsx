import React from 'react';
import {
    followAC,
    unfollowAC,
    setUsersAC,
    setCurrentPageAC,
    setTotalUsersCountAC
} from "../../redux/users-reducer";
import Users from "./UsersClass";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        followUser: (userId) => {
            dispatch(followAC(userId))
        },
        unfollowUser: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber));
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount));
        }
    }
};


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;