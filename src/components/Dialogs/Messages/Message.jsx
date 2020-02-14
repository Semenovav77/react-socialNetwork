import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {Empty} from "antd";
import classNames from "classnames";

import './Message.scss'
import Message from "../MessagesNew/Message";
import Preloader from "../../common/preloader/Preloader";


const Messages = ({blockRef, messages, isFetchingMessages, currentDialog, getAllMessageDialogsThunkCreator}) => {
    useEffect(() => {
        if (currentDialog != null) getAllMessageDialogsThunkCreator(currentDialog);
    }, [currentDialog]);
    return (
        <div ref={blockRef} className={classNames('currentMessages', {'currentMessages--isFetching': isFetchingMessages})}>
            {isFetchingMessages ?
                (<Preloader/>)
                :
                (messages.length ? (
                    <>
                        {messages.map(mes => {
                            return (<Message key={mes.id}
                                             user={mes.user}
                                             text={mes.text}
                                             audio={mes.audio}
                                             date={mes.created_at}
                                             isMe={false}/>)
                        })
                        }
                    </>
                ) : (
                    <Empty description="Нет сообщений"/>))}

        </div>)
};

Messages.propTypes = {
    items: PropTypes.array
};

export default Messages;