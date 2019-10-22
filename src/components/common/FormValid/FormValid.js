import React from "react";
import s from "./FormValid.module.css";

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
        <FormValid {...props}> <input {...input} {...restProps}/> </FormValid>
    )
};