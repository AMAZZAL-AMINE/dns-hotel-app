import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import i18n from 'i18next'
import { useIsFocused } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/Entypo';

export default function DeclarationProps({ date, time, type, qty, price, total, isFree, SuggestedPrice,totalSuggest, newPrice, actionIcon, canCncel, func }) {
    const [details, setDetails] = useState(false);
    const [rtl, setRtl] = useState(false);
    const rtlBox = rtl && { flexDirection: 'row-reverse' };
    const rtlInputIcon = rtl && { marginLeft: 0, marginRight: 10 }
    const isFocused = useIsFocused();
    const showDetails = () => {
        setDetails(true);
    }
    const hideDetailse = () => {
        setDetails(false);
    }
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
        <View>
            <View>
                <View style={styles.TopCard}>
                    <View style={[styles.cardHeader, rtlBox]}>
                        <View style={styles.cardHeaderLeft}>
                            <Text style={styles.headcontetn}>
                                {date}
                            </Text>
                            <Text style={styles.headcontetn}>
                                {time}
                            </Text>
                        </View>
                        <TouchableOpacity
                            onPress={func}
                            style={[styles.cardHeaderRight, rtlBox]}>
                            <Text style={styles.headcontetnCnte}>
                                {canCncel ? i18n.t("demandes.inProgress.cancel") : i18n.t("demandes.inProgress.delete")}
                            </Text>
                            <Image
                                source={actionIcon}
                                style={[styles.cancelIcon, rtlInputIcon]}
                            />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        activeOpacity={0.6}
                        onPress={details ? hideDetailse : showDetails}
                        style={[styles.cardcenter, rtlBox]}
                    >
                        <Text style={styles.detailText}>
                            {i18n.t("demandes.inProgress.details")}
                        </Text>
                        <Text>
                            <Icon
                                style={styles.detailIcon}
                                name={details ? 'chevron-up' : 'chevron-down'}
                            />
                        </Text>
                    </TouchableOpacity>
                    <View style={details ? styles.contetnBody : styles.detailsHide}>
                        <View style={[styles.clientsDetails, rtlBox]}>
                            <Text style={styles.textQty}>
                                {i18n.t("demandes.inProgress.type")}
                            </Text>
                            <Text style={styles.textType}>
                                {type}
                            </Text>
                        </View>
                        <View style={[styles.clientsDetails, rtlBox]}>
                            <Text style={styles.textQty}>
                                {i18n.t("demandes.inProgress.qty")}
                            </Text>
                            <Text style={styles.textQty}>
                                {qty} {i18n.t("demandes.inProgress.kg")}
                            </Text>
                        </View>
                        <View style={[styles.clientsDetails, rtlBox]}>
                            <Text style={styles.textQty}>
                                {i18n.t("demandes.inProgress.price")}
                            </Text>
                            {isFree ? (
                                <Text style={styles.textQty}>
                                    {i18n.t("demandes.inProgress.free")}
                                </Text>
                            ) : (
                                <Text style={styles.textQty}>
                                    {price} {i18n.t("demandes.inProgress.dhs")}
                                </Text>
                            )}
                        </View>
                        {SuggestedPrice && (
                            <View style={[styles.clientsDetails, rtlBox]}>
                                <Text style={[styles.textQty, { color: "#5B68F6" }]}>
                                    {i18n.t("demandes.inProgress.suggestPrice")}
                                </Text>
                                <Text style={[styles.textQty, { color: "#5B68F6" }]}>
                                    {newPrice} {i18n.t("demandes.inProgress.dhs")}
                                </Text>
                            </View>
                        )}
                    </View>
                    {!details && <View style={styles.breakLineMini}></View>}
                    <View style={[styles.cardBody, rtlBox]}>
                        <Text style={styles.textPay}>
                            {i18n.t("demandes.inProgress.total")}
                        </Text>
                        {isFree ? (
                            <Text style={styles.textTotal}>
                                {i18n.t("demandes.inProgress.free")}
                            </Text>
                        ) : (
                            <Text style={styles.textTotal}>
                                {total} {i18n.t("demandes.inProgress.dhs")}
                            </Text>
                        )}
                    </View>
                    {SuggestedPrice && (
                        <View style={[styles.cardBodyTotalSuggest, rtlBox]}>
                            <Text style={styles.textPay}>
                                {i18n.t("demandes.inProgress.totalSuggest")}
                            </Text>
                            {isFree ? (
                                <Text style={styles.textTotal}>
                                    {i18n.t("demandes.inProgress.free")}
                                </Text>
                            ) : (
                                <Text style={[styles.textTotal, {color: "#5B68F6"}]}>
                                    {totalSuggest} {i18n.t("demandes.inProgress.dhs")}
                                </Text>
                            )}
                        </View>
                    )}
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    TopCard: {
        backgroundColor: 'white',
        shadowColor: "#888888",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 5,
        borderRadius: 10,
        marginHorizontal: 15,
        marginTop: 20,
        marginBottom: 10,
    },
    cancelIcon: {
        width: 16,
        height: 16,
        resizeMode: 'contain',
        marginLeft: 10,
    },
    textQty: {
        fontSize: 13,
        fontFamily: 'MetropoliceLight',
        letterSpacing: 0.5
    },
    textType: {
        color: "#53C330",
        fontSize: 13,
        fontFamily: "MetropoliceSemiBold"
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 12,
        paddingHorizontal: 20,
        marginTop: 8,
    },
    cardHeaderLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    cardHeaderRight: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headcontetn: {
        color: '#A3A3A3',
        marginRight: 10,
        fontSize: 13,
        fontFamily: 'MetropoliceLight'
    },
    headcontetnCnte: {
        color: 'black',
        fontSize: 13,
        fontFamily: 'MetropoliceLight',
        letterSpacing: 0.5
    },
    headcontetIcon: {
        color: 'black',
        fontSize: 16,
    },
    cardcenter: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: 15,
        paddingHorizontal: 20,
        padding: 12,

    },
    detailText: {
        fontFamily: 'MetropoliceSemiBold',
        fontSize: 13,
        letterSpacing: 0.5
    },
    detailIcon: {
        fontSize: 14,
    },
    cardBody: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 20,
        // marginTop: 3,
    },
    cardBodyTotalSuggest: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingBottom: 20
    },  
    textPay: {
        fontFamily: 'MetropoliceSemiBold',
        fontSize: 13,
        letterSpacing: 0.5
    },
    textTotal: {
        color: '#53C330',
        fontFamily: 'MetropoliceSemiBold',
        letterSpacing: 0.5,
        fontSize: 13,
    },
    contetnBody: {
        justifyContent: 'space-between',
        paddingBottom: 15,
        backgroundColor: '#FAFAFA',
        paddingHorizontal: 20,
    },
    clientInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    clientsUsername: {
        fontWeight: 'bold',
    },
    clientsDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 15,
    },
    detailsHide: {
        display: 'none'
    },
    breakLineMini: {
        width: "100%",
        borderColor: '#A3A3A3',
        borderStyle: 'dashed',
        borderWidth: 0.2,
        marginTop: 5,
    },
    dirh: {
        color: '#33CC66',
        fontWeight: 'bold',
    },
})