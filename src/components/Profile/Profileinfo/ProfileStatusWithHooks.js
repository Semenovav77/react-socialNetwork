import React, {useState, useEffect} from 'react';
import s from './Profileinfo.module.css';
import Profile from "../Profile";
/*let arr = [0, () => {}];
let [a, setA] = arr;*/

const ProfileStatusWithHooks = (props) => {
   // let stateWithSetState = useState(false);
    let [editSwitch, setEditSwitch] = useState(false);
    let [status, setStatus] = useState(props.status);
    useEffect(() => {
        //debugger;
        setStatus(props.status)
    }, [props.status]);

    const changeStatus = () => {
        setEditSwitch(true);
    };
    const saveStatus = () => {
        setEditSwitch(false);
        props.updateUserStatusThunkCreator(status);
    };
    const onStatusChange = (event) => {
            setStatus(event.currentTarget.value);
    };
   window.localSt = [status, setStatus];
    return (
        <div>
            {!editSwitch &&
            <div>
                <span onDoubleClick={changeStatus}>{props.status || '---'}</span>
            </div>
            }
            {editSwitch &&
            <div>
                <input onChange={onStatusChange} autoFocus={true} onBlur={saveStatus} value={status}></input>
            </div>
            }
        </div>
    )

}

export default ProfileStatusWithHooks;