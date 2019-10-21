import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";

const MyPostsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <div>
                    <Field placeholder={'posts text'} name={'newPost'} component={'textarea'}/>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
        </form>
    )
};

const MyReduxPostsForm = reduxForm({form: 'ProfileAddNewPostForm'})(MyPostsForm);

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.post} likesCount={p.likesCount}/>)
    let onAddPost = (values) => {
        props.addPost(values.newPost);
    };
    return (
        <div className={s.postBlocks}>
            My post
            <MyReduxPostsForm onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
};

export default MyPosts;