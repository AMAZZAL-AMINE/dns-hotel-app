import { View, Text, StyleSheet, Image, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React, {useState, useEffect} from 'react'
import ProductTEstImg from '../../../assets/images/p.png'
import IconFeatherCamera1 from '../../../assets/images/Icon_feather-camera1.png'
import iconFatherCamera from '../../../assets/images/Icon_feather-camera3.png'
import i18n from 'i18next'
import { useIsFocused } from '@react-navigation/native'

export default function CategoryDetails({ navigation }) {
    const [rtl, setRtl] = useState(false);
    const rtlBox = rtl && { flexDirection: 'row-reverse' };
    const isFocused = useIsFocused();
    useEffect(() => {
        if (isFocused) {
            if (i18n.language == "ar") {
                setRtl(true);
            } else {
                setRtl(false);
            }
        }
    }, [isFocused]);
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View >
                    <Image
                        style={styles.HeaderImage}
                        source={ProductTEstImg}
                    />
                </View>
                <View style={styles.detailsBody}>
                    <View style={[styles.countBox, rtlBox]}>
                        <Text style={styles.countTitle}>
                        {i18n.t("categoryDetails.categName")}
                        </Text>
                        <Text style={styles.priceText}>
                            0.5 {i18n.t("categoryDetails.dhs")} / {i18n.t("categoryDetails.kg")}
                        </Text>
                    </View>
                    <View style={styles.textBoxDescition}>
                        <Text style={styles.textDes}>
                        {i18n.t("categoryDetails.desc")}
                        </Text>
                    </View>

                    <View>
                        <View style={styles.lineBreack}></View>
                        <View>
                            <Text style={styles.textTitleDay}>
                            {i18n.t("categoryDetails.addIMageTitle")} 
                            </Text>
                            <View style={styles.descBoxContainer}>
                                <View style={styles.cardsUpload}>
                                    <TouchableOpacity style={[styles.cardUploadBox, { marginBottom: 20 }]}>
                                        <Image
                                            style={styles.tinyLogo}
                                            source={IconFeatherCamera1}
                                        />
                                        <Text
                                            style={styles.cardUploadText}>
                                            {i18n.t("categoryDetails.takePhoto")}
                                        </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.cardUploadBox}>
                                        <Image
                                            style={styles.tinyLogo}
                                            source={iconFatherCamera}
                                        />
                                        <Text
                                            style={styles.cardUploadText}>
                                            {i18n.t("categoryDetails.uploadPhoto")}
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                    </View>
                    <View style={styles.btnBoxDec}>
                        <Text
                            onPress={() => navigation.navigate('ImageUploadedView')}
                            style={styles.btnDeclar}>
                            {i18n.t("introduction.next")}
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
    },
    textBottom: {
        marginTop: 20,
        textAlign: 'center',
        marginHorizontal: 20,
        fontWeight: "600",
    },
    btnBoxDec: {
        backgroundColor: 'white',
        marginTop: 50,
        paddingBottom: 27,
        paddingTop: 27,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,

    },
    btnDeclar: {
        textAlign: 'center',
        backgroundColor: '#53C330',
        borderRadius: 6,
        marginHorizontal: 20,
        padding: 15,
        color: 'white',
        fontSize: 14,
        fontFamily: 'MetropoliceLight',
        letterSpacing: 1,
    },
    choseTheTime: {
        textAlign: 'center',
        padding: 10,
        borderWidth: 1,
        borderColor: 'lightgray',
        borderRadius: 6,
        marginHorizontal: 35,
        marginTop: 15,
        fontWeight: 'bold',
        color: '#53C330',
    },
    HeaderImage: {
        width: "100%",
        height: 340,
        resizeMode: 'cover',
    },
    countBox: {
        marginHorizontal: 20,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    priceText : {
        fontFamily:'MetropoliceLight',
        fontSize:13,
        letterSpacing: 0.5
    },
    countTitle: {
        fontSize: 18,
        color: 'black',
        // fontWeight: '700',
        fontFamily: 'MetropoliceSemiBold',
        letterSpacing: 0.5,
    },
    textBoxDescition: {
        padding: 16,
        borderRadius: 5,
        backgroundColor: '#F6F6F6',
        marginTop: 20,
        marginHorizontal: 20,
    },
    textDes: {
        fontSize: 13,
        lineHeight: 27,
        fontFamily: 'MetropoliceLight',
        letterSpacing: 0.5,
        lineHeight: 19,
    },
    textTitleDay: {
        textAlign: 'center',
        fontSize: 13,
        fontWeight: '500',
        marginTop: 30,
        fontFamily: 'MetropoliceSemiBold',
        letterSpacing: 0.5,
        lineHeight: 22
    },
    descBoxContainer: {
        paddingTop: 10,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    tinyLogo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
    },

    img1: {
        justifyContent: 'center',
        resizeMode: 'contain',
        alignItems: 'center',
        width: 50,
        height: 50,
    },
    textBoxDescition: {
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#F6F6F6',
        marginTop: 20,
        marginHorizontal: 15,
    },
    doneImg: {
        width: 35,
        resizeMode: 'contain',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bigText: {

        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
    },
    descText: {
        fontSize: 14,
        textAlign: 'center',
        color: '#262626',
        marginTop: 65,
        marginHorizontal: 15,
        letterSpacing: 0.5,
        fontFamily: 'MetropoliceLight',
        lineHeight: 20,
    },
    btnLighted: {
        width: "100%",
        textAlign: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 6,
        marginHorizontal: 35,
        fontWeight: 'bold',
        padding: 15,
        color: 'black',
        marginTop: 10,
        borderColor: '#33CC66',
        borderWidth: 1,
    },
    cardsUpload: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',

    },
    cardUploadText: {
        marginTop: 20,
        fontFamily: 'MetropoliceLight',
        fontSize: 14,
        textAlign: 'center',
        letterSpacing: 0.5,
    },
    cardUploadBox: {
        marginTop: 36
    },

    detailsBody: {
        backgroundColor: '#fff',
        paddingTop: 20,
        marginTop: -100,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 3,
        shadowRadius: 7.49,
        elevation: 13,
    },
    lineBreack: {
        height: 4,
        marginHorizontal: 20,
        backgroundColor: '#f6f6f6',
        marginTop: 30,
    }
});