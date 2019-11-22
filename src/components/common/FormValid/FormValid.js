import React from "react";
import s from "./FormValid.module.css";
import {Input as BaseInput} from 'antd';
import { Checkbox as BaseCheckbox } from 'antd';

export const FormValid = ({input, meta, children, ...props}) => {
    return (
        <div className={s.formControl + ' ' + (meta.touched && meta.error ? s.error : '')}>
            <div>
                {children}
            </div>
            {meta.touched && meta.error && <span>{meta.error}</span>}
        </div>
    )
};
export const Textarea = (props) => {
    const {input, meta, ...restProps} = props;
    return (
       <FormValid {...props}> <textarea {...input} {...restProps}/> </FormValid>
    )
};

export const Input = (props) => {

    const {input, meta, ...restProps} = props;
    return (
        <FormValid {...props}> <BaseInput {...input} {...restProps}/> </FormValid>
    )
};

export const Checkbox = (props) => {

    const {input, meta, ...restProps} = props;
    return (
        <FormValid {...props}> <BaseCheckbox {...input} {...restProps}/> </FormValid>
    )
};