import React from 'react';
import Paginator from "./Paginator";
import User from "./User";
import {UserType} from "../../types/types";

type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: Array<UserType>
    followingProgress: Array<number>
    onPageChanged(pageNumber: number): void
    unfollowThunkCreator(userId: number): void
    followThunkCreator(userId: number): void
}

let Users: React.FC<PropsType> = ({currentPage, totalUsersCount, pageSize, users, onPageChanged,
                                       followingProgress, unfollowThunkCreator, followThunkCreator}) => {

    return (<div>
            <Paginator currentPage={currentPage}
                       totalItemsCount={totalUsersCount}
                       pageSize={pageSize}
                       onPageChanged={onPageChanged}/>
            {
                users.map(u => <User key={u.id}
                                           user={u}
                                           followingProgress={followingProgress}
                                           unfollowThunkCreator={unfollowThunkCreator}
                                           followThunkCreator={followThunkCreator}/>)

            }
        </div>
    );

};

export default Users;