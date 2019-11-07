import React, {useState} from 'react';
import s from './Profileinfo.module.css';
import Preloader from "../../common/preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/ava.jpg";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = (props) => {
    let [editSwitch, setEditSwitch] = useState(false);
    if (!props.profile) {
        return <Preloader/>
    }
    const onSubmit = (formData) => {
       /*console.log(formData)*/
        props.updateProfileThunkCreator(props.userId, formData.fullName, formData.aboutMe,
            formData.lookingForAJob,
            formData.lookingForAJobDescription,
            formData.contacts).then(
                () => {
                    setEditSwitch(false);
                }
            );
    };
    return (
        <div>
            {/*<img src={bg} className="App-bg" alt="bg"/>*/}
            <div className={s.decriptionBlock}>
                <img src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto}
                    /* className={s.userPhoto}*//>
                {/*<img src={props.profile.photos.large} />*/}
            </div>
            <div>
                <b><span>Status: </span></b>
                <ProfileStatusWithHooks status={props.status}
                                        updateUserStatusThunkCreator={props.updateUserStatusThunkCreator}/>
                <br/>
            </div>
            {editSwitch
                ? <ProfileDataForm initialValues={props.profile}{...props} onSubmit={onSubmit}/>
                : <ProfileData profile={props.profile}
                               isOwner={props.isOwner}
                               goToEditSwitch={() => {setEditSwitch(true)}}/>}

        </div>
    )
};

const ProfileData = (props) => {
    return (
        <div>
            {props.isOwner && <div><button onClick={props.goToEditSwitch}>Edit</button></div>}
            <div>
                <b>Fullname:</b>{props.profile.fullName}
            </div>
            <div>
                <b>Looking for a job:</b>{props.profile.lookingForAJob ? 'yes' : 'no'}
            </div>
            {props.profile.lookingForAJob &&
            <div>
                <b>My prof skills:</b>{props.profile.lookingForAJobDescription}
            </div>
            }
            <div>
                <b>About me:</b>{props.profile.aboutMe}
            </div>
            <div>
                <br />
                <b>Contacts:</b> {Object.keys(props.profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
            })}
            </div>
        </div>
    )
};

const Contact = ({contactTitle, contactValue}) => {
    return (
        <div className={s.contacts}><b>{contactTitle}</b>: {contactValue}</div>
    )
}

export default ProfileInfo;