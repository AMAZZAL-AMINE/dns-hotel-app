import { StyleSheet, Text, View, Animated } from 'react-native'
import React, { useEffect, useRef } from 'react';
import i18n from 'i18next';

export default function NextButton({ percentage, scrollTo }) {
    const size = 108;
    const strokeWidth = 2;
    const radius = size / 2 - strokeWidth / 2;
    const circumference = 2 * Math.PI * radius;
    const progressAnimation = useRef(new Animated.Value(0)).current;
    const progressRef = useRef(null);


    const animation = (toValue) => {
        return Animated.timing(progressAnimation, {
            toValue,
            duration: 250,
            useNativeDriver: true,
        }).start();
    }
    useEffect(() => {
        animation(percentage);
    }, [percentage]);
    useEffect(() => {
        progressAnimation.addListener((value) => {
            const strokeDashoffset = circumference - (circumference * value.value) / 100;
            if (progressRef?.current) {
                progressRef.current.setNativeProps({
                    strokeDashoffset
                })
            }
        } )
        } , []);
    return (
        <View style={styles.container}>
            <Text onPress={scrollTo} style={styles.button} >
               {i18n.t("introduction.next")}
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        position: 'absolute',
        backgroundColor: '#53C330',
        padding: 15,
        width: 340,
        color: 'white',
        textAlign: 'center',
        borderRadius: 5,
        fontSize: 14,
        fontFamily: 'MetropoliceLight',
    },
})