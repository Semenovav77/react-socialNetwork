import React, {useState, useEffect, useRef} from 'react';
import {Icon, Input, Button} from "antd";
import {Emoji, Picker} from 'emoji-mart';

import './InputChat.scss'
import reactStringReplace from "react-string-replace";
import ContentEditable from "./ContentEditable";

const {TextArea} = Input;
const InputChat = ({currentDialog, sendMessageThunkCreator}) => {
    const [value, setValue] = useState('');
    const [emojiVisible, setVisibleEmoji] = useState(false);
    const [editModeState, setEditModeState] = useState(false);
    const cellRef = useRef(null);
    const onCl = () => {
        setEditModeState(true);
        cellRef.current.focus();
    };

    useEffect(() => {
        if (editModeState) cellRef.current.focus();
    }, [editModeState]);

    useEffect(() => {
        setValue(value)
        }, [value]);

    const handleClick = (element, e) => {
        if (element && !element.contains(e.target)) {
            setVisibleEmoji(false);
        }
    };
    useEffect(() => {
        const element = document.querySelector('.chat__current-dialog-input-smile');
        document.addEventListener("click", handleClick.bind(this, element));

        return () => {
            document.removeEventListener("click", handleClick.bind(this, element));
        };
    }, []);

    const toogleEmoji = () => {
        if (emojiVisible == false) {
            setVisibleEmoji(true);
        } else {
            setVisibleEmoji(false);
        }
    };
    const changeValue = (e) => {
        setValue(e.target.innerText);
       /* cellRef.current.focus()*/
    };

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const documents = useRef(null);

    const uploadDocuments = () => {
        documents.current.click();
    };

    const PhotoSelect = (e) => {
        if (e.target.files.length) {
            for (let i = 0; i < e.target.files.length; i++) {
               /* console.log(e.target.files[i])*/
            }
        }
    };

    const addEmojiInput = (emoji) => {
        setValue(value + ' ' + emoji.colons);
    };

    const sendMessage = (currentDialog, value) => {
        sendMessageThunkCreator(currentDialog, value);
        setValue('');
        cellRef.current.textContent = '';
    };

    const sendMessageOnKey = (e, currentDialog, value) => {
        if (e.key === 'Enter') {
            sendMessage(currentDialog, value);
        }
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
                <ContentEditable contentEditable={editModeState} currentDialog={currentDialog}
                                 refS={cellRef} onInput={changeValue} onCl={onCl} value={value} sendMessageOnKey={sendMessageOnKey}/>
                {/*<div className="chat__current-dialog-input-add">
                    <ContentEditable
                        html={value}// innerHTML of the editable div
                        disabled={false} // use true to disable edition
                        onChange={handleChange} // handle innerHTML change
                    />
                    {reactStringReplace(value, /:(.+?):/g, (match, i) => (
                        <Emoji emoji={match} set='apple' size={16}/>))}
                </div>*/}
                {!value &&
                <div className="chat__current-dialog-input-placeholder">
                    Напишите сообщение
                </div>
                }
            </div>
            <div className="chat__current-dialog-input-actions">
                <input ref={documents} type="file" onChange={PhotoSelect} multiple hidden/>
                <Button type="ghost" onClick={uploadDocuments} shape="circle" icon='camera'/>
                {!value ? <Button type="ghost" shape="circle" icon='audio'/>
                    :
                    <Button type="ghost" shape="circle" icon='check'
                            onClick={() => {sendMessage(currentDialog, value)}}/>}
            </div>
        </div>
    );
};

export default InputChat;
