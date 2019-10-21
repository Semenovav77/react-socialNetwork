import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormValid/FormValid";
import {required} from "../../helpers/validations";

const LoginForm = (props) => {
    debugger;
    return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={'Login'} name={'login'}
                           validate={[required]}
                           component={Input}/>
                </div>
                <div>
                    <Field placeholder={'Password'} name={'Password'}
                           validate={[required]}
                           component={Input}/>
                </div>
                <div>
                    <Field  component={Input} name={'rememberMe'} type={'checkbox'} /> rememder me
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
        console.log(formData)
    }

    return (
    <div>
       <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>)
};


export default Login;