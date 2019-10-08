import {usersAPI} from "../api/Api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const SET_TOGGLE_ISFETCHING = 'SET_TOGGLE_ISFETCHING';
const SET_TOGGLE_ISFOLLOWINGPROPGRESS = 'SET_TOGGLE_ISFOLLOWINGPROPGRESS';

let initialState = {

    users: [
        /*  {
              id: 1, photoUrl: "https://cs9.pikabu.ru/post_img/2017/05/12/8/1494592816133830021.jpg",
              followed: false, fullName: "Anton", status: "Pizdec", location: {city: "Moscow", country: "Russia"}
          },
          {
              id: 2, photoUrl: "https://cs9.pikabu.ru/post_img/2017/05/12/8/1494592816133830021.jpg",
              followed: true, fullName: "Serg", status: "Nah", location: {city: "Samara", country: "Russia"}
          },
          {
              id: 3, photoUrl: "https://cs9.pikabu.ru/post_img/2017/05/12/8/1494592816133830021.jpg",
              followed: false, fullName: "Anton", status: "What", location: {city: "Minsk", country: "Belarus"}
          },*/
    ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingProgress: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            };
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            };
        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            };
        case SET_TOGGLE_ISFETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };
        case SET_TOGGLE_ISFOLLOWINGPROPGRESS:
            return {
                ...state,
                followingProgress: action.followingProgress
                    ? [...state.followingProgress, action.userId]
                    : state.followingProgress.filter(id => id != action.userId)
            };
        default:
            return state;
    }
};

export const followUser = (userId) => {
    return {
        type: FOLLOW,
        userId
    }
};

export const unfollowUser = (userId) => {
    return {
        type: UNFOLLOW,
        userId
    }
};

export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users
    }
};
export const setCurrentPage = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    }
};
export const setTotalUsersCount = (totalUsersCount) => {
    return {
        type: SET_TOTAL_COUNT,
        totalUsersCount
    }
};
export const setIsFetching = (isFetching) => {
    return {
        type: SET_TOGGLE_ISFETCHING,
        isFetching
    }
};
export const setIsFolowingProgress = (followingProgress, userId) => {
    return {
        type: SET_TOGGLE_ISFOLLOWINGPROPGRESS,
        followingProgress,
        userId
    }
};

export const getUsersThunkCreator = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(setIsFetching(true));
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(setIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        });
    }
};
export const followThunkCreator = (userId) => {
    return (dispatch) => {
        dispatch(setIsFolowingProgress(true, userId));
        usersAPI.follow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(followUser(userId))
                }
                dispatch(setIsFolowingProgress(false, userId));
            });
    }
};
export const unfollowThunkCreator = (userId) => {
    return (dispatch) => {
        dispatch(setIsFolowingProgress(true, userId));
        usersAPI.unfollow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unfollowUser(userId))
                }
                dispatch(setIsFolowingProgress(false, userId));
            });
    }
};

export default usersReducer;