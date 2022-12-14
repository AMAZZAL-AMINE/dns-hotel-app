import * as Yup from 'yup';

export const defaultValue = {
    name: '',
    lastName : '',
    phone : '',
    email: '',
    password: '',
};

export const schema = Yup.object().shape({
    name: Yup.string()
        .required("Veuillez entrer votre nom personnel")
        .min(3, "Votre nom personnel doit contenir au moins 3 caractères")
        .max(30, "Votre nom personnel ne doit pas dépasser 30 caractères"),
    lastName : Yup.string()
        .required("Veuillez entrer votre Nom de famille")
        .min(3, "Votre Nom de famille doit contenir au moins 3 caractères")
        .max(30, "Votre Nom de famille ne doit pas dépasser 30 caractères"),
    phone : Yup.number("Le numéro de téléphone doit contenir des chiffres")
        .required("Le numéro de téléphone est requis"),
    email: Yup.string()
        .email("L'e-mail que vous avez entré est incorrect")
        .required("L'email est obligatoire Veuillez le saisir"),
    password: Yup.string()
        .required("Le mot de passe est obligatoire Veuillez le saisir")
        .min(6, "Le mot de passe doit contenir au moins 6 caractères")
        .max(55, "Le mot de passe  ne doit pas dépasser 50 caractères"),
});

export const handleSubmit =  (values, navigation) => {
    navigation.navigate("BusinessDetails")
}

