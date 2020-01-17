import React from 'react';
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./MessagesNew/Message";
import orderBy from "lodash/orderBy";

const Dialogs = ({items}) => {
    const newDate = new Date(2018, 10, 1, 23,23,23);
    return (
        <section className='messages'>
            <div className={'dialogs'}>
                {orderBy(items,["lastMessage.created_at"],["desc"]).map(item => (
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
            />
        </section>
        )

};

export default Dialogs;