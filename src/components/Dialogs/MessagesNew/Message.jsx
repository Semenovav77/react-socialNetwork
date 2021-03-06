import React, {useState, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import checkedImg from '../../../assets/images/clipart2243667.png';
import reactStringReplace from 'react-string-replace';
import {Emoji} from 'emoji-mart';
import { Popover, Button, Icon } from 'antd';

import './Message.scss'
import Time from "../../common/Time/Time";
import waveSvg from '../../../assets/images/wave.svg';
import playSvg from '../../../assets/images/play.svg';
import pauseSvg from '../../../assets/images/pause.svg';

const convertToTime = (number) => {
    const mins = Math.floor(number / 60);
    const secs = (number % 60).toFixed();
    return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
};

const MessageAudio = ({audio}) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [progress, setProgress] = useState(0);
    const audioEl = useRef(null);
    useEffect(() => {
        audioEl.current && audioEl.current.addEventListener('playing', () => {
            setIsPlaying(true);
        }, false);
        audioEl.current && audioEl.current.addEventListener('ended', () => {
            setIsPlaying(false);
            setProgress(0);
            setCurrentTime(0);
        }, false);
        audioEl.current && audioEl.current.addEventListener('pause', () => {
            setIsPlaying(false);
        }, false);
        audioEl.current && audioEl.current.addEventListener('timeupdate', () => {
            const duration = audioEl.current && audioEl.current.duration || 0;
            setCurrentTime(audioEl.current.currentTime);
            setProgress((audioEl.current.currentTime / duration) * 100);
        });
    }, [audio]);
    const tooglePlay = () => {
        if (!isPlaying) {
            audioEl.current.play()
        } else {
            audioEl.current.pause()
        }
        audioEl.current.volume = '0.1';
    };
    return (
        <div className='message__audio'>
            <audio volume='0.1' ref={audioEl} src={audio} preload="auto"/>
            <div className='message__audio-progress' style={{width: progress + "%"}}/>
            <div className='message__audio-info'>
                <div className='message__audio-btn'>
                    <button onClick={tooglePlay}>
                        {isPlaying ?
                            <img src={pauseSvg} alt='Pause svg'/> : <img src={playSvg} alt='Pause svg'/>}
                    </button>
                </div>
                <div className='message__audio-wave'><img src={waveSvg} alt={'wave'}/></div>
                <span className='message__audio-duration'>
                 {audioEl.current ? convertToTime(currentTime) : convertToTime(0)}
             </span>
            </div>
        </div>
    )
};

const Message = ({body, date, isMe, audio, deleteMessageThunkCreator, id, currentDialog}) => {
    return (
        <div className={classNames('message', {'message--isme': isMe, 'message--is-audio': audio})}>
            <Popover
                content={
                    <div>
                        <Button onClick={()=> {deleteMessageThunkCreator(id, currentDialog)}} type="link" shape="circle" icon="delete" >Удалить сообщение</Button>
                    </div>
                }
                trigger="click">
                <div className="message__icon-actions">
                    <Button type="link" shape="circle" icon="ellipsis" />
                </div>
            </Popover>
            <div className='message__avatar'>
                {/*<img src={user.avatar} alt={`Avatar ${user.fullname}`}/>*/}
            </div>
            <div className='message__content'>
                <div className='message__bubble'>
                    {body && <p className='message__text'> {reactStringReplace(body, /:(.+?):/g, (match, i) => (
                        <Emoji emoji={match} set='apple' size={16} />
                    ))} </p>}
                    {audio && <MessageAudio audio={audio}/>}
                </div>
                <span className='message__date'>
                    <Time date={date}/>
                </span>
            </div>
        </div>
    )
};


Message.defaultProps = {
    user: {}
};

Message.propTypes = {
    avatar: PropTypes.string,
    text: PropTypes.string,
    date: PropTypes.string,
    isMe: PropTypes.bool,
    user: PropTypes.object,
    audio: PropTypes.string
};

export default Message;