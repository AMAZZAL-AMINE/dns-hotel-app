import { View, TextInput, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import * as Location from 'expo-location';
import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from 'i18next';
import { useIsFocused } from "@react-navigation/native";


export default function Search() {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [rtl, setRtl] = useState(false);
    const rtlBox = rtl && { flexDirection: 'row-reverse' };
    const rtlText = rtl && { textAlign: 'right', paddingRight: 20, paddingLeft: 0 };
    const isFocused = useIsFocused();
    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })();
        if (isFocused) {
            if (i18n.language == "ar") {
                setRtl(true);
            } else {
                setRtl(false);
            }
        }
    }, [isFocused]);

    //use text to get user location
    let posistion = 'loading';
    if (errorMsg) {
        posistion = false;
    } else if (location) {
        //set the location to asyncStorage todo : store he current location to database
        AsyncStorage.setItem("location", JSON.stringify(location));
        posistion = true;
    }
    const getLOcation = async () => {
        // /get the location from asyncstorage
        console.log(JSON.stringify(await AsyncStorage.getItem("location")))
    }


    return (
        <View>
            {posistion == 'loading' ?
                null : posistion == false ?
                    <View style={[styles.boxSearch, rtlBox]}>
                        <View>
                            <TextInput
                                placeholderTextColor={'#A3A3A3'}
                                style={[styles.inputStyle, rtlText]}
                                placeholder={i18n.t("search.search_placeholder")}
                            />
                        </View>
                        <View>
                            <MaterialIcons
                                style={styles.iconstStyle}
                                name="my-location"
                            />
                        </View>
                    </View>
                    : null
            }
        </View>
    )
}

const styles = StyleSheet.create({
    boxSearch: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#F4F4F4',
        padding: 10,
        marginHorizontal: 15,
        marginTop: 20,
        borderRadius: 50,
        height: 54,
        paddingRight: 16,
    },
    iconstStyle: {
        fontSize: 25,
        color: '#53C330',
        fontWeight: 'bold',
    },
    inputStyle: {
        color: 'black',
        width: 220,
        fontSize: 14,
        fontFamily: 'MetropoliceLight',
        letterSpacing: 0.5,
        paddingLeft: 10,
    },
    spinnerTextStyle: {
        fontFamily: 'MetropoliceLight',
        color: 'white',
    }
})