import React, {useEffect, useState} from 'react';
import Dialogs from './../Dialogs'

import './DialogsFilter.scss';
/*import socket from './../../../socket/socket'*/

const DialogsFilter = ({
                           dialogs, messages, currentDialog, id,
                           isFetchingDialogs, isFetchingMessages,
                           getAllMessageDialogsThunkCreator, getDialogsThunkCreator,
                           setCurrentDialogActionCreator, match, sendMessageThunkCreator
                       }) => {
    const [inputValue, setValue] = useState('');
    const [filtred, setFiltredItems] = useState(Array.from(dialogs));

    const onChangeInputSearch = (e) => {
        const value = e.target.value;
        setFiltredItems(dialogs.filter(dialog => dialog.userName.toLowerCase().indexOf(value.toLowerCase()) >= 0));
        setValue(value);
    };

    useEffect(() => {
        getDialogsThunkCreator();
        setFiltredItems(dialogs);
    }, []);
    useEffect(() => {
        setFiltredItems(dialogs);
    }, [dialogs]);


/*    socket.on('SERVER:DIALOG_CREATED', (data) =>{
        console.log(data);
        getDialogsThunkCreator();
    });*/

    return (
        <Dialogs dialogs={filtred}
                 messages={messages}
                 currentDialog={currentDialog}
                 isFetchingDialogs={isFetchingDialogs}
                 isFetchingMessages={isFetchingMessages}
                 onSearch={onChangeInputSearch}
                 inputValue={inputValue}
                 setCurrentDialogActionCreator={setCurrentDialogActionCreator}
                 getAllMessageDialogsThunkCreator={getAllMessageDialogsThunkCreator}
                 match={match}
                 sendMessageThunkCreator={sendMessageThunkCreator}
                 id={id}/>
    );
};

export default DialogsFilter;
