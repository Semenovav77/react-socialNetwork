import {usersAPI} from "../api/Api";
import {UserType} from "../types/types";

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
    ] as Array<UserType>,
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingProgress: [] as Array<number>,
    fake: 10
};

export type InitialStateType = typeof initialState;

const usersReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        //case 'FAKE': return {...state, fake: state.fake + 1};
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
                followingProgress: action.isFetching
                    ? [...state.followingProgress, action.userId]
                    : state.followingProgress.filter(id => id != action.userId)
            };
        default:
            return state;
    }
};
type FollowUserActionType = {
    type: typeof FOLLOW
    userId: number
}
export const followUser = (userId: number): FollowUserActionType => {
    return {
        type: FOLLOW,
        userId
    }
};

type UnfollowUserActionType = {
    type: typeof UNFOLLOW
    userId: number
}
export const unfollowUser = (userId: number): UnfollowUserActionType => {
    return {
        type: UNFOLLOW,
        userId
    }
};

type SetUsersActionType = {
    type: typeof SET_USERS
    users: Array<UserType>
}
export const setUsers = (users: Array<UserType>):SetUsersActionType => {
    return {
        type: SET_USERS,
        users
    }
};

type SetCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}
export const setCurrentPage = (currentPage: number): SetCurrentPageActionType => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    }
};

type SetTotalUsersCountActionType = {
    type: typeof SET_TOTAL_COUNT
    totalUsersCount: number
}
export const setTotalUsersCount = (totalUsersCount: number): SetTotalUsersCountActionType => {
    return {
        type: SET_TOTAL_COUNT,
        totalUsersCount
    }
};

type SetIsFetchingActionType = {
    type: typeof SET_TOGGLE_ISFETCHING
    isFetching: boolean
}
export const setIsFetching = (isFetching: boolean): SetIsFetchingActionType => {
    return {
        type: SET_TOGGLE_ISFETCHING,
        isFetching
    }
};

type SetIsFolowingProgressActionType = {
    type: typeof SET_TOGGLE_ISFOLLOWINGPROPGRESS
    isFetching: boolean
    userId: number
}
export const setIsFolowingProgress = (isFetching: boolean, userId: number):SetIsFolowingProgressActionType => {
    return {
        type: SET_TOGGLE_ISFOLLOWINGPROPGRESS,
        isFetching,
        userId
    }
};

export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {
    return (dispatch: any) => {
        dispatch(setIsFetching(true));
        dispatch(setCurrentPage(currentPage));
        usersAPI.getUsers(currentPage, pageSize).then((data: any) => {
            dispatch(setIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        });
    }
};

const followUnfollowFlow = (dispatch: any, userId: number, apiMethod: any, actionCreator: any) => {
    dispatch(setIsFolowingProgress(true, userId));
    apiMethod(userId)
        .then((response: any) => {
            if (response.data.resultCode === 0) {
                dispatch(actionCreator(userId))
            }
            dispatch(setIsFolowingProgress(false, userId));
        });
};


export const followThunkCreator = (userId: number) => {
    return (dispatch: any) => {
        followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followUser)
    }
};
export const unfollowThunkCreator = (userId: number) => {
    return (dispatch: any) => {
        followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowUser)
    }
};

export default usersReducer;