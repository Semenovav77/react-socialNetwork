import React from 'react';
import s from './users.module.css';
import userPhoto from '../../assets/images/ava.jpg';
import {NavLink} from "react-router-dom";
import {UserType} from "../../types/types";
import {Button as BaseButton} from 'antd';

type PropsType = {
    user: UserType
    followingProgress: Array<number>
    unfollowThunkCreator(id: number): void
    followThunkCreator(id: number): void
}

let User: React.FC<PropsType> = ({followingProgress, user, unfollowThunkCreator, followThunkCreator}) => {
    return (<div className='users__item-info'>
                <div>
                    <div>
                        <NavLink to={'/profile/' + user.id}>
                            <img src={user.photos.small != null ? user.photos.small : userPhoto}
                                 className={s.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {user.followed
                            ?
                            <BaseButton type="danger" htmlType='submit' disabled={followingProgress.some(id => id === user.id)}
                                    onClick={() => {
                                        unfollowThunkCreator(user.id);
                                    }}>Unfollow</BaseButton>
                            :
                            <BaseButton type='primary' htmlType='submit' disabled={followingProgress.some(id => id === user.id)}
                                    onClick={() => {
                                        followThunkCreator(user.id);
                                    }}>Follow</BaseButton>}


                    </div>
                </div>
                <span>
                        <span>
                            <div>{user.name}</div>
                            <div>{user.status} </div>
                        </span>
                        <span>
                            <div> {"u.location.country"} </div>
                            <div> {"u.location.city"} </div>
                        </span>
                </span>
            </div>
    );

}

export default User;