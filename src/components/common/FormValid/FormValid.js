import React from "react";
import s from "./FormValid.module.css";

export const Textarea = ({input, meta, ...props}) => {
    return (
        <div className={s.formControl + ' ' + (meta.touched && meta.error ? s.error : '')}>
            <div>
                <textarea {...input} {...props}/>
            </div>
            {meta.touched && meta.error && <span>{meta.error}</span>}
        </div>
    )
};

export const Input = ({input, meta, ...props}) => {
    return (
        <div className={s.formControl + ' ' + (meta.touched && meta.error ? s.error : '')}>
            <div>
                <input {...input} {...props}/>
            </div>
            {meta.touched && meta.error && <span>{meta.error}</span>}
        </div>
    )
}