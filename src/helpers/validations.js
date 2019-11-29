export const required =  value => {
    if (value) return undefined;
    return 'Field id required';
};

export const maxLengthCreator = (MaxLength) => (value) => {
    if (value && value.length > MaxLength) return `Max length = ${MaxLength} symbols`;
    return undefined;
};

export const validateFormik =  {
    email: (errors, value) => {
        debugger;
        if (!value) {
            errors.email = 'Введите email';
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
                value
            )
        ) {
            errors.email = 'Неправильно введен email';
        };
    },
    name: (errors, value) => {
        if (!value) {
            errors.name = 'Введите имя';
        };
    },
    password: (errors, value) => {
        if (!value) {
            errors.password = 'Введите пароль';
        } else if (!/^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])(?=.{6,})/.test(
            value
        )
        ) {
            errors.password = 'Слишком легкий пароль';
        };
    },

}