import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import React from "react";
let state = {
    posts: [
        {id: 1, post: "First post", likesCount: 2},
        {id: 2, post: "Second post", likesCount: 22},
    ],
};

it('length of post should be incremented', () => {
    //1. start test data
    let action = addPostActionCreator('my first test');
    //2. action
    let newState = profileReducer(state, action);
    //3. expectation
    expect (newState.posts.length).toBe(3);
});

it('message of new post should be =\'my first test\'', () => {
    //1. start test data
    let action = addPostActionCreator('my first test');

    //2. action
    let newState = profileReducer(state, action);
    //3. expectation
    expect (newState.posts[2].post).toBe('my first test');
});

it('after deleting length of messages should not be decrement if id incorrect', () => {
    //1. start test data
    let action = deletePost(10);

    //2. action
    let newState = profileReducer(state, action);
    //3. expectation
    expect (newState.posts.length).toBe(2);
});

