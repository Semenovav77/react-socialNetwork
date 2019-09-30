const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';


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
                users: [...state.users, ...action.users]
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


export default usersReducer;