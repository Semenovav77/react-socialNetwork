import React from 'react';
import PropTypes from 'prop-types';
import {Empty} from "antd";

import './Message.scss'
import Message from "../MessagesNew/Message";
import User from "../../Users/User";

const Messages = ({messages}) => {
    return (
        <div>
            {messages.length ? (
                    <div>
                        {messages.map(mes => {
                            return (<Message key={mes.id}
                                             user={mes.user}
                                             text={mes.text}
                                             audio={mes.audio}
                                             date={mes.created_at}
                                             isMe={false} /> ) })
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