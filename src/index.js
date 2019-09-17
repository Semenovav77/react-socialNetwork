import React from 'react';
import './index.css';
import state, {addPost, subscribe, updateNewPostText} from './redux/State';
import * as serviceWorker from './serviceWorker';
import ReactDOM from "react-dom";
import App from "./App";

let rerenderTree = (state) => {
    ReactDOM.render(<App state={state}
                         addPost={addPost}
                         updateNewPostText={updateNewPostText}/>,
        document.getElementById('root'));
}

rerenderTree(state);
subscribe(rerenderTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
