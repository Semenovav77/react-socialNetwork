import React from 'react';
import s from './users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/ava.jpg';

let Users = (props) => {
    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then (response => {
                    debugger;
                    props.setUsers(response.data.items);
                });
            /*  props.setUsers([
                  {
                      id: 1, photoUrl: "https://cs9.pikabu.ru/post_img/2017/05/12/8/1494592816133830021.jpg",
                      followed: false, fullName: "Anton", status: "Pizdec", location: {city: "Moscow", country: "Russia"}
                  },
                  {
                      id: 2, photoUrl: "https://cs9.pikabu.ru/post_img/2017/05/12/8/1494592816133830021.jpg",
                      followed: true, fullName: "Serg", status: "Nah", location: {city: "Samara", country: "Russia"}
                  },
                  {
                      id: 3, photoUrl: "https://cs9.pikabu.ru/post_img/2017/05/12/8/1494592816133830021.jpg",
                      followed: false, fullName: "Anton", status: "What", location: {city: "Minsk", country: "Belarus"}
                  },
              ])*/
        }
    };

    return (
        <div>
            <button onClick={getUsers}>Get users </button>
            {
                props.users.map(u => <div key={u.id}>
                    <div>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto}/>
                        </div>
                        <div>
                            { u.followed
                                ? <button onClick={() => {props.unfollowUser(u.id)}}>Unfollow</button>
                                : <button onClick={() => {props.followUser(u.id)}}>Follow</button>}

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