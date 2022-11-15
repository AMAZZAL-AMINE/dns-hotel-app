import * as Yup from 'yup';

export const defaultValue = {
    name : "",
    email : "",
    phone : "",
    cin : "",
    city : "",
    address : "",
    // berthday 
    birthDay : "",
    birthMonth : "",
    birthYear : "",
    // password
    password : "",
    newPassword : "",
    confirmPassword : ""
}

export const schema = Yup.object().shape({
    name : Yup.string().required().min(3),
    email : Yup.string().email().required(),
    phone : Yup.number().required(),
    cin : Yup.string().required(),
    city : Yup.string().required(),
    address : Yup.string().required(),
    birthDay : Yup.number().required(),
    birthMonth : Yup.number().required(),
    birthYear  : Yup.number().required(),
    password : Yup.string().required(),
    newPassword: Yup.string().required("Please enter your password.")
    .min(8, "Your password is too short."),
    confirmPassword: Yup.string()
    .required("Please retype your password.")
    .oneOf([Yup.ref("newPassword")], "Your passwords do not match."),
});

export const handleSubmit = (values) => {
   alert(JSON.stringify(values))
}