import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    let postData = [
        {id: 1, post: "First post", likesCount: 2},
        {id: 2, post: "Second post", likesCount: 22},
    ]
    return (
        <div className={s.postBlocks}>
            My post
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message={postData[0].post} likesCount={postData[0].likesCount}/>
                <Post message={postData[1].post} likesCount={postData[1].likesCount}/>
            </div>
        </div>
    )
}

export default MyPosts;