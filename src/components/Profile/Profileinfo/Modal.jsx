import React from 'react';
import Portal from "../../common/Portal/Portal";
import {Button as BaseButton} from "antd";

const Modal = ({title, isOpen, onCancel, onSubmit, children}) => {
    return (
        <Portal>
            <>
                {isOpen &&
                <div className='modal'>
                    <div className='modal__window'>
                        <div className='modal__window-header'>
                            <span>{title}</span>
                            <p onClick={onCancel}>x</p>
                        </div>
                        <div className='modal__window-body'>
                            {children}
                        </div>
                        <div className='modal__window-header'>
                            <BaseButton type="primary" onClick={onSubmit}>Submit</BaseButton>
                            <BaseButton type="danger" onClick={onCancel}>Cancel</BaseButton>
                        </div>
                    </div>
                </div>
                }
            </>

        </Portal>
    )


};


export default Modal;