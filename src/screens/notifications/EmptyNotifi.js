import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import notificationIcon from "../../assets/images/empty-notifi.png";
import i18n from 'i18next';

export default function EmptyNotifi() {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={notificationIcon}
            />
            <Text style={styles.textDesc}>
                {i18n.t("emptyNotification.title")}
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    groupBox: {
        // alignItems: 'center',
        // justifyContent: 'center',
        // alignContent: 'center',
        // alignSelf: 'center',
        // marginTop: 150,
    },
    textDesc: {
        marginHorizontal: 50,
        textAlign: 'center',
        fontSize: 14,
        color: '#A3A3A3',
        maxWidth: 210,
        marginTop: 20,
    },
    image: {
        width: 87,
        height: 87,
    },
})