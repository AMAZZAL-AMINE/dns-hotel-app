import { StyleSheet, View, Text, FlatList, Animated } from 'react-native'
import React, { useState, useRef } from 'react';
import sliders from './sliders';
import OnboardingItems from './OnboardingItems';
import Paginator from './Paginator';
import NextButton from './NextButton';
import i18n from 'i18next';


export default function Onboarding({ navigation }) {
    const [currentIndex, seCurrentIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    const slidesRef = useRef(null);
    const viewableItemsChanged = useRef(({ viewableItems }) => {
        seCurrentIndex(viewableItems[0].index);
    }).current;

    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
    const scrollTo = () => {
        if (currentIndex < sliders.length - 1) {
            slidesRef.current.scrollToIndex({ index: currentIndex + 1 });
        }
    }
    const terminiOnb = () => {
        if (currentIndex >= 2) {
            return (
                <View style={styles.containerBtn}>
                    <Text onPress={() => navigation.navigate("LoginIndex")} style={styles.button}>
                        {i18n.t("introduction.next")}
                    </Text>
                </View>
            )
        } else {
            return (
                <NextButton
                    scrollTo={scrollTo}
                    percentage={(currentIndex + 1) * (100 / sliders.length)}
                />
            )
        }
    }
    return (
        <View style={styles.container}>
            <View style={{ flex: 3 }}>
                <FlatList
                    data={sliders}
                    renderItem={({ item }) => <OnboardingItems item={item} />}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    bounces="false"
                    keyExtractor={(item) => item.id}
                    onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
                        useNativeDriver: false,
                    })}
                    scrollEventThrottle={32}
                    onViewableItemsChanged={viewableItemsChanged}
                    viewabilityConfig={viewConfig}
                    ref={slidesRef}
                />
            </View>
            <Paginator
                data={sliders}
                scrollX={scrollX}
            />
            {terminiOnb()}
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    containerBtn : {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#53C330',
        padding: 15,
        width: 340,
        color: 'white',
        textAlign: 'center',
        borderRadius: 5,
        fontWeight: '500',
        fontSize: 14,
        fontFamily: 'MetropoliceLight',
    },
})