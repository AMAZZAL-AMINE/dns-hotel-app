import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import profileImg from '../../assets/images/p.jpg';
import { ProfileData } from './ProfileData'
import CopyIcon from '../../assets/images/copy.png';
import i18n from 'i18next';
import { useIsFocused } from "@react-navigation/native";

export default function Profile({ navigation }) {
    const [rtl, setRtl] = useState(false);
    const rtlBox = rtl && { flexDirection: 'row-reverse' };
    const rtlIcon = rtl && { marginRight: 0, marginLeft: 15 };
    const isFocused = useIsFocused();
    useEffect(() => {
        console.log("called");
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
                <View style={styles.profileHeader}>
                    <Image
                        style={styles.profileImg}
                        source={profileImg}
                    />
                    <Text style={styles.username}>
                        Amine Amazzal
                    </Text>
                    <TouchableOpacity style={styles.idBox}>
                        <Text style={styles.idUser}>
                            ID: 235587954
                        </Text>
                        <Image
                            style={styles.copyIcon}
                            source={CopyIcon}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.lingbreak}></View>
                <View style={styles.profileBody}>
                    {ProfileData.map(item => {
                        return (
                            <TouchableOpacity
                                onPress={() => navigation.navigate(item.goTo)}
                                key={item.id}
                                style={[styles.profileBodyItem, rtlBox]}>
                                <View style={[styles.itemcardLleft, rtlBox]}>
                                    <Image
                                        style={[styles.itemcardIcon, rtlIcon]}
                                        source={item.icon}
                                    />
                                    <Text style={styles.profileBodyItemText}>
                                        {rtl ? item.titleAr : item.titleFr}
                                    </Text>
                                </View>
                                {item.hidArrow ? null : rtl ? <Icon name="chevron-left" size={20} color="#53C330" />
                                    : <Icon name="chevron-right" size={20} color="#53C330" />
                                }
                            </TouchableOpacity>
                        )
                    })}
                </View>

            </ScrollView>
            <Text style={styles.textBottom}>
               {i18n.t("copyRight")}
            </Text>
            <Text style={[styles.textVersion, rtl && { textAlign: 'right'}]}>
                1.0.0
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    profileHeader: {
        marginHorizontal: 20,
        alignSelf: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 50,
    },
    profileImg: {
        borderRadius: 50,
        width: 70,
        height: 70,
        borderWidth: 4,
        borderColor: 'white',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,
    },
    username: {
        fontSize: 14,
        marginTop: 10,
        textAlign: 'center',
        fontFamily: 'MetropoliceMedium',
        letterSpacing: 0.5,
    },

    lingbreak: {
        marginTop: 40,
        backgroundColor: '#f8f8f8',
        height: 6,
    },
    profileBody: {

        marginTop: 20,
    },
    profileBodyItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20,
        marginBottom: 10,
    },
    itemcardLleft: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    itemcardIcon: {
        marginRight: 20,
        width: 20,
        height: 20,
        resizeMode: 'contain',
    },
    itemcardIconArrow: {
        fontSize: 20,
        color: '#33CC66',
        fontWeight: 'bold',
    },
    profileBodyItemText: {
        fontSize: 13,
        fontFamily: 'MetropoliceMedium',
        letterSpacing: 0.5,
    },
    textBottom: {
        fontSize: 10,
        color: '#A3A3A3',
        marginTop: 10,
        marginBottom: 10,
        marginHorizontal: 20,
        fontFamily: 'MetropoliceLight',
        letterSpacing: 0.5,
    },
    textVersion: {
        fontSize: 10,
        color: '#A3A3A3',
        marginBottom: 10,
        marginHorizontal: 20,
        fontFamily: 'MetropoliceLight',
        letterSpacing: 0.5
    },
    idBox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        justifyContent: 'center'
    },
    copyIcon: {
        marginLeft: 5,
        width: 13.5,
        height: 13.5,
    },
    idUser: {
        color: "#A3A3A3",
        // marginLeft: 10,
        fontSize: 12,
        fontFamily: 'MetropoliceLight',
        letterSpacing: 0.5,
    },
})