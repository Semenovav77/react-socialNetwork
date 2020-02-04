import React, {useEffect, useState} from 'react';
import Dialogs from './../Dialogs'

import './DialogsFilter.scss'

const DialogsFilter = ({dialogs, messages, getAllMessageDialogsThunkCreator, getDialogsThunkCreator}) => {
    const [inputValue, setValue] = useState('');
    const [filtred, setFiltredItems] = useState( Array.from(dialogs));
    const onChangeInputSearch = (e) => {
        const value = e.target.value;
        setFiltredItems(dialogs.filter(dialog => dialog.user.fullname.toLowerCase().indexOf(value.toLowerCase()) >= 0));
        setValue(value);
    };
    useEffect(() => {
        if (!dialogs.length) getDialogsThunkCreator();
        setFiltredItems(dialogs);
    }, [dialogs]);
    return (
        <Dialogs dialogs={filtred}
                 messages={messages}
                 onSearch={onChangeInputSearch}
                 inputValue={inputValue}
                 getAllMessageDialogsThunkCreator={getAllMessageDialogsThunkCreator} />
    );
};

export default DialogsFilter;
