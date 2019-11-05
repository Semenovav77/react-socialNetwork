import React from 'react';
import s from './users.module.css';
import userPhoto from '../../assets/images/ava.jpg';
import {NavLink} from "react-router-dom";

let User = (props) => {
    return (<div>
            <div>
                <div>
                    <div>
                        <NavLink to={'/profile/' + props.user.id}>
                            <img src={props.user.photos.small != null ? props.user.photos.small : userPhoto}
                                 className={s.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {props.user.followed
                            ? <button disabled={props.followingProgress.some(id => id === props.user.id)}
                                      onClick={() => {
                                          props.unfollowThunkCreator(props.user.id);
                                      }}> Unfollow </button>
                            : <button disabled={props.followingProgress.some(id => id === props.user.id)}
                                      onClick={() => {
                                          props.followThunkCreator(props.user.id);
                                      }}>Follow</button>}

                    </div>
                </div>
                <span>
                        <span>
                            <div>{props.user.name}</div>
                            <div>{props.user.status} </div>
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