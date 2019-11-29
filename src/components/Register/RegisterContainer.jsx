import {withFormik} from 'formik';
import Register from "./Register";
import {validateFormik} from "../../helpers/validations";

const RegisterContainer = withFormik({
    mapPropsToValues: () => ({email: '', name: '', password: ''}),
    validate: values => {
        let errors = {};
        const keys = Object.keys(values);
        keys.forEach(key => validateFormik[key] && validateFormik[key](errors, values[key]));
        return errors;
    },

    handleSubmit: (values, { setSubmitting }) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 1000);
    },

    displayName: 'Register', // helps with React DevTools
})(Register);
export default RegisterContainer;