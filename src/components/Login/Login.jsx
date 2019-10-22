import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormValid/FormValid";
import {required} from "../../helpers/validations";
import {connect} from "react-redux";
import {loginThunkCreator} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";

const LoginForm = (props) => {
    debugger;
    return (
            <form onSubmit={props.handleSubmit}>
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
                    <Field  component={Input} name={'rememberme'} type={'checkbox'} /> rememder me
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
    )
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.loginThunkCreator(formData.email, formData.password, formData.rememberme,)
    };

    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }

    return (
    <div>
       <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>)
};

const mapStateToProps = (state) => {
    return (
        {
            isAuth: state.auth.isAuth
        }
    )

};

export default connect (mapStateToProps, {loginThunkCreator}) (Login);