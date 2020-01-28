import React, {useState} from 'react';

import './InputChat.scss'
import {Icon, Input, Button} from "antd";

const InputChat = (props) => {
    const [value, setValue] = useState('');
    const changeValue = (e) => {
        setValue(e.target.value);
    };
    return (
        <div className="chat__current-dialog-input">
            <div className="chat__current-dialog-input-smile">
                <Button type="ghost" shape="circle" icon='smile'/>
            </div>
            <div className="chat__current-dialog-input-text">
                <Input size="large" onChange={changeValue} placeholder="Введите текст сообщения" />
            </div>
            <div className="chat__current-dialog-input-actions">
                {!value ?  <Button type="ghost" shape="circle" icon='audio'/>
                :
                    <Button type="ghost" shape="circle" icon='check'/>}
            </div>

        </div>
    );
};

export default InputChat;
