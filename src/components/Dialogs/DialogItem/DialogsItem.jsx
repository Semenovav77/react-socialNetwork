import React from 'react';
import classNames from 'classnames';
import format from 'date-fns/format';
import isToday from 'date-fns/isToday';
import {parseISO} from 'date-fns'

import generateColorAva from "./../../../helpers/generateColorAva";
import Avatar from '../../common/Avatar/Avatar.jsx';

import './DialogItem.scss'

const getMessageTime = created_at => {
    if (isToday (new Date(Date.parse(created_at)))) {
        return format(new Date(Date.parse(created_at)), 'HH:mm')
    } else {
        return format(new Date(Date.parse(created_at)), 'dd.MM.yyyy')
    }
};

const DialogItem = ({id, user, text, created_at, currentDialog, setCurrentDialogActionCreator}) => {
    const setCurrentDialog = (id) => {
        setCurrentDialogActionCreator(id);
    };
    return (
        <div className={classNames('dialogs__item', currentDialog === id && 'dialogs__item--selected')}
        onClick={() => setCurrentDialog(id)}>
            <div className='dialogs__item-avatar'>
                <Avatar user={user}/>
            </div>
            <div className='dialogs__item-info'>
                <div className='dialogs__item-info-top'>
                    <b>{user.fullname}</b>
                    <span> {getMessageTime(created_at)} </span>
                </div>
                <div className='dialogs__item-info-bottom'>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    );
};

export default DialogItem;
