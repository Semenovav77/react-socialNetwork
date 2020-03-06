import React, {useRef, useEffect} from 'react';
import orderBy from "lodash/orderBy";
import {Button, Icon, Input, Empty} from "antd";
import classNames from "classnames";

import './Dialogs.scss'
import InputChat from "./InputChat/InputChat";
import Preloader from './../common/preloader/Preloader';
import DialogItem from "./DialogItem/DialogsItem";
import Messages from "./Messages/Message";
import DialogsFilter from "./DialogsFilter/DialogsFilter";

const Dialogs = ({
                     dialogs, currentDialog, isFetchingDialogs, id,
                     isFetchingMessages, messages, onSearch,
                     inputValue, getAllMessageDialogsThunkCreator,
                     setCurrentDialogActionCreator, match, sendMessageThunkCreator
                 }) => {
    const messagesRef = useRef(null);
    useEffect(() => {
        if (messagesRef.current) {
            messagesRef.current.scrollTo(0, 9999)
         }
    });
    const {Search} = Input;
    const online = true;
    return (
        <section className='messages'>
            <div className="chat">
                <div className="chat__dialogs-bar">
                    <div className="chat__dialogs-bar-header">
                        <div>
                            <Icon type="team" style={{color: 'rgba(0,0,0,.25)'}}/>
                            <span>Список диалогов</span>
                        </div>
                        <Button type="ghost" icon='form' style={{color: 'rgba(0,0,0,.25)'}}/>
                    </div>

                    <div className="chat__dialogs-bar-search">
                        <Search
                            placeholder="Поиск контактов"
                            onChange={e => onSearch(e)}
                            style={{width: "100%"}}
                            value={inputValue}
                        />
                    </div>
                    <div className="chat__dialogs-bar-dialogs">
                        <div className={classNames('dialogs',{'dialogs--isFetching': isFetchingDialogs})}>
                            {isFetchingDialogs ?
                                (<Preloader/>)
                                :
                                (dialogs.length ? (orderBy(dialogs, ["lastDialogActivityDate"], ["desc"]).map(item => (
                                        <DialogItem
                                            key={item.id}
                                            id={item.id}
                                            userName={item.userName}
                                            photos={item.photos}
                                            /*text={item.text}*/
                                            /*created_at={item.created_at}*/
                                            lastDialogActivityDate={item.lastDialogActivityDate}
                                            currentDialog={currentDialog}
                                            setCurrentDialogActionCreator={setCurrentDialogActionCreator}

                                        />
                                    ))) : (
                                        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description='Ничего не найдено'/>)
                                )}
                        </div>
                    </div>
                </div>
                <div className="chat__current-dialog">
                    <div className="chat__current-dialog-header">
                        <b className="chat__current-dialog-header-fullname">
                            {dialogs.length && dialogs.map(dialo => (dialo.id === currentDialog) && dialo.userName)}
                        </b>
                        <div className="chat__current-dialog-header-status">
                            <span className={classNames("status", {"status--online": online})}>
                                {online ? "online" : "offline"}
                            </span>
                        </div>
                    </div>
                    <div className="chat__current-dialog-messages">
                        <Messages messages={messages}
                                  currentDialog={currentDialog}
                                  isFetchingMessages={isFetchingMessages}
                                  blockRef={messagesRef}
                                  getAllMessageDialogsThunkCreator={getAllMessageDialogsThunkCreator}
                                  setCurrentDialogActionCreator={setCurrentDialogActionCreator}
                                  match={match}
                                  id={id}/>
                    </div>
                    <InputChat sendMessageThunkCreator={sendMessageThunkCreator} currentDialog={currentDialog}/>

                </div>
            </div>
        </section>
    )

};

export default Dialogs;