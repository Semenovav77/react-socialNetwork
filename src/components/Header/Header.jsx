import React from 'react';
import logo from '../logo.png';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    const onSubmit = () => {
        props.logoutThunkCreator();
    };
    return (
        <header className={s.header}>
            <img src={logo} className="App-logo" alt="logo"/>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div> {props.login} -- <button onClick={onSubmit}>Logout</button> </div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )

}

export default Header;