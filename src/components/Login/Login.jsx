import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormValid/FormValid";
import {required} from "../../helpers/validations";
import {connect} from "react-redux";
import {getCaptchaURL, loginThunkCreator} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import s from './../common/FormValid/FormValid.module.css';
import Button from '../common/Button/Button'
import Block from "../common/Block/Block";
import './Login.scss'

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Block>
                <div>
                    <Field placeholder={'Email'} name={'email'}
                           validate={[required]}
                           component={Input}/>
                </div>
                <div>
                    <Field placeholder={'Password'} name={'password'}
                           type={'password'}
                           validate={[required]}
                           component={Input}/>
                </div>
                <div>
                    <Field component={Input} name={'rememberme'} type={'checkbox'}/> rememder me
                </div>
                {props.captchaURL && <img src={props.captchaURL}/>}
                {props.captchaURL && <div>Введите символы<Field name={'captcha'}
                                                                validate={[required]}
                                                                component={Input}/></div>}

                {props.error && <div className={s.formSummaryError}>
                    {props.error}
                </div>
                }
                <div>
                    <Button type='primary' htmlType='submit' size='large'>Login</Button>
                </div>
            </Block>
        </form>
    )
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.loginThunkCreator(formData.email, formData.password, formData.rememberme, formData.captcha)
        props.getCaptchaURL(null);
    };

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <section className='auth'>
            <div className='auth__content'>
                <div className='auth__top'>
                    <h2>Войти в аккаунт</h2>
                    <p>Пожалуйтса, войдите в свой аккаунт</p>
                </div>
                <LoginReduxForm onSubmit={onSubmit} captchaURL={props.captchaURL}/>
            </div>
        </section>)

}
;

const mapStateToProps = (state) => {
    return (
        {
            isAuth: state.auth.isAuth,
            captchaURL: state.auth.captchaURL
        }
    )

};

export default connect(mapStateToProps, {loginThunkCreator, getCaptchaURL})(Login);