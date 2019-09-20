import React from 'react';
import './index.css';
import store from './redux/redux-store';
import * as serviceWorker from './serviceWorker';
import ReactDOM from "react-dom";
import App from "./App";

let rerenderTree = (state) => {
    ReactDOM.render(<App
            state={state}
            dispatch={store.dispatch.bind(store)}
            store={store}/>,
        document.getElementById('root'));
}

rerenderTree(store.getState());
store.subscribe(() => {
    let state = store.getState();
    rerenderTree(state)
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
