import * as axios from "axios";
//const baseURL = 'https://social-network.samuraijs.com/api/1.0/';

const instance = axios.create( {
    withCredentials: true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': '148f8102-6361-4c62-b57f-dd484a50766c'}
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            })
    },
    follow(userId)  {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
    },
    getAuthMe() {
        return instance.get(`auth/me`)
    }

};
