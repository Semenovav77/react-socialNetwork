import React, {useState} from 'react';
import Dialogs from './../Dialogs'

import './DialogsFilter.scss'

const DialogsFilter = ({items}) => {
    const [inputValue, setValue] = useState('');
    const [filtred, setFiltredItems] = useState( Array.from(items));
    const onChangeInputSearch = (e) => {
        const value = e.target.value;
        setFiltredItems(items.filter(dialog => dialog.user.fullname.toLowerCase().indexOf(value.toLowerCase()) >= 0));
        setValue(value);
    };

    return (
        <Dialogs items={filtred} onSearch={onChangeInputSearch} inputValue={inputValue} />
    );
};

export default DialogsFilter;
