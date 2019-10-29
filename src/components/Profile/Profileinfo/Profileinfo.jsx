import React from 'react';
import s from './Profileinfo.module.css';
import Preloader from "../../common/preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/ava.jpg";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (

        <div>
            {/*<img src={bg} className="App-bg" alt="bg"/>*/}
            <div className={s.decriptionBlock}>
                <img src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto}
                    /* className={s.userPhoto}*//>
               {/*<img src={props.profile.photos.large} />*/}
                ava+description
            </div>
            <ProfileStatusWithHooks status={props.status}
                           updateUserStatusThunkCreator={props.updateUserStatusThunkCreator}/>

        </div>
    )
}

export default ProfileInfo;