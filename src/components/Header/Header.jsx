import React from 'react';
import logo from '../logo.png';
//import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import {Button as BaseButton} from "antd";

import './Header.scss';

const Header = ({isAuth, login, logoutThunkCreator}) => {
    const onSubmit = () => {
        logoutThunkCreator();
    };
    return (
        <header className='header'>
            <div className='header__info'>
                <div className='logo'>
                    <img src={logo} className="App-logo" alt="logo"/>
                </div>
                <div className='lk'>
                    {isAuth
                        ? <div className='lk__login'>
                            <div className='lk__login-name'>
                                <span> {login} </span>
                            </div>
                            <div className='lk__login-button-logout'>
                                <BaseButton type="danger" htmlType='submit' onClick={onSubmit}> Logout </BaseButton>
                            </div>
                        </div>
                        : <div className='lk__login-not-auth'> <NavLink to={'/login'}>Login</NavLink></div>}
                </div>
            </div>
        </header>
    )

};

export default Header;