import React from 'react';
import PropTypes from 'prop-types';
import {Empty} from "antd";

import './Message.scss'
import Message from "../MessagesNew/Message";
import User from "../../Users/User";

const Messages = ({messages}) => {
    const newDate = new Date(2018, 10, 1, 23,23,23);
    console.log(messages)
    return (
        <div>
            {messages.length ? (
                    <div>
               {/* <Message
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
                />*/}
                        {messages.map(mes => {console.log(mes);
                            {/*<Messages key={mes.id}
                                                       avatar={mes.avatar}
                                                       text={mes.text}
                                                       audio={mes.audio}
                                                       date={mes.created_at}
                                                       isMe={false} />*/} } )
                        }
                    </div>
                ) : (
                <Empty  description="Нет сообщений"/>)}
        </div>)
};

Messages.propTypes = {
    items: PropTypes.array
};

export default Messages;