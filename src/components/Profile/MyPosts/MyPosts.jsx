import React, {Component} from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../helpers/validations";
import {Textarea} from "../../common/FormValid/FormValid";

const maxlenght10 = maxLengthCreator(10);

const MyPostsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <div>
                    <Field placeholder={'posts text'} name={'newPost'}
                           component={Textarea} placeholder={'Add massage'} validate={[required, maxlenght10]}/>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
        </form>
    )
};

const MyReduxPostsForm = reduxForm({form: 'ProfileAddNewPostForm'})(MyPostsForm);

class MyPosts extends Component {
   /*Вместо PureComponent --- shouldComponentUpdate(nextProps, nextState) {
        return nextProps != this.props || nextState != this.state ;
    }
    React.memo в функциональной*/
  /*  componentDidMount() {
        setTimeout(() => {
            this.setState({x:2});
        }, 3000)
    }*/

    render() {
        console.log('RERENDER RR');
        let postsElements = this.props.posts.map(p => <Post message={p.post} likesCount={p.likesCount}/>)
        let onAddPost = (values) => {
            this.props.addPost(values.newPost);
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
    }
}

export default MyPosts;