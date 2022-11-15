import React, {useState, useEffect} from 'react';
import { View, StyleSheet, Animated, useWindowDimensions } from 'react-native';
import i18n from 'i18next';

const Paginator = ({ data, scrollX }) => {
    const { width } = useWindowDimensions();
    const [rtl, setRtl] = useState(false);
    
    useEffect(() => {
        if(i18n.language == "ar") {
            setRtl(true);
        }else {
            setRtl(false)
        }
    }, []);
    const rtlRevers = rtl && { flexDirection: 'row-reverse' };
    return (
        <View style={[styles.container, rtlRevers]}>
            {
                data.map((_, i) => {
                    const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
                    const dotWidth = scrollX.interpolate({
                        inputRange,
                        outputRange: [23, 50, 23],
                        extrapolate: 'clamp',
                    });
                    const opacity = scrollX.interpolate({
                        inputRange,
                        outputRange: [0.2, 1, 0.2],
                        extrapolate: 'clamp',
                    })
                    return (
                        <Animated.View
                            style={[
                                styles.dot, { 
                                    width: dotWidth, 
                                    opacity,
                                }
                            ]}
                            key={i.toString()}
                        />
                    );
                })
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row' 
    },
    dot: {
        height: 4,
        borderRadius: 5,
        backgroundColor: '#53C330',
        marginHorizontal: 4,
    },
})

export default Paginator;
