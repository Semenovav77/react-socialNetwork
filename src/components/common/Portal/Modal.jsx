import React, {useEffect} from 'react';

import './Modal.scss';
import Portal from "./Portal";
import {Button as BaseButton} from "antd";

const Modal = ({title, isImg = false, isOpen, onCancel, onSubmit, children}) => {
    useEffect(() => {
        if (isOpen) {
            window.scrollTo(0, 200)
        }
    });
    return (
        <Portal>
            <>
                {isOpen &&
                <div className='modal-wrap__window'>
                    <div className='modal-wrap__window-header'>
                        <span>{title}</span>
                        <p onClick={onCancel}>x</p>
                    </div>
                    <div className='modal-wrap__window-body'>
                        {children}
                    </div>
                    {!isImg &&
                    <div className='modal-wrap__window-footer'>
                        <BaseButton type="primary" onClick={onSubmit}>Submit</BaseButton>
                        <BaseButton type="danger" onClick={onCancel}>Cancel</BaseButton>
                    </div>
                    }

                </div>
                }
            </>

        </Portal>
    )


};


export default Modal;