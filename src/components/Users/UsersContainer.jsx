import React from 'react';
import {
    followUser,
    unfollowUser,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setIsFetching, setIsFolowingProgress, getUsersThunkCreator,followThunkCreator,unfollowThunkCreator
} from "../../redux/users-reducer";
import {connect} from "react-redux";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";



class UsersAPI extends React.Component {
    componentDidMount(e) {
       this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    };

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   followingProgress={this.props.followingProgress}
                   followThunkCreator={this.props.followThunkCreator}
                   unfollowThunkCreator={this.props.unfollowThunkCreator}/>
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingProgress: state.usersPage.followingProgress
    }
};
/*
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
        },
        setIsFetching: (isFetching) => {
            dispatch(setIsFetchingAC(isFetching));
        }
    }
};
*/


const UsersContainer = connect(mapStateToProps, {
    followUser,
    unfollowUser,
    setCurrentPage,
    setIsFolowingProgress,
    getUsers: getUsersThunkCreator,
    followThunkCreator,
    unfollowThunkCreator
})(UsersAPI);

export default UsersContainer;

