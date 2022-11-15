import * as Yup from 'yup';
import i18n from 'i18next';


export const defaultValue = {
    email: 'test@gg.com',
    password: 'tetetetetette'
};
export const schema = Yup.object().shape({
    email: Yup.string()
        .required(i18n.t("calidation_errors.login.emailRequired"))
        .email(i18n.t("calidation_errors.login.emailFormat")),
    password: Yup.string()
        .required(i18n.t("calidation_errors.login.passwordRequired"))
        .min(6, i18n.t("calidation_errors.login.passwordFormat"))
});
export const handleAuth  = (values, navigation, setErrors) => {
    navigation.navigate("Home");
}