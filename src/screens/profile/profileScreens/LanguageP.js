import { View, Text, Image, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React, {useState, useEffect} from 'react'
import { RadioButton } from 'react-native-paper';
import marocIocn from '../../../assets/images/mr70.png'
import franceIocn from '../../../assets/images/fr70.png'
import i18n from 'i18next';

export default function Nopaiment({ navigation }) {
    const [checked, setChecked] = useState(i18n.language);
    const [rtl, setRtl] = useState(false);
    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        setChecked(lang);
    }
    useEffect(() => {
       if(i18n.language == "ar") {
            setRtl(true);
       }
    }, []);
    const rtxImg = rtl && { marginRight: 0,marginLeft : 20 };
    const rtlView = rtl && { flexDirection: 'row-reverse' };
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView >
                <View style={styles.containerTwo}>
                    <Text style={styles.bigTtitle}>
                    {i18n.t("homeChangeLaung.title")}
                    </Text>
                    <Text style={styles.titleDesc}>
                    {i18n.t("homeChangeLaung.desc")}
                    </Text>
                    <View >
                        <TouchableOpacity 
                            onPress={() => {changeLanguage('ar');  setRtl(true)}}
                            style={[styles.langCardBox, rtlView]} >
                            <View style={[styles.leftContetn, rtlView]}>
                                <Image
                                    source={marocIocn}
                                    style={[styles.langCardIcon, rtxImg]}
                                />
                                <Text style={styles.langCardText}>
                                {i18n.t("langs.ar")}
                                </Text>
                            </View>
                            <RadioButton
                                onPress={() => {changeLanguage('ar');  setRtl(true)}}
                                 uncheckedColor='#A3A3A3'
                                value="arabic"
                                status={checked === 'ar' ? 'checked' : 'unchecked'}
                                color="#53C330"
                            />
                        </TouchableOpacity>
                        <TouchableOpacity 
                            onPress={() => {changeLanguage('fr');  setRtl(false)}}
                            style={[styles.langCardBox, rtlView]} >
                            <View style={[styles.leftContetn, rtlView]}>
                                <Image
                                    source={franceIocn}
                                    style={[styles.langCardIcon, rtxImg]}
                                />
                                <Text style={styles.langCardText}>
                                {i18n.t("langs.fr")}
                                </Text>
                            </View>
                            <RadioButton

                                uncheckedColor='#A3A3A3'
                                value="arabic"
                                status={checked === 'fr' ? 'checked' : 'unchecked'}
                                onPress={() => {changeLanguage('fr');  setRtl(false)}}
                                color="#53C330"
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    containerTwo: {
        marginHorizontal: 20,
    },
    bigTtitle : {
        color: 'black',
        fontSize: 17,
        fontFamily: 'MetropoliceSemiBold',
        letterSpacing: 0.5,
        marginTop: 20,
    },
    titleDesc : {
        color: "#A3A3A3",
        fontSize: 11,
        fontFamily: 'MetropoliceLight',
        marginTop: 5,
        letterSpacing: 0.5,
        lineHeight: 20,     
        marginBottom: 10,
    },
    langCardBox : {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10,
        paddingVertical: 20,
        backgroundColor : 'white',
        shadowColor: "#888888",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity:  0.37,
        shadowRadius: 7.49,
        elevation: 5,
        borderRadius: 10,
        marginBottom: 10,
        paddingHorizontal: 20,
    },
    leftContetn : {
        flexDirection: 'row',
        alignItems: 'center',
    },
    langCardIcon : {
        width: 44,
        height: 44,
        marginRight: 20,
    },
    langCardText : {
        fontSize: 14,
        fontFamily: 'MetropoliceLight',
        letterSpacing: 0.5,
        color: '#262626',
    },
})