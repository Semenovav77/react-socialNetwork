import React from 'react';
import bg from './../first-bg.jpg';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return  (
        <div className={s.content}>
            <img src={bg} className="App-bg" alt="bg" />
            <div>
                ava+description
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile;