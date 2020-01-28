import React from 'react';
import DialogItem from "./DialogItem/DialogsItem";
import Messages from "./Messages/Message";
import orderBy from "lodash/orderBy";
import {Button, Icon, Input, Empty} from "antd";
import classNames from "classnames";

import './Dialogs.scss'
import InputChat from "./InputChat/InputChat";

const Dialogs = ({items, onSearch, inputValue}) => {

    const { Search } = Input;
    const online=true;
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
                            style={{ width: "100%" }}
                            value={inputValue}
                        />
                    </div>
                    <div className="chat__dialogs-bar-dialogs">
                        <div className={'dialogs'}>
                            {items.length ? (orderBy(items, ["lastMessage.created_at"], ["desc"]).map(item => (
                                <DialogItem
                                    key={item.id}
                                    user={item.user}
                                    lastMessage={item.lastMessage}
                                />
                            ))) : (<Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description='Ничего не найдено'/>)}
                        </div>
                    </div>
                </div>
                <div className="chat__current-dialog">
                    <div className="chat__current-dialog-header">
                        <b className="chat__current-dialog-header-fullname">Ontoshka</b>
                        <div className="chat__current-dialog-header-status">
                            <span className={classNames("status", {"status--online": online})}>
                                {online ? "online" : "offline"}
                            </span>
                        </div>
                    </div>
                    <div className="chat__current-dialog-messages">
                        <Messages />
                    </div>
                    <InputChat />

                </div>
            </div>
        </section>
        )

};

export default Dialogs;