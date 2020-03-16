import React from "react";
import s from "./FormValid.module.css";
import {Input as BaseInput} from 'antd';
import { Checkbox as BaseCheckbox } from 'antd';
import {WrappedFieldMetaProps, WrappedFieldProps} from "redux-form";
/*const {TeaxtArea} = BaseInput;*/

type FormValidPropsType = {
    meta: WrappedFieldMetaProps
}

const FormValid: React.FC<FormValidPropsType> = ({meta:{touched, error}, children}) => {
    return (
        <div className={s.formControl + ' ' + ((touched && error) ? s.error : '')}>
            <div>
                {children}
            </div>
            {(touched && error) && <span>{error}</span>}
        </div>
    )
};
export const Textarea: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props;
    return (
       <FormValid {...props}> <textarea {...input} {...restProps}/> </FormValid>
    )
};

export const Input: React.FC<WrappedFieldProps> = (props) => {

    const {input, meta, ...restProps} = props;
    return (
        <FormValid {...props}> <BaseInput {...input} {...restProps}/> </FormValid>
    )
};

export const Checkbox: React.FC<WrappedFieldProps> = (props) => {

    const {input, meta, ...restProps} = props;
    return (
        <FormValid {...props}> <BaseCheckbox {...input} {...restProps}/> </FormValid>
    )
};