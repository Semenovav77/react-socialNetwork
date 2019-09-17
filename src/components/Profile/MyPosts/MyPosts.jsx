import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.post} likesCount={p.likesCount}/>)
    let newPostElement = React.createRef();
    let addPost = () => {
        debugger;
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value='';
    }
    return (
        <div className={s.postBlocks}>
            My post
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;