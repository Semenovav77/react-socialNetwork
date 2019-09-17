import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost} from './redux/State';

export let rerenderTree = (state) => {
    ReactDOM.render(<App state={state} addPost={addPost}/>, document.getElementById('root'));
}
