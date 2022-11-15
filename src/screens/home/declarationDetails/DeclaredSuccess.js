import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native'
import React from 'react';
import doneOne from "../../../assets/images/done1.png"
import i18n from 'i18next';

export default function DeclaredSuccess({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.descBoxContainer}>
                <Image
                    style={styles.doneImg}
                    source={doneOne}
                />
                <View>
                    <Text
                        style={styles.bigText}>
                       {i18n.t("declarationRegister.successTitle")}
                    </Text>
                    <Text
                        style={styles.descText}>
                        {i18n.t("declarationRegister.successDesc")}
                    </Text>
                </View>
            </View>
            <View style={styles.btns}>
                <Text
                    onPress={() => navigation.navigate('DeclarationsIndex')}
                    style={styles.btnBolded}>
                    {i18n.t("declarationRegister.demandBtn")}
                </Text>
                <Text
                    onPress={() => navigation.navigate("Home")}
                    style={styles.btnLighted}>
                    {i18n.t("declarationRegister.homeBtn")}
                </Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    doneImg: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
        alignSelf: 'center',
        alignItems: 'center',
    },
    bigText: {
        fontSize: 25,
        textAlign: 'center',
        fontFamily: 'MetropoliceBold',
        letterSpacing: 0.5,
        marginTop: 40,
    },
    descText: {
        fontSize: 14,
        color: '#A3A3A3',
        fontFamily: 'MetropoliceLight',
        textAlign: 'center',
        letterSpacing: 0.5,
        marginTop: 20,

    },
    btns: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
        marginHorizontal: 20,
        marginBottom: 20,
        width: "60%",
        alignItems: 'center',
        alignSelf: 'center',
    },
    btnBolded: {
        width: "100%",
        textAlign: 'center',
        backgroundColor: '#53C330',
        borderRadius: 6,
        marginHorizontal: 35,
        padding: 15,
        color: 'white',
        fontFamily : 'MetropoliceLight',
        fontSize : 14,
        letterSpacing : 0.5
    },
    btnLighted: {
        width: "100%",
        textAlign: 'center',
        backgroundColor: '#F6F6F6',
        borderRadius: 6,
        marginHorizontal: 35,
        padding: 15,
        color: 'black',
        marginTop: 25,
        fontFamily : 'MetropoliceLight',
        fontSize : 14,
        letterSpacing : 0.5
    }
})