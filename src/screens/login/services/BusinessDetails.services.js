import * as Yup from 'yup'

export const defaultValue = {
    reason : '',
    address : ''
}

export const schema =  Yup.object().shape({
    reason: Yup.string().required().min(3).max(500),
    address: Yup.string().required().min(3).max(500),
});

export const handleSubmit = (values, navigation) => {
    navigation.navigate("EnAttent")
}