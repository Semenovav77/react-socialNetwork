import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div>
            <div className={s.item}>
                {props.message}
            </div>
            <div>
               likes {props.likesCount}
            </div>
        </div>
    )
}

export default Post;