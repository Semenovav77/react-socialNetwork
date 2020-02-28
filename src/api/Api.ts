import axios, {AxiosResponse} from "axios";
import {ContactsOfProfileType} from "../types/types";
//const baseURL = 'https://social-network.samuraijs.com/api/1.0/';

const instance = axios.create( {
    withCredentials: true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': '148f8102-6361-4c62-b57f-dd484a50766c'}
});

export enum ResultCodeEnum {
    Success = 0,
    Error = 1,
    CaptchaIsRequired = 10
}

type getAuthMeResponseType = {
    data: {
        id: number
        email: string
        login: string
    }
    resultCode: ResultCodeEnum
    messages:Array<string>
};
type loginResponseType = {
    data: {
       userId: number
    }
    resultCode: ResultCodeEnum
    messages:Array<string>
};
type logoutResponseType = {
    data: {
    }
    resultCode: ResultCodeEnum
    messages:Array<string>
};

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            })
    },
    follow(userId: number)  {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId: number) {
        console.warn('Obsolete method.Please use profileAPI object')
        return profileAPI.getProfile(userId)
    },
    getAuthMe() {
        return instance.get<getAuthMeResponseType>(`auth/me`).then(response =>  response.data)
    }


};
export const profileAPI = {
    getProfile(userId: number) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status: status})
    },
    updateProfile(fullName: string | null, aboutMe: string| null, lookingForAJob: boolean, lookingForAJobDescription: string| null, contacts: ContactsOfProfileType) {
        return instance.put(`profile`, {fullName: fullName, aboutMe: aboutMe,
            lookingForAJob: lookingForAJob,
            lookingForAJobDescription:lookingForAJobDescription,
            contacts: contacts
        })
    },
    updatePhoto(photo: any) {
        let formData = new FormData();
        formData.append("image", photo);
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
};

export const authAPI = {
    login(email: string , password: string, rememberme = false, captcha = null as null | string) {
        return instance.post<loginResponseType>(`auth/login`, {email, password, rememberme, captcha})
            .then(response =>  response.data)
    },
    logout() {
        return instance.delete<logoutResponseType>(`auth/login`).then(response =>  response.data)
    }
};
export const securityAPI = {
    captcha() {
        return instance.get(`security/get-captcha-url`)
    }
};



const instanceChat = axios.create( {
    withCredentials: true,
    baseURL:'http://localhost:3004/',
});

export const dialogsAPI = {
    getDialogs() {
        return instanceChat.get('dialogs')
    },
    getMessages(currentDialog: string) {
        return instanceChat.get(`messages?dialog=${currentDialog}`)
    }
};
