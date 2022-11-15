import { TouchableOpacity } from 'react-native';
import { Image, StyleSheet } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/home/Home';
import Transactions from '../screens/transactions/Transactions';
import DeclarationsIndex from '../screens/declarations/DeclarationsIndex';
import Message from '../screens/messages/Message';
import i18n from '../locales';
import homeBold from '../assets/images/homebold.png'
import homeLight from '../assets/images/homelight.png'
import timeBold from '../assets/images/timebold.png'
import timeLight from '../assets/images/timelight.png'
import walletBold from '../assets/images/walletbold.png'
import walletLight from '../assets/images/walletlight.png'
import messageLight from '../assets/images/messagelight.png'
import messageBold from '../assets/images/messageBold.png';
import { useIsFocused } from '@react-navigation/native';
import ProfileIcon from '../assets/images/profile-icon.png'

const Tab = createBottomTabNavigator();
export function HomeBottomTab({navigation}) {
    const isFocused = useIsFocused();
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: "red",
                headerShown: false,
                gestureEnabled: true,
                gestureDirection: 'horizontal',
                tabBarStyle: {
                    flexDirection: "row-reverse",
                    transform: [{ scaleX: i18n.language == "ar" ? -1 : 1 }],
                    height: 60,
                    paddingBottom: 6
                },
            }}>
            <Tab.Screen
                options={{
                    tabBarLabelStyle: {
                        transform: [{ scaleX: i18n.language == "ar" ? -1 : 1 }]
                    },
                    tabBarActiveTintColor: "#53C330",
                    title: i18n.t("tapBarBottom.home"),
                    tabBarIcon: ({ focused }) => (<Image style={styles.iconTab} source={focused ? homeBold : homeLight} />)
                }}
                name='HomeTwo'
                component={Home}
            />
            <Tab.Screen
                name='DeclarationsIndex'
                component={DeclarationsIndex}
                options={{
                    headerShown: true,
                    title: i18n.t("tapBarBottom.demandes"),
                    tabBarLabelStyle: {
                        transform: [{ scaleX: i18n.language == "ar" ? -1 : 1 }]
                    },
                    tabBarActiveTintColor: "#53C330",
                    headertitle: i18n.language == "fr" ? "Mes offres" : "عروضي",
                    headerTitleAlign: 'center',
                    headerTintColor: '#000',
                    headerShadowVisible: false,
                    tabBarLabelStyle: {
                        transform: [{ scaleX: i18n.language == "ar" ? -1 : 1 }]
                    },
                    headerTitleStyle: {
                        color: '#53C330',
                        fontFamily: 'MetropoliceMedium',
                        letterSpacing: 0.5,
                        fontSize: 17,
                    },
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                            <Image
                                style={{ width: 25, height: 25, marginHorizontal:15 }}
                                source={ProfileIcon}
                            />
                        </TouchableOpacity>
                    ),
                    tabBarIcon: ({ focused }) => (<Image style={styles.iconTab} source={focused ? timeBold : timeLight} />)

                }}
            />
            <Tab.Screen
                name='Transactions'
                component={Transactions}
                options={{
                    headerShown: true,
                    headerTitle: i18n.language == "fr" ? 'Transactions' : "معاملات",
                    title: i18n.t("tapBarBottom.transaction"),
                    tabBarItemStyle: {
                        fontFamily: 'MetropoliceMedium',
                    },
                    tabBarActiveTintColor: "#53C330",
                    tabBarLabelStyle: {
                        transform: [{ scaleX: i18n.language == "ar" ? -1 : 1 }]
                    },
                    headerTitleStyle: {
                        color: '#53C330',
                        fontFamily: 'MetropoliceMedium',
                        letterSpacing: 0.5,
                        fontSize: 17,
                    },
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                            <Image
                                style={{ width: 25, height: 25, marginHorizontal:15 }}
                                source={ProfileIcon}
                            />
                        </TouchableOpacity>
                    ),
                    headerTitleAlign: 'center',
                    headerTintColor: '#262626',
                    headerShadowVisible: false,
                    tabBarIcon: ({ focused }) => (<Image style={styles.iconTab} source={focused ? walletBold : walletLight} />)
                }}
            />
            <Tab.Screen
                name='Message'
                component={Message}
                options={{
                    headerShown: true,
                    headerTitle: i18n.language == "fr" ? 'Messages' : "الرسائل",
                    title: i18n.t("tapBarBottom.message"),
                    tabBarItemStyle: {
                        fontFamily: 'MetropoliceMedium',
                    },
                    tabBarActiveTintColor: "#53C330",
                    tabBarLabelStyle: {
                        transform: [{ scaleX: i18n.language == "ar" ? -1 : 1 }]
                    },
                    tabBarBadgeStyle: {
                        transform: [{ scaleX: i18n.language == "ar" ? -1 : 1 }]
                    },
                    headerTitleAlign: 'center',
                    headerTintColor: '#262626',
                    headerTitleStyle: {
                        color: '#53C330',
                        fontFamily: 'MetropoliceMedium',
                        letterSpacing: 0.5,
                        fontSize: 17,
                    },
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                            <Image
                                style={{ width: 25, height: 25, marginHorizontal:15 }}
                                source={ProfileIcon}
                            />
                        </TouchableOpacity>
                    ),
                    tabBarBadge: 1,
                    tabBarIcon: ({ focused }) => (<Image style={styles.iconTab} source={focused ? messageBold : messageLight} />)
                }}
            />
        </Tab.Navigator>
    )
}


const styles = StyleSheet.create({
    iconTab: {
        width: 20.02,
        height: 20,
        resizeMode: 'contain',
    },
    headerTitleStyle: {

    }
})