import React, {useState, useEffect} from 'react';
import Profile from "../Profile";
import {string} from "prop-types";
/*let arr = [0, () => {}];
let [a, setA] = arr;*/

interface ProfileStatusProps {
    isOwner: boolean
    status: string
    updateUserStatusThunkCreator(status: string): void
}

const ProfileStatusWithHooks: React.FC<ProfileStatusProps> = ({status, updateUserStatusThunkCreator, isOwner}) => {
   // let stateWithSetState = useState(false);
    let [editSwitch, setEditSwitch] = useState<boolean> (false);
    let [valueStatus, setStatus] = useState<string> (status);
    useEffect(() => {
        const savedEditSwitch = JSON.parse(localStorage.getItem('editSwitch') || 'false') as boolean;
        if (savedEditSwitch) {setEditSwitch(savedEditSwitch)}
        setStatus(status);
    }, [status]);
    useEffect(() => {
        localStorage.setItem('editSwitch', JSON.stringify(false))
    }, []);

    const changeStatus = () => {
        isOwner && setEditSwitch(true);
        isOwner && localStorage.setItem('editSwitch', JSON.stringify(true))
    };
    const saveStatus = () => {
        setEditSwitch(false);
        localStorage.setItem('editSwitch', JSON.stringify(false))
        updateUserStatusThunkCreator(valueStatus);
    };
    const saveStatusOnKey = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            setEditSwitch(false);
            localStorage.setItem('editSwitch', JSON.stringify(false))
            updateUserStatusThunkCreator(valueStatus);
        }
    };
    const onStatusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            setStatus(event.currentTarget.value);
    };
   //window.localSt = [valueStatus, setStatus];
    return (
        <div className='profile__info-user-status-block-value'>
            {!editSwitch &&
                <span onDoubleClick={changeStatus}>{status || '---'}</span>
            }
            {editSwitch &&
                <input onChange={onStatusChange} autoFocus={true}
                       onBlur={saveStatus} onKeyPress={saveStatusOnKey} value={valueStatus}></input>
            }
        </div>
    )

}

export default ProfileStatusWithHooks;