import React from 'react';
import {Redirect} from "react-router-dom";
import './Register.scss'
import {Button as BaseButton, Form, Icon, Input as BaseInput} from 'antd';

const Register = (props) => {
        const {
            values,
            touched,
            errors,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset,
            dirty,
        } = props;
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    debugger;
    return (
        <section className='auth'>
            <div className='auth__content'>
                <div className='auth__top'>
                    <h2>Регистрация</h2>
                    <p>Пожалуйcта, зарегистрируйтесь</p>
                </div>
                <Form onSubmit={handleSubmit} className="login-form">
                    <Form.Item validateStatus={!touched.email ? '' : errors.email && touched.email ? 'error':'success'}
                               hasFeedback
                               help={!touched.email ? '' : errors.email}
                    >
                        <BaseInput
                            id='email'
                            prefix={<Icon type="mail" style={{color: 'rgba(0,0,0,.25)'}}/>}
                            placeholder="E-Mail"
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </Form.Item>
                    <Form.Item validateStatus={ !touched.name ? '' : errors.name && touched.name ? 'error':'success'}
                               hasFeedback
                               help={!touched.name ? '' : errors.name}
                    >
                        <BaseInput
                            id='name'
                            prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                            type='text'
                            placeholder="Ваше имя"
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </Form.Item>
                    <Form.Item validateStatus={ !touched.password ? '' : errors.password && touched.password ? 'error':'success'}
                               hasFeedback
                               help={!touched.password ? '' : errors.password}
                    >
                        <BaseInput
                            id='password'
                            prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                            type="password"
                            placeholder="Введите пароль"
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </Form.Item>
                    <Form.Item>
                        <BaseInput
                            id='password'
                            prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                            type="password"
                            placeholder="Повторите пароль"
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </Form.Item>
                    <Form.Item>
                        <BaseButton type="primary" htmlType="submit" className="login-form-button">
                            Зарегистрироваться
                        </BaseButton>
                    </Form.Item>
                </Form>
            </div>
        </section>)

}
;

/*
const mapStateToProps = (state) => {
    return (
        {
            isAuth: state.auth.isAuth,
            captchaURL: state.auth.captchaURL
        }
    )

};

export default connect(mapStateToProps, {loginThunkCreator, getCaptchaURL})(Register);*/

export default Register;