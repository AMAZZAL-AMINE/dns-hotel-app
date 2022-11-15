
import { View, Text, StyleSheet, TextInput, Image, ScrollView } from 'react-native'
import React from 'react'
import { Formik } from 'formik';
import smsIcon from '../../assets/images/sms.png';

export default function VerificationUser({ navigation }) {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.contentSection}>
                    <View style={styles.imgContainer}>
                        <Image
                            source={smsIcon}
                            style={styles.Img}
                        />
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.bigText}>Vérification</Text>
                        <Text style={styles.smallText}>
                            Veuillez entrer le code de vérification envoyé à
                        </Text>
                        <Text style={styles.phoneText}>aberdaze.hassan@gmail.com</Text>
                    </View>
                    <Formik
                        initialValues={{ code: '' }}
                        onSubmit={(values, { setSubmitting }) => { setSubmitting(false); }}
                    >
                        {(props) => (
                            <View>
                                <View style={styles.inputsContainer}>
                                    <View style={styles.inputsStyle}>
                                        <TextInput
                                            style={styles.input}
                                            keyboardType="numeric"
                                            placeholder="*"
                                            onChangeText={props.handleChange("n1")}
                                            value={props.values.n1}
                                            onBlur={props.handleBlur("n1")}
                                            maxLength={1}
                                        />
                                        <TextInput
                                            style={styles.input}
                                            keyboardType="numeric"
                                            placeholder="*"
                                            onChangeText={props.handleChange("n2")}
                                            value={props.values.n2}
                                            onBlur={props.handleBlur("n2")}
                                            maxLength={1}
                                        />
                                        <TextInput
                                            style={styles.input}
                                            keyboardType="numeric"
                                            placeholder="*"
                                            onChangeText={props.handleChange("n3")}
                                            value={props.values.n3}
                                            onBlur={props.handleBlur("n3")}
                                            maxLength={1}
                                        />
                                        <TextInput
                                            style={styles.input}
                                            keyboardType="numeric"
                                            placeholder="*"
                                            onChangeText={props.handleChange("n4")}
                                            value={props.values.n4}
                                            onBlur={props.handleBlur("n4")}
                                            maxLength={1}
                                        />
                                    </View>
                                    <Text style={styles.TextInput}>
                                        Je n'ai pas reçu de code. <Text style={styles.revoy}>Renvoyer le code</Text>
                                    </Text>
                                </View>
                            </View>
                        )}
                    </Formik>
                </View>
            </ScrollView>
            <View style={styles.buttonContainer}>
                <Text
                    onPress={() => navigation.navigate('EnAttent')}
                    style={styles.button}>
                    Vérifier
                </Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    Img: {
        width: 120,
        height: 160,
        resizeMode: "contain",
    },
    contentSection: {
        marginTop: 100,
    },
    errorStyle: {
        color: "red",
        marginTop: 5
    },
    container: {
        flex: 1,
        backgroundColor: "white",
        paddingHorizontal: 20,
    },
    imgContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    textContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    bigText: {
        color: "black",
        fontWeight: "bold",
        fontSize: 21,
        textAlign: "center",
        marginBottom: 10,
    },
    smallText: {
        color: "#7C7C7C",
        marginBottom: 10,
    },
    phoneText: {
        color: "#33CC66",
        fontWeight: "bold",
        fontSize: 19,
    },
    inputsContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    inputsStyle: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginTop: 40,
    },
    input: {
        padding: 5,
        borderWidth: 2,
        marginLeft: 10,
        textAlign: "center",
        borderColor: "#E5E5E5",
        fontWeight: "bold",
        color: "black",
        width: 50,
        height: 50,
        borderRadius: 6,
    },
    TextInput: {
        color: "#7C7C7C",
        marginTop: 20,
        fontSize: 12,
    },
    buttonContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        marginBottom: 20,
        width: "100%",
    },
    button: {
        backgroundColor: "#53C330",
        borderRadius: 100,
        padding: 15,
        width: "100%",
        color: "white",
        textAlign: "center",
        borderRadius: 7,
        fontWeight: "bold",
    },
    revoy: {
        color: '#33CC66',
        fontWeight: "bold",
        fontSize: 14,
    },
});