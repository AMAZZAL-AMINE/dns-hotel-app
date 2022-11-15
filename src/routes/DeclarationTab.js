import { useState, useEffect } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import InProgress from '../screens/declarations/InProgress';
import Cancel from '../screens/declarations/Cancel';
import Ended from '../screens/declarations/Ended';
import { useIsFocused } from "@react-navigation/native";
import i18n from 'i18next';

const Tab = createMaterialTopTabNavigator();

function DeclarationTab() {
  const [details, setDetails] = useState(false);
  const [rtl, setRtl] = useState(false);
  const rtlBox = rtl && { marginLeft: 80 };
  const rtlText = rtl && { marginLeft: 0, marginRight: 10 }
  const isFocused = useIsFocused();
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
    <Tab.Navigator
      initialRouteName='DeclarationsIndex'
      getLabelText={({ route }) => route.title}
      screenOptions={{
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
          transform: [{ scaleX: rtl == true ? -1 : 1 }],
          width: "78%",
          alignSelf: rtl ? "flex-end" : "flex-start"
        },
        //  tabBarContentContainerStyle :rtl ? rtlBox : {marginRight: 80,},
        tabBarIndicatorStyle: {
          backgroundColor: '#53C330',
          borderBottomColor : "#53C330"
        },
        tabBarContentContainerStyle : {
          justifyContent : "center",
          alignSelf : "center",

        },
        tabBarLabelStyle: {
          fontSize: 14,
          fontFamily: 'MetropoliceSemiBold',
        },
        tabBarPressColor: '#fff',
        swipeEnabled: true,
        tabBarBounces: true,
        upperCaseLabel: false,
        activeTintColor: 'white',
        inactiveTintColor: '#000',
        showLabel: true,
        showIcon: false,
        style: {
          backgroundColor: '#FAFAFA',
          borderTopWidth: 0,
          elevation: 0,
          marginTop: 30,
        },
      }}
    //remove uppercase of label
    >
      <Tab.Screen
        options={{
          tabBarLabel: i18n.t("demandes.inProgressTItle"),
          tabBarItemStyle: {
            transform: [{ scaleX: rtl == true ? -1 : 1 }]
          },
          tabBarInactiveTintColor : "#A3A3A3",
          tabBarActiveTintColor : "#53C330"
        }}
        name="Encours"
        component={InProgress} />
      <Tab.Screen
        options={{
          tabBarLabel: i18n.t("demandes.ended"),
          tabBarItemStyle : {
            transform : [{ scaleX : rtl == true ? -1 : 1 }]
          },
          tabBarInactiveTintColor : "#A3A3A3",
          tabBarActiveTintColor : "#53C330"
        }}

        name="Termine"
        component={Ended}
      />
      <Tab.Screen
        options={{
          tabBarLabel: i18n.t("demandes.canceled"),
          tabBarItemStyle : {
            transform : [{ scaleX : rtl == true ? -1 : 1 }]
          },
          tabBarInactiveTintColor : "#A3A3A3",
          tabBarActiveTintColor : "#53C330"
        }}

        name="Annuler"
        component={Cancel}
      />
    </Tab.Navigator>
  );
}

export default DeclarationTab;