export type UserType = {
    id: number
    photos: {
        small: string
        large: string
    }
    followed: boolean
    fullName: string
    status: string
    name:string
};

export type PhotosProfileType = {
    small: string |null
    large: string |null
}

export type ContactsOfProfileType ={
    facebook: string | null
    website: string | null
    vk: string | null
    twitter: string | null
    instagram: string | null
    youtube: string | null
    github: string | null
    mainLink: string | null
}
export type UserProfileType = {
    aboutMe: string | null
    contacts: ContactsOfProfileType
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    fullName: string | null
    userId: number
    photos: PhotosProfileType
}
