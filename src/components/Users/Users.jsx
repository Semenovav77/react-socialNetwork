import React from 'react';
import s from './users.module.css';
import userPhoto from '../../assets/images/ava.jpg';
import {NavLink} from "react-router-dom";
import * as axios from "axios";


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    };
    return (<div>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p && s.selectedPage}
                                 onClick={(e) => props.onPageChanged(p)}>{p}</span>})}
            </div>
            {
                props.users.map(u => <div key={u.id}>
                    <div>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto}/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {

                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                        {withCredentials: true, headers: {'API-KEY': '148f8102-6361-4c62-b57f-dd484a50766c'}})
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.unfollowUser(u.id)
                                            }

                                        });
                                }}> Unfollow </button>
                                : <button onClick={() => {
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},
                                        {withCredentials: true, headers: {'API-KEY': '148f8102-6361-4c62-b57f-dd484a50766c'}})
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.followUser(u.id)
                                            }
                                        });
                                }}>Follow</button>}

                        </div>
                    </div>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status} </div>
                        </span>
                        <span>
                            <div> {"u.location.country"}</div>
                            <div> {"u.location.city"}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    );

}

export default Users;