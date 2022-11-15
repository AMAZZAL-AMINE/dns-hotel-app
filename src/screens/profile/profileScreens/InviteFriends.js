import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import InviteFriendIcon from '../../../assets/images/addFriend.png'
import CopyIcon from '../../../assets/images/copy.png';
import textIcon from '../../../assets/images/textIcon.png';
import whatssapIcon from '../../../assets/images/whatsapIcon.png';
import sharIcon from '../../../assets/images/sharIcon.png';
import i18n from 'i18next';
import { useIsFocused } from "@react-navigation/native";

export default function InviteFriends() {
  const [rtl, setRtl] = useState(false);
  const rtlBox = rtl && { flexDirection: 'row-reverse' };
  const rtlIcon = rtl && { marginRight: 0, marginLeft: 60 };
  const isFocused = useIsFocused();
  useEffect(()   => {
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
    <View
      style={styles.container}>
      <ScrollView>
        <View
          style={styles.contentSection}>
          <Image
            source={InviteFriendIcon}
            style={styles.imageInvite}
          />
          <Text
            style={styles.textTtile}>
            {i18n.t("inviteFriends.desc")}
          </Text>
          <View
            style={styles.getUrlBox}>
            <Text
              style={styles.textUrlTitle}>
              {i18n.t("inviteFriends.copieText")}
            </Text>
            <View
              style={styles.copyLinkBox}>
              <Text
                style={styles.urlCopy}>
                recycloo.ma......./SEF5421
              </Text>
              <TouchableOpacity>
                <Image
                  source={CopyIcon}
                  style={styles.copyIcon}
                />
              </TouchableOpacity>

            </View>
          </View>
          <View style={[styles.sharsMood, rtlBox]}>
            <TouchableOpacity
              style={styles.sharBox}>
              <Image
                source={textIcon}
                style={styles.sharMoodIcon}
              />
              <Text style={styles.textBox}>
              {i18n.t("inviteFriends.msg")}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.sharBox}>
              <Image
                source={whatssapIcon}
                style={styles.sharMoodIcon}
              />
              <Text style={styles.textBox}>
              {i18n.t("inviteFriends.wtsp")}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.sharBox}>
              <Image
                source={sharIcon}
                style={styles.sharMoodIcon}
              />
              <Text style={styles.textBox}>
              {i18n.t("inviteFriends.shar")}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.textFooter}>
          {i18n.t("inviteFriends.textFooter")}
        </Text>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentSection: {
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textBox: {
    fontSize: 12,
    fontFamily: 'MetropoliceMedium',
    letterSpacing: 0.5,

  },
  imageInvite: {
    width: 133.13,
    height: 87.14,
    marginTop: 30,
  },
  textTtile: {
    fontSize: 14,
    marginTop: 50,
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'MetropoliceLight',
    color: '#262626',
    lineHeight: 25,
    letterSpacing: 0.5,
  },
  getUrlBox: {
    marginTop: 24,
  },
  textUrlTitle: {
    fontSize: 15,
    marginBottom: 1,
    color: '#262626',
    textAlign: 'center',
    fontFamily: 'MetropoliceSemiBold',
    marginTop: 20,
  },
  copyLinkBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#D9D9D9',
    padding: 16,
    marginTop: 20,
    borderRadius: 50,
    paddingHorizontal: 24,
  },
  urlCopy: {
    color: '#A3A3A3',
    marginRight: 40,
    fontFamily: 'MetropoliceLight',
  },
  copyIcon: {
    width: 20,
    height: 20,
  },
  sharsMood: {
    marginTop: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: "100%",
  },
  sharBox: {
    shadowColor: "#888888",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 5,
    backgroundColor: '#fff',
    width: 112,
    height: 112,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    marginBottom: 10,
  },
  sharMoodIcon: {
    width: 38,
    height: 38,
    marginBottom: 20,
  },
  textFooter: {
    textAlign: 'center',
    marginHorizontal: 30,
    color: '#A3A3A3',
    marginTop: 50,
    fontSize: 11,
    lineHeight: 22,
    fontFamily: 'MetropoliceLight',
    letterSpacing: 0.5,
  },
})