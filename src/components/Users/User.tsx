import React, {useRef, useState} from 'react';
import s from './users.module.css';
import {Button as BaseButton} from 'antd';
import {NavLink} from "react-router-dom";

import userPhoto from '../../assets/images/ava.jpg';
import {UserType} from "../../types/types";
import Modal from "../common/Portal/Modal";

type PropsType = {
    isAuth: boolean
    user: UserType
    followingProgress: Array<number>
    unfollowThunkCreator(id: number): void
    followThunkCreator(id: number): void
    addDialogThunkCreator(id: number): void
}

let User: React.FC<PropsType> = ({isAuth, followingProgress, user, unfollowThunkCreator, followThunkCreator, addDialogThunkCreator}) => {
    const [editPhotoModal, setPhotoModal] = useState(false);
    return (<div className='users__item-info'>
                <div>
                    <div>
                            <img className={'users__item-info-photo'}  onClick={() => {setPhotoModal(true)}}
                                 src={user.photos.small != null ? user.photos.small : userPhoto}
                                />
                    </div>
                    <div>
                        {isAuth &&
                        (user.followed
                                ?
                                <BaseButton type="danger" htmlType='submit'
                                            disabled={followingProgress.some(id => id === user.id)}
                                            onClick={() => {
                                                unfollowThunkCreator(user.id);
                                            }}>Unfollow</BaseButton>
                                :
                                <BaseButton type='primary' htmlType='submit'
                                            disabled={followingProgress.some(id => id === user.id)}
                                            onClick={() => {
                                                followThunkCreator(user.id);
                                            }}>Follow</BaseButton>
                            )
                        }

                    </div>
                </div>
                <span>
                        <span>
                            <NavLink to={'/profile/' + user.id}>
                                <div>{user.name}</div>
                            </NavLink>
                            <div>{user.status} </div>
                             <NavLink to={'/dialogs/' + user.id}>
                            {isAuth && <div className={'users__item-info-addDialog'} onClick={() => addDialogThunkCreator(user.id)}>Начать диалог</div>}
                            </NavLink>
                        </span>
                </span>
            <Modal title={user.name} isImg={true} isOpen={editPhotoModal} onCancel={() => {setPhotoModal(false)}} onSubmit={() => {console.log('1')}}>
                <img onClick={() => {setPhotoModal(true)}} src={user.photos.small != null ? user.photos.large : userPhoto} className={s.userPhoto}/>
            </Modal>
            </div>
    );

}

export default User;