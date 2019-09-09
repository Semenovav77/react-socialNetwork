import React from 'react';
import bg from './first-bg.jpg';
import s from './Profile.module.css';

const Profile = () => {
    return  (
        <div className={s.content}>
            <img src={bg} className="App-bg" alt="bg" />
            <div>
                ava+description
            </div>
            <div>
                My post
                <div>New post</div>
                <div className={s.item}>post 1</div>
                <div>post 2</div>
            </div>
        </div>
    )
}

export default Profile;