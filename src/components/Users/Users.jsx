import React from 'react';
import s from './users.module.css';
import userPhoto from '../../assets/images/ava.jpg';


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
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    props.unfollowUser(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    props.followUser(u.id)
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