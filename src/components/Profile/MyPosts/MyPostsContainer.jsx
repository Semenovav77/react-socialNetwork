import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../redux/dialogs-reducer";
import {connect} from "react-redux";
import Dialogs from "../../Dialogs/Dialogs";


/*const MyPostsContainer = (props) => {
    let state = props.store.getState();
    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    };
    let onPostChange = (text) => {
        props.store.dispatch(updateNewPostTextActionCreator(text));
    };
    return (
       <MyPosts updateNewPostText={onPostChange} addPost={addPost}
                posts={state.profilePage.posts}
                newPostText={state.profilePage.newPostText}/>
    )
}*/

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPost) => {
            dispatch(addPostActionCreator(newPost));
        }
    }
};


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;