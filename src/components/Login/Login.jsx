import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Checkbox, Input} from "../common/FormValid/FormValid";
import {required} from "../../helpers/validations";
import {connect} from "react-redux";
import {getCaptchaURL, loginThunkCreator} from "../../redux/auth-reducer";
import {NavLink, Redirect} from "react-router-dom";
import s from './../common/FormValid/FormValid.module.css';
import Button from '../common/Button/Button';
import Block from "../common/Block/Block";
import './Login.scss'
import {Icon} from 'antd';



const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Block>
                <div className='email'>
                    <Field placeholder={'Email'} name={'email'}
                           validate={[required]}
                           prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                           component={Input}/>
                </div>
                <div className='passwd'>
                    <Field placeholder={'Password'} name={'password'}
                           type={'password'}
                           validate={[required]}
                           prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                           component={Input}/>
                </div>
                <div className='chkbox'>
                    <Field component={Checkbox} name={'rememberme'}/>
                    <span className="chkbox__text">remember me </span>
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
                    <Button type='primary' htmlType='submit' size='large'>Войти в аккаунт</Button>
                </div>
                <div className={'auth__register-link'}>
                    <NavLink to="/register"> Зарегистрироваться</NavLink>
                </div>
            </Block>
        </form>
    )
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
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
                    <p>Пожалуйcта, войдите в свой аккаунт</p>
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