import React from "react";
import {required} from "../../../helpers/validations";
import {Input,Textarea} from "../../common/FormValid/FormValid";
import {Field, reduxForm} from "redux-form";
import s from './Profileinfo.module.css';

const ProfileDataForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><button>Save</button></div>
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
                <br />
                <b>Contacts:</b> {Object.keys(props.profile.contacts).map(key => {
                return <div className={s.contacts}>
                <b>{key}:</b> <Field placeholder={key}
                                    name={'contacts.'+key}
                                    component={Input}/>
                </div>
            })}
            </div>
        </form>
    )
};
const ProfileDataFormReduxForm = reduxForm({form: 'pfofile-edit'})(ProfileDataForm);
export default ProfileDataFormReduxForm;