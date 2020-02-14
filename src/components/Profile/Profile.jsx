import React from 'react';
import ProfileInfo from "./Profileinfo/Profileinfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {updateMainPhotoThunkCreator} from "../../redux/profile-reducer";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo
                isOwner={props.isOwner}
                profile={props.profile}
                status={props.status}
                updateUserStatusThunkCreator={props.updateUserStatusThunkCreator}
                updateProfileThunkCreator={props.updateProfileThunkCreator}
                updateMainPhotoThunkCreator={props.updateMainPhotoThunkCreator}
                userId={props.userId}/>
            <MyPostsContainer/>
        </div>
    )
};

export default Profile;