import { View, Text, ScrollView, StyleSheet, Image } from 'react-native'
import React, { useState, useEffect } from 'react';
import succesIcon from '../../assets/images/done1.png';
import placeIcon from '../../assets/images/adictance.png'
import { useIsFocused } from '@react-navigation/native';
import i18n from 'i18next';

export default function PrinttransactionsInvoice({ navigation }) {
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
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.invoiceContetn}>
                    <View style={styles.invoiceHeader}>
                        <Image
                            source={succesIcon}
                            style={styles.successIcon}
                        />
                        <Text style={styles.invoiceTitleDesc}>
                            {i18n.t("wallet.invoice.title")}
                        </Text>
                        <Text style={styles.totalPrice}>
                            31,433.00  {i18n.t("wallet.dhs")}
                        </Text>
                        <Text style={styles.complet}>
                            {i18n.t("wallet.complet")}
                        </Text>
                    </View>
                    <View style={styles.mapPlace}>
                        <Image 
                            source={placeIcon}
                            style={styles.adistanceIcon}
                        />
                        <View style={styles.adistanceMapGroup}>
                            <View style={styles.groupBoxMapInfo}>
                                <View>
                                    <Text style={styles.titlePlace}>
                                        Lieu de chargement
                                    </Text>
                                    <Text style={styles.placeInfo}>
                                        N° 13 Sidi Bibi, Taroudant
                                    </Text>
                                </View>
                                <Text style={styles.plceDate}>
                                    16:15  11-02-2022
                                </Text>
                            </View>
                            <View style={[styles.groupBoxMapInfo, styles.mapBottomInfo]}>
                                <View>
                                    <Text style={styles.titlePlace}>
                                    Lieu de livraison
                                    </Text>
                                    <Text style={styles.placeInfo}>
                                        N° 200 Biougra, Agadir
                                    </Text>
                                </View>
                                <Text style={styles.plceDate}>
                                    16:15  11-02-2022
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.invoiceBody}>
                        <View style={styles.borderDashd}></View>
                        <View style={styles.borderDashdTwo}></View>
                        <View style={styles.sectionData}>
                            <View style={[styles.textRow, rtlBox]}>
                                <Text style={styles.leftCOntetn}>
                                    {i18n.t("wallet.invoice.type")}
                                </Text>
                                <Text style={styles.rightContetnLight}>
                                    Alvéoles
                                </Text>
                            </View>
                            <View style={[styles.textRow, rtlBox]}>
                                <Text style={styles.leftCOntetn}>
                                    {i18n.t("wallet.invoice.qty")}
                                </Text>
                                <Text style={styles.rightContetnLight}>
                                    21000  {i18n.t("wallet.kg")}
                                </Text>
                            </View>
                            <View style={[styles.textRow, rtlBox]}>
                                <Text style={styles.leftCOntetn}>
                                    {i18n.t("wallet.invoice.total")}
                                </Text>
                                <Text style={styles.rightContetnGreen}>
                                    31.500.00  {i18n.t("wallet.dhs")}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.borderDashd}></View>
                        <View style={styles.borderDashdTwo}></View>
                        <View style={styles.sectionData}>
                            <View style={[styles.textRow, rtlBox]}>
                                <Text style={styles.leftCOntetn}>
                                    {i18n.t("wallet.invoice.date")}
                                </Text>
                                <Text style={styles.rightContetnLight}>
                                    02:00   02-11-2021 
                                </Text>
                            </View>
                            <View style={[styles.textRow, rtlBox]}>
                                <Text style={styles.leftCOntetn}>
                                    {i18n.t("wallet.invoice.agence")}
                                </Text>
                                <Text style={styles.rightContetnLight}>
                                    CIH Bank
                                </Text>
                            </View>
                            <View style={[styles.textRow, rtlBox]}>
                                <Text style={styles.leftCOntetn}>
                                    {i18n.t("wallet.invoice.city")}
                                </Text>
                                <Text style={styles.rightContetnGreen}>
                                أكادير    
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    invoiceHeader: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    successIcon: {
        width: 126.75,
        height: 94,
        resizeMode: 'contain',
        marginTop: 35,
    },
    invoiceTitleDesc: {
        fontSize: 14,
        marginTop: 30,
        fontWeight: '900',
        fontFamily: 'MetropoliceLight',
        letterSpacing: 0.5,
        color: '#262626',
    },
    totalPrice: {
        fontSize: 20,
        marginTop: 26,
        fontFamily: 'MetropoliceSemiBold',
        letterSpacing: 0.5,
    },
    complet: {
        fontSize: 12,
        fontWeight: '900',
        color: '#53C330',
        marginBottom: 20,
        marginTop: 7,
        fontFamily: 'MetropoliceMedium',
        letterSpacing: 0.5,
    },
    invoiceBody: {
        marginHorizontal: 20,
    },
    borderDashd: {
        width: "100%",
        height: 1,
        backgroundColor: 'white',
        marginTop: 10,
    },

    textRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 16,
    },
    leftCOntetn: {
        fontSize: 13,
        fontFamily: 'MetropoliceSemiBold',
        letterSpacing: 0.5,
    },
    rightContetnLight: {
        fontSize: 13,
        color: '#9B9B9B',
        fontFamily: 'MetropoliceLight',
        letterSpacing: 0.5,
    },
    rightContetnGreen: {
        fontSize: 13,
        color: '#53C330',
        fontFamily: 'MetropoliceSemiBold',
        letterSpacing: 0.5,
    },
    borderDashdTwo: {
        height: 1,
        backgroundColor: '#E0E0E0',
        marginTop: 20,
    },
    mapPlace : {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 20,
        width: "100%",
        marginTop:30,
    },
    adistanceIcon : {
        width: 25,
        height: 82,
        marginRight : 13
    },
    groupBoxMapInfo : {
        width: "81%",
        flexDirection : "row",
        justifyContent : "space-between"
    },
    titlePlace : {
        fontSize: 13,
        fontFamily : "MetropoliceSemiBold",
        letterSpacing : 0.5,
    },
    placeInfo : {
        fontSize : 12.5,
        fontFamily : "MetropoliceLight",
        marginTop:4,
        color : "#A3A3A3"
    },
    plceDate :{
        color: "#A3A3A3",
        fontSize : 13
    },
    mapBottomInfo :{
        marginTop : 22
    }
})