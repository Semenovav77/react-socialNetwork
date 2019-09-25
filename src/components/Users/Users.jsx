import React from 'react';
import s from './users.module.css'

let Users = (props) => {
    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <div>
                        <div>
                            <img src={u.photoUrl} className={s.userPhoto}/>
                        </div>
                        <div>
                            { u.followed
                                ? <button onClick={() => {props.unfollowUser(u.id)}}>Unfollow</button>
                                : <button onClick={() => {props.followUser(u.id)}}>Follow</button>}

                        </div>
                    </div>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status} </div>
                        </span>
                        <span>
                            <div> {u.location.country}</div>
                            <div> {u.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    );
}
export default Users;