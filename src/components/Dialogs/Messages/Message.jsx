import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {Empty} from "antd";

import './Message.scss'
import Message from "../MessagesNew/Message";
import User from "../../Users/User";
import Preloader from "../../common/preloader/Preloader";

const Messages = ({messages, isFetchingMessages, currentDialog, getAllMessageDialogsThunkCreator}) => {
    useEffect(() => {
        if (currentDialog != null) getAllMessageDialogsThunkCreator(currentDialog);
    }, [currentDialog]);
    return (
        <div>
            {isFetchingMessages ?
                (<Preloader/>)
                :
                (messages.length ? (
                    <div>
                        {messages.map(mes => {
                            return (<Message key={mes.id}
                                             user={mes.user}
                                             text={mes.text}
                                             audio={mes.audio}
                                             date={mes.created_at}
                                             isMe={false}/>)
                        })
                        }
                    </div>
                ) : (
                    <Empty description="Нет сообщений"/>))}

        </div>)
};

Messages.propTypes = {
    items: PropTypes.array
};

export default Messages;