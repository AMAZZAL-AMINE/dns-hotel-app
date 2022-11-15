import React, { useEffect, useState } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import i18n from 'i18next';
import printerIcon from '../assets/images/printer.png';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Language from '../screens/Language';
import LanguageP from '../screens/profile/profileScreens/LanguageP';
import Onboarding from '../screens/Onboarding/Onboarding';
import Login from '../screens/login/Login';
import SignIn from '../screens/login/SignIn';
import Register from '../screens/login/Register';
import VerificationUser from '../screens/login/VerificationUser';
import EnAttent from '../screens/login/EnAttent';
import GetEmail from '../screens/ChanginPassword/GetEmail';
import VerifyEmail from '../screens/ChanginPassword/VerifyEmail';
import ChangePassword from '../screens/ChanginPassword/ChangePassword';
import Done from '../screens/ChanginPassword/Done';
import CategoryDetails from '../screens/home/categories/CategoryDetails';
import DeclaredSuccess from '../screens/home/declarationDetails/DeclaredSuccess';
import ImageUploadedView from '../screens/home/declarationDetails/ImageUploadedView';
import DeclarationEscriptoion from '../screens/home/declarationDetails/DeclarationEscriptoion';
import DeclarationsIndex from '../screens/declarations/DeclarationsIndex';
import Notification from '../screens/notifications/Notification';
import Message from '../screens/messages/Message';
import Profile from '../screens/profile/Profile';
import Emptytransactions from '../screens/transactions/Emptytransactions';
import PrinttransactionsInvoice from '../screens/transactions/PrinttransactionsInvoice';
import EditProfile from '../screens/profile/editProfile/EditProfile';
import TC from '../screens/profile/profileScreens/TC';
import Politique from '../screens/profile/profileScreens/Politique';
import Question from '../screens/profile/profileScreens/Question';
import Support from '../screens/profile/profileScreens/Support';
import InviteFriends from '../screens/profile/profileScreens/InviteFriends';

import { HomeBottomTab } from './BottomTab'
import Chat from '../screens/messages/Chat';
import { useIsFocused } from '@react-navigation/native';
import BusinessDetails from '../screens/login/BusinessDetails';
import ProfileIcon from '../assets/images/profile-icon.png'

const Stack = createNativeStackNavigator();
const RootStack = () => {
    const isFocused = useIsFocused();
    const [rtl, setRtl] = useState(false)
    useEffect(() => {
        if (isFocused) {
            if (i18n.language == "ar") {
                setRtl(true);
            } else {
                setRtl(false);
            }
        }
    }, [isFocused]);
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                gestureEnabled: true,
                gestureDirection: 'horizontal',
                animation: "fade_from_bottom",
                statusBarColor: "#53C330",
            }}>
            <Stack.Screen name="Language" component={Language} />
            <Stack.Screen name="Onboarding" component={Onboarding} />
            <Stack.Screen name="LoginIndex" component={Login} />
            <Stack.Screen name="Login" component={SignIn} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="BusinessDetails" component={BusinessDetails} />
            <Stack.Screen name="VerificationPhone" component={VerificationUser} />
            <Stack.Screen name="EnAttent" component={EnAttent} />
            <Stack.Screen name="ChangePasswordIndex" component={GetEmail} />
            <Stack.Screen name="VerifyEmail" component={VerifyEmail} />
            <Stack.Screen name="ChangePassword" component={ChangePassword} />
            <Stack.Screen name="Done" component={Done} />
            <Stack.Screen name="Home" component={HomeBottomTab} />
            <Stack.Screen
                options={{
                    headerShown: true,
                    title: '',
                    headerStyle: {
                        presentation: 'modal',
                    },
                    headerTransparent: true,
                }} name="CategoryDetail" component={CategoryDetails} />
            <Stack.Screen
                name="InviteFriends"
                options={{
                    headerShown: true,
                    title: i18n.t("headerTitles.inviteFrient"),
                    headerTitleAlign: 'center',
                    headerTintColor: '#000',
                    headerShadowVisible: false,
                    headerTitleStyle: {
                        color: '#53C330',
                        fontFamily: 'MetropoliceMedium',
                        letterSpacing: 0.5,
                        fontSize: 17,
                    },
                }}
                component={InviteFriends} />
            <Stack.Screen name="LanguageP"
                options={{
                    headerShown: true,
                    title: i18n.t("headerTitles.lang"),
                    headerTitleAlign: 'center',
                    headerTintColor: '#000',
                    headerShadowVisible: false,
                    headerTitleStyle: {
                        color: '#53C330',
                        fontFamily: 'MetropoliceMedium',
                        letterSpacing: 0.5,
                        fontSize: 17,
                    },
                }}
                component={LanguageP} />
            <Stack.Screen name="ImageUploadedView"
                options={{
                    headerShown: true,
                    title: i18n.t("headerTitles.addImage"),
                    headerTitleAlign: 'center',
                    headerTintColor: '#000',
                    headerShadowVisible: false,
                    headerTitleStyle: {
                        color: '#53C330',
                        fontFamily: 'MetropoliceMedium',
                        letterSpacing: 0.5,
                        fontSize: 17,
                    },
                }}
                component={ImageUploadedView} />
            <Stack.Screen name="DeclarationEscriptoion"
                options={{
                    headerShown: true,
                    title: i18n.t("headerTitles.desc"),
                    headerTitleAlign: 'center',
                    headerTintColor: '#000',
                    headerShadowVisible: false,
                    headerTitleStyle: {
                        color: '#53C330',
                        fontFamily: 'MetropoliceMedium',
                        letterSpacing: 0.5,
                        fontSize: 17,
                    },
                }}
                component={DeclarationEscriptoion} />
            <Stack.Screen name="DeclarationSuccess" component={DeclaredSuccess} />
            <Stack.Screen
                options={{
                    headerShown: true,
                    title: i18n.t("headerTitles.offers"),
                    headerTitleAlign: 'center',
                    headerTintColor: '#000',
                    headerShadowVisible: false,
                    headerTitleStyle: {
                        color: '#53C330',
                        fontFamily: 'MetropoliceMedium',
                        letterSpacing: 0.5,
                        fontSize: 17,
                    },
                }}
                name="DeclarationsIndex"
                component={DeclarationsIndex} />
            <Stack.Screen
                options={{
                    headerShown: true,
                    title: i18n.t("headerTitles.notification"),
                    headerTitleAlign: 'center',
                    headerTintColor: '#000',
                    headerShadowVisible: false,
                    headerTitleStyle: {
                        color: '#53C330',
                        fontFamily: 'MetropoliceMedium',
                        letterSpacing: 0.5,
                        fontSize: 17,
                    },
                }}
                name="Notifications" component={Notification} />
            <Stack.Screen
                options={{
                    headerShown: true,
                    title: i18n.t("headerTitles.message"),
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        color: '#53C330',
                        fontFamily: 'MetropoliceMedium',
                        letterSpacing: 0.5,
                        fontSize: 17,
                    },
                    headerTintColor: '#000',
                    headerShadowVisible: false,
                }}
                name="Suports" component={Message} />
            <Stack.Screen
                options={{
                    headerShown: true,
                    title: i18n.t("headerTitles.chat"),
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        color: '#53C330',
                        fontFamily: 'MetropoliceMedium',
                        letterSpacing: 0.5,
                        fontSize: 17,
                    },
                    headerTintColor: '#000',
                    headerShadowVisible: false,
                }}
                name="Chat" component={Chat} />
            <Stack.Screen
                options={{
                    headerShown: true,
                    title: '',
                    headerStyle: {
                        presentation: 'modal',
                    },
                    headerTransparent: true,
                }}
                name="Profile" component={Profile} />
            <Stack.Screen
                options={{
                    headerShown: true,
                    title: i18n.t("headerTitles.transaction"),
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        color: '#53C330',
                        fontFamily: 'MetropoliceMedium',
                        letterSpacing: 0.5,
                        fontSize: 17,
                    },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                            <Image
                                style={{ width: 25, height: 25, marginHorizontal:15 }}
                                source={ProfileIcon}
                            />
                        </TouchableOpacity>
                    ),
                }}
                name="Emptytransactions" component={Emptytransactions} />

            <Stack.Screen
                options={{
                    headerShown: true,
                    title: i18n.t("headerTitles.details"),
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        color: '#53C330',
                        fontFamily: 'MetropoliceMedium',
                        letterSpacing: 0.5,
                        fontSize: 17,
                    },
                    headerTintColor: '#000',
                    headerShadowVisible: false,
                    headerRight: () => (
                        <TouchableOpacity onPress={() => alert("printing this screen")}>
                            <Image
                                style={{ width: 24.05, height: 26.03 }}
                                source={printerIcon}
                            />
                        </TouchableOpacity>
                    )
                }}
                name="PrinttransactionsInvoice" component={PrinttransactionsInvoice} />
            <Stack.Screen
                options={{
                    headerShown: true,
                    title: i18n.t("headerTitles.editProfile"),
                    headerTitleStyle: {
                        color: '#53C330',
                        fontFamily: 'MetropoliceMedium',
                        letterSpacing: 0.5,
                        fontSize: 17,
                    },
                    headerTitleAlign: 'center',
                    headerTintColor: '#262626',
                    headerShadowVisible: false,
                }}
                name="EditeProfile" component={EditProfile} />
            <Stack.Screen
                options={{
                    headerShown: true,
                    title: i18n.t("headerTitles.termsConditions"),
                    headerTitleStyle: {
                        color: '#53C330',
                        fontFamily: 'MetropoliceMedium',
                        letterSpacing: 0.5,
                        fontSize: 17,
                    },
                    headerTitleAlign: 'center',
                    headerTintColor: '#53C330',
                    headerShadowVisible: false,
                }}
                name="TC" component={TC} />
            <Stack.Screen
                options={{
                    headerShown: true,
                    title: i18n.t("headerTitles.politiq"),
                    headerTitleStyle: {
                        color: '#53C330',
                        fontFamily: 'MetropoliceMedium',
                        letterSpacing: 0.5,
                        fontSize: 17,
                    },
                    headerTitleAlign: 'center',
                    headerTintColor: '#53C330',
                    headerShadowVisible: false,
                }}
                name="Politique" component={Politique} />
            <Stack.Screen
                options={{
                    headerShown: true,
                    title: i18n.t("headerTitles.questions"),
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        color: '#53C330',
                        fontFamily: 'MetropoliceMedium',
                        letterSpacing: 0.5,
                        fontSize: 17,
                    },
                    headerTintColor: '#000',
                    headerShadowVisible: false,
                    headerTitleStyle: {
                        color: '#53C330',
                    },
                }}
                name="Question" component={Question} />
            <Stack.Screen
                options={{
                    headerShown: true,
                    title: i18n.t("headerTitles.support"),
                    headerTitleStyle: {
                        color: '#53C330',
                        fontFamily: 'MetropoliceMedium',
                        letterSpacing: 0.5,
                        fontSize: 17,
                    },
                    headerTitleAlign: 'center',
                    headerTintColor: '#000',
                    headerShadowVisible: false,
                }}
                name="Support" component={Support} />
        </Stack.Navigator>
    )
}
export default RootStack;