import React from 'react';
import Paginator from "./Paginator";
import User from "./User";
import {UserType} from "../../types/types";

import './Users.scss'

type PropsType = {
    isAuth: boolean
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: Array<UserType>
    followingProgress: Array<number>
    onPageChanged(pageNumber: number): void
    unfollowThunkCreator(userId: number): void
    followThunkCreator(userId: number): void
    addDialogThunkCreator(userId: number): void
}

let Users: React.FC<PropsType> = ({
                                      isAuth, currentPage, totalUsersCount, pageSize, users, onPageChanged,
                                      followingProgress, unfollowThunkCreator, followThunkCreator, addDialogThunkCreator
                                  }) => {

    return (<div className='users'>
                <div className='users__pages'>
                        <Paginator currentPage={currentPage}
                                   totalItemsCount={totalUsersCount}
                                   pageSize={pageSize}
                                   onPageChanged={onPageChanged}/>
                </div>
                <div className='users__item'>
                    {users.map(u => <User key={u.id}
                                     user={u} isAuth = {isAuth}
                                     followingProgress={followingProgress}
                                     unfollowThunkCreator={unfollowThunkCreator}
                                     followThunkCreator={followThunkCreator}
                                     addDialogThunkCreator={addDialogThunkCreator}/>)}
                </div>
        </div>
    );

};

export default Users;