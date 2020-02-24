import React from 'react';
import s from './users.module.css';
import userPhoto from '../../assets/images/ava.jpg';
import {NavLink} from "react-router-dom";
import {UserType} from "../../types/types";

type PropsType = {
    user: UserType
    followingProgress: Array<number>
    unfollowThunkCreator(id: number): void
    followThunkCreator(id: number): void
}

let User: React.FC<PropsType> = ({followingProgress, user, unfollowThunkCreator, followThunkCreator}) => {
    return (<div>
            <div>
                <div>
                    <div>
                        <NavLink to={'/profile/' + user.id}>
                            <img src={user.photos.small != null ? user.photos.small : userPhoto}
                                 className={s.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {user.followed
                            ? <button disabled={followingProgress.some(id => id === user.id)}
                                      onClick={() => {
                                          unfollowThunkCreator(user.id);
                                      }}> Unfollow </button>
                            : <button disabled={followingProgress.some(id => id === user.id)}
                                      onClick={() => {
                                          followThunkCreator(user.id);
                                      }}>Follow</button>}

                    </div>
                </div>
                <span>
                        <span>
                            <div>{user.name}</div>
                            <div>{user.status} </div>
                        </span>
                        <span>
                            <div> {"u.location.country"}</div>
                            <div> {"u.location.city"}</div>
                        </span>
                    </span>
            </div>
            )
            }
        </div>
    );

}

export default User;