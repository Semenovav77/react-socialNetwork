import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {Empty} from "antd";
import classNames from "classnames";

import './Message.scss'
import Message from "../MessagesNew/Message";
import Preloader from "../../common/preloader/Preloader";


const Messages = ({blockRef, messages, isFetchingMessages, currentDialog, id,
                      getAllMessageDialogsThunkCreator, match, setCurrentDialogActionCreator}) => {

    useEffect(() => {
        let dialogId = match.params.id;
        if (dialogId) {
            setCurrentDialogActionCreator(Number(dialogId));
        };
    }, [match.params.id]);

    useEffect(() => {
        if (currentDialog != null) getAllMessageDialogsThunkCreator(currentDialog);
    }, [currentDialog]);
    return (
        <div ref={blockRef} className={classNames('currentMessages', {'currentMessages--isFetching': isFetchingMessages})}>
            {isFetchingMessages ?
                (<Preloader/>)
                :
                ((messages.totalCount > 0) ? (
                    <>
                        {messages.items.map(mes => {
                            return (<Message key={mes.id}
                                             body={mes.body}
                                             audio={mes.audio}
                                             date={mes.addedAt}
                                             isMe={(mes.senderId === id)}/>)
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