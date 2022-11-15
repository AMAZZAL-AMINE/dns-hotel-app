import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import successIcon from '../../assets/images/calendar.png';
import i18n from 'i18next';
import LoginTextCondition from '../components/LoginTextCondition'

export default function EnAttent({ navigation }) {
    const [rtl, setRtl] = useState(false);
    const rtlText = rtl && { textAlign: 'right', paddingRight: 20 };
    const errorsRtlText = rtl && { textAlign: 'right', paddingRight: 0 };
    useEffect(() => {
        if (i18n.language == "ar") {
            setRtl(true);
        } else {
            setRtl(false);
        }
    }, []);
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.contentSection}>
                    <Image
                        source={successIcon}
                        style={styles.successIcon}
                    />
                    <Text style={styles.textTitle}>
                        {i18n.t("afterSignUp.title")}
                        {'\n'}Hassan Aberdaze!
                    </Text>
                    <Text style={styles.textDesc}>
                        {i18n.t("afterSignUp.desc")}
                    </Text>
                    <View style={styles.contentBody}>
                        <Text style={styles.msgTitle}>
                            {i18n.t("afterSignUp.why_waite")}
                        </Text>
                        <Text style={styles.msgDesc}>
                            {i18n.t("afterSignUp.why_waite_msg")}
                        </Text>
                    </View>
                </View>
            </ScrollView>
           <LoginTextCondition />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    successIcon: {
        width: 102,
        height: 124,
        alignSelf: 'center',
        resizeMode: 'contain',
        marginTop: 80,
    },
    textTitle: {
        maxWidth: 230,
        alignSelf: 'center',
        textAlign: 'center',
        marginTop: 50,
        fontFamily: 'MetropoliceBold',
        fontSize: 19,
        lineHeight: 26,
        letterSpacing: 0.5,
    },
    textDesc: {
        maxWidth: 260,
        alignSelf: 'center',
        textAlign: 'center',
        marginTop: 30,
        color: '#A3A3A3',
        fontSize: 14,
        fontFamily: 'MetropoliceLight',
  
        letterSpacing: 0.5,
    },
    contentBody: {
        marginTop: 80,
    },
    msgTitle: {
        fontSize: 19,
        alignSelf: 'center',
        textAlign: 'center',
        color: '#53C330',

        fontFamily: 'MetropoliceSemiBold',
        letterSpacing: 0.5,
    },
    msgDesc: {
        maxWidth: 280,
        alignSelf: 'center',
        textAlign: 'center',
        color: "#A3A3A3",
        marginTop: 30,
        fontWeight: '400',
 
        fontSize: 14,
        fontFamily: 'MetropoliceLight',
        letterSpacing: 0.5,
    },
    textBottom: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        letterSpacing: 0.5,
    },
    textBottomDesc1: {
        textAlign: 'center',
        fontSize: 9,
        color: '#53C330',
        marginTop: 3,
        marginHorizontal: 9,
        fontFamily: 'MetropoliceLight',
        lineHeight: 12,
        letterSpacing: 0.5,
    },
    textBottomDesc: {
        textAlign: 'center',
        fontSize: 9,
        color: '#A3A3A3',
        marginHorizontal: 9,
        fontFamily: 'MetropoliceLight',
        fontWeight: '400',
        lineHeight: 12,
        letterSpacing: 0.5,
    }
});