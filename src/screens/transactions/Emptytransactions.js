import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import React, {useEffect, useState} from 'react'
import FooterNav from '../components/FooterNav'
import cardGift from "../../assets/images/cardss.png";
import i18n from 'i18next';

export default function Emptytransactions({ navigation }) {
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{ flex:1, justifyContent:'center' }}>
                <View style={styles.contetnSection}>
                    <Image 
                        source={cardGift}
                        style={styles.imgCard}
                    />
                    <Text 
                        onPress={() => navigation.navigate("Payment")}
                        style={styles.textDesc}>
                            {i18n.t("wallet.empty")}
                    </Text>
                </View>
            </ScrollView>
            <FooterNav navigation={navigation} />
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor:'white',
    },
    contetnSection : {
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
    },
    imgCard : {
        width: 94.23,
        height: 84,
        resizeMode: 'cover',
        marginBottom: 30,
        marginLeft: 20,
    },
    textDesc : {
        color:'#A3A3A3',
        fontSize:13,
        textAlign:'center',
        lineHeight:23,
        letterSpacing:0.5,
        fontFamily:'MetropoliceLight',
    },
})