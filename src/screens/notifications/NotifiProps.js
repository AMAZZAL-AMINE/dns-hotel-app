import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react';
import Swipeable from 'react-native-swipeable';
import notificationIcon from "../../assets/images/notif.png"
import trashIcon from "../../assets/images/trash.png"
import { useIsFocused } from "@react-navigation/native";
import i18n from 'i18next';

export default function NotifiProps({ title, time, date }) {
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
    const rightButtons = [
        <TouchableOpacity
            onPress={() => { alert(`Are you sure you want to delete ${title}?`) }}
            style={styles.trashIcon}>
            <Image
                source={trashIcon}
                style={styles.iconTrashSelf}
            />
        </TouchableOpacity>
    ];

    return (
        <>
            <Swipeable
                rightButtons={rightButtons}
                onRightActionActivate={() => { alert(`Are you sure you want to delete ${title}?`) }}
                style={styles.swipeable}>
                <View
                    style={[styles.notifiBoxCard, rtlBox]}>
                    <Image
                        style={[styles.iconNotifi, rtlInputIcon]}
                        source={notificationIcon}
                    />
                    <View>
                        <Text style={styles.textTitleNotif}>{title}</Text>
                        <View style={styles.boxdates}>
                            <Text style={styles.timeStyle}>{time}</Text>
                            <Text style={styles.dateStyle}>{date}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.lineBreack}></View>
            </Swipeable>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        marginTop: 1,
        backgroundColor: '#fff',
    },
    headerSmallDescText: {
        fontSize: 14,
        marginTop: 6,
        fontWeight: '100'
    },
    notifiBoxCard: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        padding: 15,
        backgroundColor: 'white',
        alignItems: 'center',
        height: 90
    },
    iconNotifi: {
        marginRight: 20,
        width: 38,
        height: 38,
    },
    textTitleNotif: {
        color: 'black',
        fontSize: 13,
        fontFamily: 'MetropoliceSemiBold'
    },
    boxdates: {
        marginTop: 8,
        flexDirection: 'row',
        alignItems: 'center',
    },
    trashIcon: {
        flexDirection: 'row',
        alignItems: 'center',
        height: "100%",
        width: "100%",
        alignSelf: 'center',
        backgroundColor: '#f9f9f9',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    iconTrashSelf: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: 16.97,
        height: 18.7,
        alignItems: 'center',
        alignSelf: 'center',
        marginLeft: 25,
    },
    dateStyle: {
        marginRight: 20,
        color: '#A3A3A3',
        fontFamily: 'MetropoliceLight',
        fontSize: 12
    },
    timeStyle: {
        marginRight: 20,
        color: '#A3A3A3',
        fontFamily: 'MetropoliceLight',
        fontSize: 12
    },
    lineBreack: {
        height: 0.6,
        backgroundColor: '#e5e5e5',
        marginHorizontal: 20
    },
})