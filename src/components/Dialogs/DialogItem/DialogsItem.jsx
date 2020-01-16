/*
import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}


export default DialogItem;*/
import React from 'react';
import classNames from 'classnames';
import format from 'date-fns/format'
import isToday from 'date-fns/isToday'

import './DialogItem.scss'

const getMessageTime = created_at => {
    if (isToday (created_at)) {
        return format(created_at, 'HH:mm')
    } else {
        return format(created_at, 'dd.MM.yyyy')
    }
};

const getAvatar = (avatar) => {
    if (avatar) {
        return (
            <img src={avatar} alt={`avatar`} />
        );
    } else {
        //make ava
    }

};
const DialogItem = ({user, lastMessage}) => {
    debugger;
    return (
        <div className={classNames('dialogs__item', '')}>
            <div className='dialogs__item-avatar'>
                {getAvatar(user.avatar)}
            </div>
            <div className='dialogs__item-info'>
                <div className='dialogs__item-info-top'>
                    <b>{user.fullname}</b>
                    <span> {getMessageTime(lastMessage.created_at)} </span>
                </div>
                <div className='dialogs__item-info-bottom'>
                    <p>{lastMessage.text}</p>
                </div>
            </div>
        </div>
    );
};

export default DialogItem;
