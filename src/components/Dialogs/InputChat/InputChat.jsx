import React, {useState, useRef, useEffect} from 'react';
import {Icon, Input, Button} from "antd";
import {Picker} from 'emoji-mart';

import './InputChat.scss'

const {TextArea} = Input;
const InputChat = (props) => {
    const handleClick = (element, e) => {
        if (element && !element.contains(e.target)) {
            setVisibleEmoji(false);
        }
    };

    useEffect(() => {
        const element = document.querySelector('.chat__current-dialog-input-smile');
        document.addEventListener("click", handleClick.bind(this,element));

        return () => {
            document.removeEventListener("click", handleClick.bind(this,element));
        };
    },[]);
    const [value, setValue] = useState('');
    const [emojiVisible, setVisibleEmoji] = useState(false);
    const toogleEmoji = () => {
        if (emojiVisible == false) {
            setVisibleEmoji(true)
        } else {
            setVisibleEmoji(false)
        }
    };
    const changeValue = (e) => {
        setValue(e.target.value);
    };
    const documents = useRef(null);
    const uploadDocuments = () => {
        documents.current.click();
    };


    const PhotoSelect = (e) => {
        if (e.target.files.length) {
            for (let i = 0; i < e.target.files.length; i++) {
                console.log(e.target.files[i])
            }
        }
    };
    const addEmojiInput = ({colons}) => {
        setValue((value + ' ' + colons).trim());
    };
    return (
        <div className="chat__current-dialog-input">
            <div className="chat__current-dialog-input-smile">
                <div className="chat__current-dialog-input-emoji-picker">
                    {(emojiVisible === true) && <Picker set='apple' onSelect={addEmojiInput}/>}
                </div>
                <Button type="ghost" onClick={toogleEmoji} shape="circle" icon='smile'/>

            </div>
            <div className="chat__current-dialog-input-text">
                <TextArea size="large"
                          onChange={changeValue}
                          onKeyUp={()=> {alert(value)}}
                          placeholder="Введите текст сообщения"
                          value={value}
                          autoSize={{ minRows: 1, maxRows: 5 }}/>
            </div>
            <div className="chat__current-dialog-input-actions">
                <input ref={documents} type="file" onChange={PhotoSelect} multiple hidden/>
                <Button type="ghost" onClick={uploadDocuments} shape="circle" icon='camera'/>
                {!value ? <Button type="ghost" shape="circle" icon='audio'/>
                    :
                    <Button type="ghost" shape="circle" icon='check'/>}
            </div>

        </div>
    );
};

export default InputChat;
