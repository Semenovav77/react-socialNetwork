import React from 'react';
import bg from './../first-bg.jpg';
import s from './Profileinfo.module.css';
import Preloader from "../../common/preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <img src={bg} className="App-bg" alt="bg"/>
            <div className={s.decriptionBlock}>
                <img src={props.profile.photos.large} />
                ava+description
            </div>
        </div>
    )
}

export default ProfileInfo;