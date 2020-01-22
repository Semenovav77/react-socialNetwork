import React from 'react';
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./MessagesNew/Message";
import orderBy from "lodash/orderBy";
import {Icon, Input} from "antd";

import './Dialogs.scss'

const Dialogs = ({items}) => {
    const newDate = new Date(2018, 10, 1, 23,23,23);
    const { Search } = Input;
    return (
        <section className='messages'>
            <div className="chat">
                <div className="chat__dialogs-bar">
                    <div className="chat__dialogs-bar-header">
                        <div>
                            <Icon type="team" style={{color: 'rgba(0,0,0,.25)'}}/>
                            <span>Список диалогов</span>
                        </div>
                            <Icon type="form" style={{color: 'rgba(0,0,0,.25)'}}/>
                    </div>

                    <div className="chat__dialogs-bar-search">
                        <Search
                            placeholder="Поиск контактов"
                            onSearch={value => console.log(value)}
                            style={{ width: "100%" }}
                        />
                    </div>
                    <div className="chat__dialogs-bar-dialogs">
                        <div className={'dialogs'}>
                            {orderBy(items, ["lastMessage.created_at"], ["desc"]).map(item => (
                                <DialogItem
                                    key={item.id}
                                    user={item.user}
                                    lastMessage={item.lastMessage}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="chat__current-dialog">
                    <div className="chat__current-dialog-header">
                        <b className="chat__current-dialog-header-fullname">Ontoshka</b>
                        <div className="chat__current-dialog-header-status">
                            <span className="status status--online">
                                онлайн
                            </span>
                        </div>
                    </div>
                    <div className="chat__current-dialog-messages">
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
                    </div>
                </div>
            </div>
            {/*<div className={'dialogs'}>
                {orderBy(items, ["lastMessage.created_at"], ["desc"]).map(item => (
                    <DialogItem
                        key={item.id}
                        user={item.user}
                        lastMessage={item.lastMessage}
                    />
                ))}
            </div>
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
            />*/}
        </section>
        )

};

export default Dialogs;