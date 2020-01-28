import React from 'react';
import PropTypes from 'prop-types';
import {Empty} from "antd";

import './Message.scss'
import Message from "../MessagesNew/Message";

const Messages = ({items = 1}) => {
    const newDate = new Date(2018, 10, 1, 23,23,23);
    return (
        <div>
            {items ? (
                    <div>
                <Message
                    avatar='https://social-network.samuraijs.com/activecontent/images/users/1779/user.jpg?v=7'
                    text='Привет кул! как твои дела?'
                    date={newDate}
                    isMe={false}
                />
                <Message
                avatar='https://social-network.samuraijs.com/activecontent/images/users/1779/user.jpg?v=7'
                text='Хорошо'
                date={newDate}
                isMe={true}
                />
                <Message
                avatar='https://social-network.samuraijs.com/activecontent/images/users/1779/user.jpg?v=7'
                date={newDate}
                audio="https://notificationsounds.com/soundfiles/854d9fca60b4bd07f9bb215d59ef5561/file-merry-christmas-ho-ho.mp3"
                />
                <Message
                avatar='https://social-network.samuraijs.com/activecontent/images/users/1779/user.jpg?v=7'
                text='Привет кул! как твои дела?'
                date={newDate}
                isMe={false}
                />
                <Message
                avatar='https://social-network.samuraijs.com/activecontent/images/users/1779/user.jpg?v=7'
                text='Привет кул! как твои дела?'
                date={newDate}
                isMe={false}
                />
                <Message
                avatar='https://social-network.samuraijs.com/activecontent/images/users/1779/user.jpg?v=7'
                text='Привет кул! как твои дела?'
                date={newDate}
                isMe={false}
                />
                <Message
                avatar='https://social-network.samuraijs.com/activecontent/images/users/1779/user.jpg?v=7'
                text='Привет кул! как твои дела?'
                date={newDate}
                isMe={false}
                />
                <Message
                avatar='https://social-network.samuraijs.com/activecontent/images/users/1779/user.jpg?v=7'
                text='Привет кул! как твои дела?'
                date={newDate}
                isMe={false}
                />
                <Message
                avatar='https://social-network.samuraijs.com/activecontent/images/users/1779/user.jpg?v=7'
                text='Привет кул! как твои дела?'
                date={newDate}
                isMe={false}
                />
                    </div>
                ) : (
                <Empty  description="Нет сообщений"/>)}
        </div>)
};

Messages.propTypes = {
    items: PropTypes.array
};

export default Messages;