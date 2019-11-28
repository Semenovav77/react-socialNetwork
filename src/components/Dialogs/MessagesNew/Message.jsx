import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import ruLocale from 'date-fns/locale/ru';
import checkedImg from '../../../assets/images/clipart2243667.png';

import './Message.scss'

const Message = (props) => {
    return (
        <div className={classNames('message', {'message--isme':props.isMe})}>
            {/*<img  className='message__checked' src={checkedImg} alt='Checked icon' />*/}
            <div className='message__avatar'>
                <img src={props.avatar} alt={`Avatar ${props.user.fullname}`} />
            </div>
            <div className='message__content'>
                <div className='message__bubble'>
                    <p className='message__text'> {props.text} </p>
                </div>
                <span className='message__date'>{formatDistanceToNow(props.date,{addSuffix: true, locale: ruLocale})}</span>
            </div>
        </div>
    )
};

Message.defaultProps = {
    user: {}
}

Message.propTypes = {
    avatar: PropTypes.string,
    text: PropTypes.string,
    date: PropTypes.string
};

export default Message;