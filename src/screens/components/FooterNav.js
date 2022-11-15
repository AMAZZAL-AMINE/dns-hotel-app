import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigationState } from '@react-navigation/native';
import homeBold from '../../assets/images/homebold.png'
import homeLight from '../../assets/images/homelight.png'
import timeBold from '../../assets/images/timebold.png'
import timeLight from '../../assets/images/timelight.png'
import walletBold from '../../assets/images/walletbold.png'
import walletLight from '../../assets/images/walletlight.png'
import messageLight from '../../assets/images/messagelight.png'
import i18n from 'i18next';
import { useIsFocused } from "@react-navigation/native";

export default function FooterNav({ navigation }) {
  const screenName = useNavigationState((state) => state.routes[state.index].name)
  const [rtl, setRtl] = useState(false);
  const rtlBox = rtl && { flexDirection: 'row-reverse' };
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
    <View style={[styles.flexFooter, rtlBox]}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={styles.iconStyle1}>
        <Image
          style={screenName == "Home" ? styles.iconStyleBold : styles.iconStyle}
          source={screenName == "Home" ? homeBold : homeLight}
        />
        <Text style={styles.iconStyle1}>
          {i18n.t("tapBarBottom.home")}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("DeclarationsIndex")}
        style={styles.iconStyle1}>
        <Image
          style={screenName == "DeclarationsIndex" ? styles.iconStyleBold : styles.iconStyle}
          source={screenName == "DeclarationsIndex" ? timeBold : timeLight}
        />
        <Text style={styles.iconStyle1}>
          {i18n.t("tapBarBottom.demandes")}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Transactions')}
        style={styles.iconStyle1}>
        <Image
          style={screenName == "Transactions" ? styles.iconStyleBold : styles.iconStyle}
          source={screenName == "Transactions" ? walletBold : walletLight}
        />
        <Text style={styles.iconStyle1}>
          {i18n.t("tapBarBottom.transaction")}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Suports')}
        style={styles.iconStyle1}>
        <Image
          style={screenName == "Suports" ? styles.iconStyleBold : styles.iconStyle}
          source={messageLight}
        />
        <Text style={styles.iconStyle1}>
          {i18n.t("tapBarBottom.message")}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  flexFooter: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    padding: 13,
    borderTopColor: '#e6e6e6',
    borderTopWidth: 0.7,
  },
  iconStyle: {
    width: 20.02,
    height: 20,
    resizeMode: 'contain',
    marginBottom: 7,
  },
  iconStyleBold: {
    width: 20.02,
    height: 20,
    resizeMode: 'contain',
    marginBottom: 7,
  },
  iconStyle1: {
    fontSize: 9,
    color: '#A3A3A3',
    alignItems: 'center',
    fontFamily: 'MetropoliceLight',
  },
  iconHomeStyle: {
    fontSize: 31,
    color: '#fff',
    alignItems: 'center',
  },
  bocahaomeIcon: {
    backgroundColor: '#33CC66',
    width: 50,
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowOpacity: 0.9,
    shadowRadius: 4.65,
    elevation: 3,
  }
})
