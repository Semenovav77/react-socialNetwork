import React, {useState, useEffect} from 'react';
import s from './Profileinfo.module.css';
import Profile from "../Profile";
import {string} from "prop-types";
/*let arr = [0, () => {}];
let [a, setA] = arr;*/

interface ProfileStatusProps {
    status: string
    updateUserStatusThunkCreator(status: string): void
}

const ProfileStatusWithHooks: React.FC<ProfileStatusProps> = ({status, updateUserStatusThunkCreator}) => {
   // let stateWithSetState = useState(false);
    let [editSwitch, setEditSwitch] = useState<boolean> (false);
    let [valueStatus, setStatus] = useState<string> (status);
    useEffect(() => {
        //debugger;
        setStatus(status)
    }, [status]);

    const changeStatus = () => {
        setEditSwitch(true);
    };
    const saveStatus = () => {
        setEditSwitch(false);
        updateUserStatusThunkCreator(valueStatus);
    };
    const saveStatusOnKey = (event: React.KeyboardEvent) => {
        if (event.key = 'Enter') {
            setEditSwitch(false);
            updateUserStatusThunkCreator(valueStatus);
        }
    };
    const onStatusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            setStatus(event.currentTarget.value);
    };
   //window.localSt = [valueStatus, setStatus];
    return (
        <div>
            {!editSwitch &&
            <div>
                <span onDoubleClick={changeStatus}>{status || '---'}</span>
            </div>
            }
            {editSwitch &&
            <div>
                <input onChange={onStatusChange} autoFocus={true} onBlur={saveStatus} onKeyPress={saveStatusOnKey} value={valueStatus}></input>
            </div>
            }
        </div>
    )

}

export default ProfileStatusWithHooks;