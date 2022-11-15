import * as yup from 'yup';

export const defaultValue = {
    desc : "",
    qty : "",
    price : "",
    address : "",
    city : ""
}

export const schema = yup.object().shape({
   desc : yup.string().min(10),
   qty : yup.number().required(),
   price : yup.number(),
   address : yup.string().required(),
   city : yup.string().required()
});

export const handleSubmit = (values, navigation) => {
    navigation.navigate("DeclarationSuccess");
}