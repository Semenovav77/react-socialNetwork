import React from 'react';
import classNames from 'classnames';
import format from 'date-fns/format';
import isToday from 'date-fns/isToday';
import {Link} from 'react-router-dom';
import {parseISO} from 'date-fns';

import generateColorAva from "./../../../helpers/generateColorAva";
import Avatar from '../../common/Avatar/Avatar.jsx';

import './DialogItem.scss'

const getMessageTime = created_at => {
    if (isToday(new Date(Date.parse(created_at)))) {
        return format(new Date(Date.parse(created_at)), 'HH:mm')
    } else {
        return format(new Date(Date.parse(created_at)), 'dd.MM.yyyy')
    }
};

const DialogItem = ({id, userName, text='Здесь будет последнее сообщение от пользователя',
                        lastDialogActivityDate, photos, currentDialog, setCurrentDialogActionCreator}) => {
    const setCurrentDialog = (dialogId) => {
        setCurrentDialogActionCreator(Number(dialogId));
    }

    return (
        <Link to={`/dialogs/${id}`}>
            <div className={classNames('dialogs__item', currentDialog === id && 'dialogs__item--selected')}
              onClick={() => setCurrentDialog(id)}>
                <div className='dialogs__item-avatar'>
                    <Avatar photos={photos} userName={userName} id={id}/>
                </div>
                <div className='dialogs__item-info'>
                    <div className='dialogs__item-info-top'>
                        <b>{userName}</b>
                        <span> {getMessageTime(lastDialogActivityDate)} </span>
                    </div>
                    <div className='dialogs__item-info-bottom'>
                        <p>{text}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default DialogItem;
