import React from 'react';
//import './index.css';
import * as serviceWorker from './serviceWorker';
import ReactDOM from "react-dom";
import MainApp from "./App";
import "./styles/index.scss";
import "emoji-mart/css/emoji-mart.css";

/*setInterval(() => {
    store.dispatch({type: 'FAKE'})
}, 1000);*/

/*let rerenderTree = () => {*/
ReactDOM.render(
        <MainApp />,
    document.getElementById('root'));
/*}*/

/*rerenderTree();*/

/*
store.subscribe(() => {
    rerenderTree()
});
*/

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
