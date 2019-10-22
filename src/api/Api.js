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
        console.warn('Obsolete method.Please use profileAPI object')
        return profileAPI.getProfile(userId)
    },
    getAuthMe() {
        return instance.get(`auth/me`)
    }


};
export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status})
    }
};

export const authAPI = {
    login(email, password, rememberme = false) {
        return instance.post(`auth/login`, {email, password, rememberme})
    },
    logout() {
        return instance.delete(`auth/login`)
    }
};
