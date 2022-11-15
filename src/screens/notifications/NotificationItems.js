import { View, Text, StyleSheet } from 'react-native'
import React  from 'react';
import NotifiProps from './NotifiProps';
import { Data } from './NotifiData';
import i18n from 'i18next';

export default function NotificationItems() {
    return (
        <View style={styles.container}>
            <View style={styles.containerNofif}>
                <Text style={styles.bigTtitle}>
                    {i18n.t("notification.title")}
                </Text>
                <Text style={styles.titleDesc}>
                    {i18n.t("notification.desc")}
                </Text>
                {Data.map(notif => {
                    return (
                        <NotifiProps
                            key={notif.id}
                            title={notif.title}
                            time={notif.time}
                            date={notif.date}
                        />
                    )
                })}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
    },
    notificationHeaderTop: {
        marginHorizontal: 15
    },
    headerBigText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 25,

    },
    headerSmallDescText: {
        fontSize: 13,
        marginTop: 6,
        fontWeight: '100',
        color: '#A3A3A3'
    },
    bigTtitle : {
        color: 'black',
        fontSize: 17,
        fontFamily: 'MetropoliceSemiBold',
        letterSpacing: 0.5,
        marginHorizontal: 20
    },
    titleDesc : {
        color: "#A3A3A3",
        fontSize: 11,
        fontFamily: 'MetropoliceLight',
        marginTop: 5,
        letterSpacing: 0.5,
        lineHeight: 20,     
        marginBottom: 10,
        marginHorizontal: 20
    },
})