import { View, StyleSheet } from 'react-native'
import React from 'react'
import FooterNav from '../components/FooterNav';
import DeclarationTab from '../../routes/DeclarationTab';

export default function DeclarationsIndex({ navigation }) {
    return (
        <View style={styles.container}>
            <DeclarationTab />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',

    },

})