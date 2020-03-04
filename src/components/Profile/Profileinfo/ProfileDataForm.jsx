import React, {useState} from "react";
import {Field, reduxForm} from "redux-form";
import {Button as BaseButton} from 'antd';
import Button from "../../common/Button/Button";

import {required} from "../../../helpers/validations";
import {Input, Textarea} from "../../common/FormValid/FormValid";
import s from './Profileinfo.module.css';
import Modal from '../../common/Portal/Modal'

const ProfileDataForm = ({profile, error, handleSubmit, goToEditSwitch}) => {
    const [editModal, setModalEdit] = useState(false);
    const onSubmit = (e) => {
        e.preventDefault();
        setModalEdit(true)
    };
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <BaseButton htmlType='submit' type="primary" onClick={onSubmit}>Save</BaseButton>
                <BaseButton type="danger" onClick={goToEditSwitch}>Cancel</BaseButton>
            </div>
            <div>
                <b>Fullname:</b><Field placeholder={'Fullname'} name={'fullName'}
                                       validate={[required]}
                                       component={Input}/>
            </div>
            <div>
                <b>Looking for a job:</b><Field type={'checkbox'}
                                                name={'lookingForAJob'}
                                                component={Input}/>
            </div>
            <div>
                <b>My prof skills:</b><Field placeholder={'skills'} name={'lookingForAJobDescription'}
                                             validate={[required]}
                                             component={Textarea}/>
            </div>
            <div>
                <b>About me:</b><Field placeholder={'about me'} name={'aboutMe'}
                                       validate={[required]}
                                       component={Textarea}/>
            </div>
            <div>
                <br/>
                <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
                return <div className={s.contacts}>
                    <b>{key}:</b> <Field placeholder={key}
                                         name={'contacts.' + key}
                                         component={Input}/>
                </div>
            })}
            </div>
            {error &&
            <div className={s.formSummaryError}>
                {error}
            </div>}
            <Modal title={''} isOpen={editModal} onCancel={() => {setModalEdit(false)}} onSubmit={handleSubmit}>  Вы уверены, что хотите сохранить? </Modal>
        </form>
    )
};
const ProfileDataFormReduxForm = reduxForm({form: 'pfofile-edit'})(ProfileDataForm);
export default ProfileDataFormReduxForm;