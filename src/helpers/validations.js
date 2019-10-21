export const required =  value => {
    if (value) return undefined;
    return 'Field id required';
};

export const maxLengthCreator = (MaxLength) => (value) => {
    if (value && value.length > MaxLength) return `Max length = ${MaxLength} symbols`;
    return undefined;
};