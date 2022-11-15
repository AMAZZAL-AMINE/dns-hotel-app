import { ScrollView, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react';
import NotificationItems from './NotificationItems';
import { Data } from './NotifiData';
import EmptyNotifi from './EmptyNotifi';

export default function Notification({ navigation }) {
    const emptyData = () => {
        if (Data.length <= 0) {
            return (
                <EmptyNotifi />
            )
        } else {
            return (
                <SafeAreaView style={styles.container}>
                    <ScrollView>
                        <NotificationItems />
                    </ScrollView>
                </SafeAreaView>
            )
        }
    }
    return (
        <>
            {emptyData()}
        </>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
})