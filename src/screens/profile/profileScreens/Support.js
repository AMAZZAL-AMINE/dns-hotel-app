import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import LogoTwo from '../../../assets/images/logo_2.png';
import message from '../../../assets/images/message.png';
import headphone from '../../../assets/images/headphone.png'
import dataNourLogo from '../../../assets/images/dataNourLogo.png';
import i18n from 'i18next';
import { useIsFocused } from "@react-navigation/native";

export default function Support({ navigation }) {
    const [rtl, setRtl] = useState(false);
    const rtlBox = rtl && { flexDirection: 'row-reverse' };
    const rtlIcon = rtl && { marginRight: 0, marginLeft: 60 };
    const isFocused = useIsFocused();

    useEffect(() => {
        console.log("called");

        if (isFocused) {
            if (i18n.language == "ar") {
                setRtl(true);
            } else {
                setRtl(false);
            }
        }
    }, [isFocused]);
    return (
        <View style={styles.container}>
            <ScrollView>
                <View>
                    <Image
                        style={styles.logo}
                        source={LogoTwo}
                    />
                    <Text style={styles.textTitle}>
                        {i18n.t("suport.title")}
                    </Text>
                    <View style={styles.nuttonsBox}>
                        <TouchableOpacity style={[styles.headphoneBox, rtlBox]}>
                            <Image
                                style={[styles.iconBtn, rtlIcon]}
                                source={headphone}
                            />
                            <Text style={[styles.btnText, rtl && {marginRight: 10}]}>
                                {i18n.t("suport.call")}
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.mailBox, rtlBox]}>
                            <Image
                                style={[styles.iconBtn, rtlIcon]}
                                source={message}
                            />
                            <Text style={styles.btnText}>
                                {i18n.t("suport.msg")}
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.condBox}>
                        <Text
                            onPress={() => navigation.navigate("TC")}
                            style={styles.conditions}>
                            {i18n.t("suport.terms")}
                        </Text>
                        <Text
                            onPress={() => navigation.navigate("Politique")}
                            style={styles.conditions}>
                            {i18n.t("suport.politiq")}
                        </Text>
                    </View>
                </View>
            </ScrollView>
            <View>
                <Image
                    style={styles.dataLogo}
                    source={dataNourLogo}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    headphoneBox: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#5B68F6',
        alignSelf: 'center',
        padding: 5,
        borderRadius: 50,
        width: "70%",
        marginTop: 20,
        height: 45,
    },
    mailBox: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#53C330',
        alignSelf: 'center',
        padding: 5,
        borderRadius: 50,
        width: "70%",
        marginTop: 20,
        height: 45,
    },
    logo: {
        alignSelf: 'center',
        width: 107,
        height: 77,
        marginTop: 80,
        resizeMode: 'contain'
    },
    textTitle: {
        fontSize: 12,
        textAlign: 'center',
        marginTop: 100,
        fontFamily: 'MetropoliceLight',
        letterSpacing: 0.5,
    },
    nuttonsBox: {
        marginTop: 20,
        marginHorizontal: 20,
    },
    btnText: {
        color: '#fff',
        fontFamily: 'MetropoliceLight',
        textAlign: 'center',
        fontSize: 14,
        letterSpacing: 0.5,
    },
    iconBtn: {
        width: 34,
        height: 30,
        resizeMode: 'contain',
        marginRight: 45,
    },
    conditions: {
        textAlign: 'center',
        marginTop: 14,
        fontSize: 12,
        fontFamily: 'MetropoliceLight',
        letterSpacing: 0.5,
    },
    condBox: {
        marginTop: 50,
        marginBottom: 50,
    },
    dataLogo: {
        width: 57,
        height: 47,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginBottom: 60,
    },
})