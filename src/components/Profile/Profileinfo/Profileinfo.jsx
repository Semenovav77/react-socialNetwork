import React from 'react';
import s from './Profileinfo.module.css';
import Preloader from "../../common/preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    console.log('fgfg');
    return (

        <div>
            {/*<img src={bg} className="App-bg" alt="bg"/>*/}
            <div className={s.decriptionBlock}>
                <img src={props.profile.photos.large} />
                ava+description
            </div>
            <ProfileStatusWithHooks status={props.status}
                           updateUserStatusThunkCreator={props.updateUserStatusThunkCreator}/>

        </div>
    )
}

export default ProfileInfo;