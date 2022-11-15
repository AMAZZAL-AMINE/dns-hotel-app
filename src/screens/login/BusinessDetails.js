import { View, Text, ScrollView, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import React, {useEffect, useState} from 'react'
import mapIcon from '../../assets/images/mapp.png'
import { Formik } from 'formik'
import {handleSubmit, schema, defaultValue} from './services/BusinessDetails.services'
import i18n from 'i18next'

export default function BusinessDetails({ navigation }) {
    const [rtl, setRtl] = useState(false);
    const rtlText = rtl && { textAlign: 'right',paddingLeft : 0, paddingRight: 20 };
    const errorsRtlText = rtl && { textAlign: 'right', paddingRight: 0 };
    useEffect(() => {
        if (i18n.language == "ar") {
            setRtl(true);
        } else {
            setRtl(false);
        }
    }, []);
    return (
        <Formik 
        initialValues={defaultValue}
        validationSchema={schema}
        onSubmit={(values) => handleSubmit(values, navigation)}
        >
            {(props) => (
                <View style={styles.container}>
                <ScrollView>
                    <View style={styles.contentSection}>
                        <Image
                            source={mapIcon}
                            style={styles.mapIconStyle}
                        />
                        <Text style={styles.titleContent}>
                           {i18n.t("login.company_reason_title")}
                        </Text>
                        <Text style={styles.descContent}>
                        {i18n.t("login.company_reason_desc")}
                        </Text>
                        <View style={styles.forms}>
                            <TextInput
                                style={[styles.input, rtlText]}
                                placeholder={i18n.t("login.reason_placeholder")}
                                onChangeText={props.handleChange('reason')}
                                onBlur={props.handleBlur('reason')}
                                value={props.values.reason}
                            />
                            {props.errors.reason && 
                                <Text 
                                    style={[styles.textEror, errorsRtlText ]}>
                                    {props.errors.reason}
                                </Text>
                            }
                            <TextInput
                                style={[styles.input, {marginTop : 20}, rtlText]}
                                placeholder={i18n.t("login.address_placeholder")}
                                onChangeText={props.handleChange('address')}
                                onBlur={props.handleBlur('address')}
                                value={props.values.address}
                            />
                            {props.errors.address && 
                                <Text 
                                    style={[styles.textEror, errorsRtlText]}>
                                    {props.errors.address}
                                </Text>
                            }
                        </View>
                    </View>
                </ScrollView>
                <TouchableOpacity
                    onPress={() => props.handleSubmit()}
                    style={styles.button}>
                    <Text
                        style={styles.buttonText}>
                        {i18n.t("login.company_btn")}
                    </Text>
                </TouchableOpacity>
            </View>
            )}
        </Formik>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    contentSection: {
        marginHorizontal: 20
    },
    mapIconStyle: {
        height: 114,
        width: 103.62,
        marginTop: 100,
        alignSelf: 'center'
    },
    titleContent: {
        textAlign: 'center',
        fontFamily: 'MetropoliceBold',
        fontSize: 19,
        marginTop: 30,
    },
    descContent: {
        color: "#A3A3A3",
        textAlign: 'center',
        marginTop: 14,
        fontSize: 14,
        fontFamily: 'MetropoliceLight'
    },
    forms: {
        marginTop: 80
    },
    input: {
        height: 50,
        backgroundColor: "#F8F8F8",
        
        borderRadius: 5,
        paddingLeft: 20
    },
    button: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        backgroundColor: '#53C330',
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        borderRadius: 5,
        marginBottom: 30,
        marginHorizontal: 20
    },
    buttonText: {
        color: '#fff',
        fontSize: 14,
        textAlign: 'center',
        fontWeight: '500',
        fontFamily: 'MetropoliceLight',
    },
    textEror : {
        color: 'red',
        fontSize: 12,
        marginTop: 5,
        fontFamily: 'MetropoliceLight',
        fontWeight: '400',
        lineHeight: 12,
        letterSpacing: 0.5,
    }
});