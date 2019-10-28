import React from 'react';
import ProfileInfo from "./Profileinfo/Profileinfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    console.log('profilelog');
    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status}
                         updateUserStatusThunkCreator={props.updateUserStatusThunkCreator}/>
            <MyPostsContainer/>
        </div>
    )
};

export default Profile;