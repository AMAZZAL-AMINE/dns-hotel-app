import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import i18n from 'i18next'
import { useIsFocused } from '@react-navigation/native'

export default function LoginTextCondition() {
    const isFocused = useIsFocused();
    return (
        <View style={styles.textBottom}>
            <Text style={styles.textBottomDesc}>
                {i18n.t("authenticationConditions.descOne")}
            </Text>
            <Text style={styles.textBottomDesc1}> 
                {i18n.t("authenticationConditions.condition")}<Text style={styles.textBottomDesc}> {i18n.t("authenticationConditions.descTwo")}</Text> {i18n.t("authenticationConditions.confidentalite")} </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textBottom: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        letterSpacing: 0.5,
    },
    textBottomDesc1: {
        textAlign: 'justify',
        fontSize: 9,
        color: '#53C330',
        marginTop: 3,
        marginHorizontal: 10,
        fontFamily: 'MetropoliceLight',
        lineHeight: 12,
        letterSpacing: 0.5,
    },
    textBottomDesc: {
        textAlign: 'justify',
        fontSize: 9,
        color: '#A3A3A3',
        marginHorizontal: 10,
        fontFamily: 'MetropoliceLight',
        fontWeight: '400',
        lineHeight: 12,
        letterSpacing: 0.5,
    },
})