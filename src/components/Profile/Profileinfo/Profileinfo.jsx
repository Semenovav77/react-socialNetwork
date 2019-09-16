import React from 'react';
import bg from './../first-bg.jpg';
import s from './Profileinfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <img src={bg} className="App-bg" alt="bg"/>
            <div className={s.decriptionBlock}>
                ava+description
            </div>
        </div>
    )
}

export default ProfileInfo;