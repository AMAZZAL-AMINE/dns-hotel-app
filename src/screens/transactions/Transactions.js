import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React, {useState, useEffect} from 'react'
import FooterNav from '../components/FooterNav'
import { useIsFocused } from '@react-navigation/native'
import i18n from 'i18next'

export default function Transactions({ navigation }) {
    const [rtl, setRtl] = useState(false);
    const rtlBox = rtl && { flexDirection: 'row-reverse' };
    const rtlInputIcon = rtl && { marginLeft: 20, marginRight: 10 }
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
                <View style={styles.contentSection}>
                    <Text style={styles.title}>Transactions effectuées </Text>
                    <Text style={styles.desc}>Pour plus de détails, cliquez sur la transaction.</Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("PrinttransactionsInvoice")}
                        style={styles.cardPaymentBox}>
                        <View style={[styles.cardPaymentHeader, rtlBox]}>
                            <Text style={styles.payName}>
                                Alvéoles
                            </Text>
                            <Text style={styles.payPrice}>
                                31.5000.00  {i18n.t("wallet.dhs")}
                            </Text>
                        </View>
                        <View style={[styles.cardPaymentFooter, rtlBox]}>
                            <Text style={styles.payDate}>
                                02-11-2021   09:50 
                            </Text>
                            <Text style={styles.payQty}>
                                1,000 {i18n.t("wallet.kg")}
                            </Text>
                        </View>
                    </TouchableOpacity>
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
    contentSection: {
        marginHorizontal: 15,
    },
    title : {
        fontSize : 15,
        fontFamily : "MetropoliceSemiBold",
        marginTop : 12,
        letterSpacing : 0.5,
    },
    desc : {
        fontSize : 12,
        fontFamily : "MetropoliceLight",
        color : "#A3A3A3",
        marginTop:5,
        marginBottom:20,
        letterSpacing : 0.5,
    },
    cardPaymentBox: {
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: 14,
        marginBottom: 14,
        shadowColor: "#888888",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 5,
        borderRadius: 10,
    },
    cardPaymentHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    payName: {
        fontSize: 13,
        fontFamily: 'MetropoliceSemiBold',
        color: '#051037',
        letterSpacing: 0.5,
    },
    payPrice: {
        fontSize: 13,
        color: '#262626',
        fontFamily: 'MetropoliceLight',
        letterSpacing: 0.5,
    },
    cardPaymentFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 25,
        letterSpacing: 0.5,
    },
    payDate: {
        fontSize: 13,
        color: '#A3A3A3',
        fontFamily: 'MetropoliceLight',
        letterSpacing: 0.5,
    },
    payQty: {
        fontSize: 13,
        fontWeight: '800',
        color: '#53C330',
        fontFamily: 'MetropoliceSemiBold',
        letterSpacing: 0.5,
    },
})