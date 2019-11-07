import React from 'react';
import ProfileInfo from "./Profileinfo/Profileinfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    console.log('profilelog');
    return (
        <div>
            <ProfileInfo
                isOwner={props.isOwner}
                profile={props.profile}
                status={props.status}
                updateUserStatusThunkCreator={props.updateUserStatusThunkCreator}
                updateProfileThunkCreator={props.updateProfileThunkCreator}
                userId={props.userId}/>
            <MyPostsContainer/>
        </div>
    )
};

export default Profile;