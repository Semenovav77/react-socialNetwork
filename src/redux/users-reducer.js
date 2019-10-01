const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';

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
    currentPage: 1
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
        default:
            return state;
    }
};

export const followAC = (userId) => {
    return {
        type: FOLLOW,
        userId
    }
};

export const unfollowAC = (userId) => {
    return {
        type: UNFOLLOW,
        userId
    }
};

export const setUsersAC = (users) => {
    return {
        type: SET_USERS,
        users
    }
};
export const setCurrentPageAC = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    }
};
export const setTotalUsersCountAC = (totalUsersCount) => {
    return {
        type: SET_TOTAL_COUNT,
        totalUsersCount
    }
};


export default usersReducer;