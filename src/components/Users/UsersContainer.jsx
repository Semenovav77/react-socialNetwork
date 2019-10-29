import React from 'react';
import {
    followUser,
    unfollowUser,
    setCurrentPage,
    setIsFolowingProgress, getUsersThunkCreator,followThunkCreator,unfollowThunkCreator
} from "../../redux/users-reducer";
import {connect} from "react-redux";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";
import {
    getCurrentPage,
    getFollowingProgress, getIsFetching,
    getPageSize,
    getTotalUserCount, getUsersReSelector
} from "../../redux/users-selectors";



class UsersAPI extends React.Component {
    componentDidMount(e) {
       const {currentPage, pageSize} = this.props;
       this.props.getUsersThunkCreator(currentPage, pageSize);
    }

    onPageChanged = (pageNumber) => {
        const {pageSize} = this.props;
        this.props.getUsersThunkCreator(pageNumber, pageSize);
    };

    render() {
        console.log('USERS');
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

/*let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingProgress: state.usersPage.followingProgress
    }
};*/

let mapStateToProps = (state) => {
    console.log('mapStateToProps USERS');
    return {
        //users: getUsers(state),
        users: getUsersReSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUserCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingProgress: getFollowingProgress(state)
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
    getUsersThunkCreator,
    followThunkCreator,
    unfollowThunkCreator
})(UsersAPI);

export default UsersContainer;

