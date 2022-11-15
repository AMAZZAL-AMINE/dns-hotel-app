import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default function Accordin({title, desc}) {
    const [active, setActive] = useState(false)
    return (
        <View style={styles.accordingContainer}>
            <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => setActive(!active)}
                style={styles.accordingHeader}>
                <Text style={styles.title}>
                    {title}
                </Text>
                <Icon
                    size={20}
                    name={active ? 'chevron-up' : 'chevron-down'}
                />
            </TouchableOpacity>
            {active && (
                <View style={styles.accordingBody}>
                <Text style={styles.accordingBodyText}>
                    {desc}
                </Text>
            </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    accordingContainer : {
        marginHorizontal: 20,
        marginBottom:34,
    },
    accordingHeader : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title : {
        fontSize: 13,
        fontFamily: 'MetropoliceSemiBold',
        letterSpacing: 0.5,
        color: '#262626'
    },
    accordingBody : {
        borderBottomColor: '#e0e0e0',
        borderBottomWidth: 1,
        paddingBottom: 20,
    },
    accordingBodyText : {
        marginTop: 20,
        fontFamily: 'MetropoliceMedium',
        lineHeight: 22,
        letterSpacing: 0.5,
        fontSize: 12,
    },
});