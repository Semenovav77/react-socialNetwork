import React from 'react';
import {
    followAC,
    unfollowAC,setUsersAC
} from "../../redux/users-reducer";
import Users from "./Users";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
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
        }
    }
};


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;