import React, {useState} from 'react';
//import s from './Profileinfo.module.css';
import Preloader from "../../common/preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/ava.jpg";
import ProfileDataForm from "./ProfileDataForm";

import './Profile.scss';

const ProfileInfo = (props) => {
    let [editSwitch, setEditSwitch] = useState(false);
    if (!props.profile) {
        return <Preloader/>
    }
    const onSubmit = (formData) => {
        props.updateProfileThunkCreator(props.userId, formData.fullName, formData.aboutMe,
            formData.lookingForAJob,
            formData.lookingForAJobDescription,
            formData.contacts).then(
            () => {
                setEditSwitch(false);
            }
        );
    };
    const mainPhotoSelect = (e) => {
        if (e.target.files.length) {
            props.updateMainPhotoThunkCreator(props.userId, e.target.files[0])
        }
    };
    return (
        <div className='profile__info'>
            <div className='profile__info-header'>
                <div className='profile__info-avatar'>
                    <div className='profile__info-avatar-photo'>
                        <img src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto}/>
                    </div>
                    <div className='profile__info-avatar-edit-photo'>
                        {props.isOwner && <input type={'file'} onChange={mainPhotoSelect}/>}
                    </div>
                </div>
                <div className='profile__info-status'>
                    <div className='profile__info-status-name'>
                        <span>{props.profile.fullName}</span>
                    </div>
                    <div className='profile__info-status-data'>
                        <span>Status: </span>
                        <ProfileStatusWithHooks status={props.status}
                                                updateUserStatusThunkCreator={props.updateUserStatusThunkCreator}/>
                    </div>
                    <br/>
                </div>
            </div>
            <div className='profile__info-data'>
                {editSwitch
                    ? <ProfileDataForm initialValues={props.profile}{...props} onSubmit={onSubmit}/>
                    : <ProfileData profile={props.profile}
                                   isOwner={props.isOwner}
                                   goToEditSwitch={() => {
                                       setEditSwitch(true)
                                   }}/>}
            </div>

        </div>
    )
};

const ProfileData = (props) => {
    return (
        <div>
            {props.isOwner && <div>
                <button onClick={props.goToEditSwitch}>Edit</button>
            </div>}
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
                <br/>
                <b>Contacts:</b> {Object.keys(props.profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
            })}
            </div>
        </div>
    )
};

const Contact = ({contactTitle, contactValue}) => {
    return (
        <div>
            <b>{contactTitle}</b>: {contactValue}
        </div>
    )
}

export default ProfileInfo;