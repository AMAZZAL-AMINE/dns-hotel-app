import { View, Text, ScrollView, StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import i18n from 'i18next';
import { useIsFocused } from '@react-navigation/native';
import ImageUser from '../../assets/images/profile-icon.png'

export default function Message({ navigation }) {
  const [newMessage, setNewMessage] = useState(null);
  const [sendMsgDate, setSendMsgDate] = useState("Bonjours");
  const sendTheMsg = () => {
    setSendMsgDate(newMessage);
  }
  const [rtl, setRtl] = useState(false);
  const rtlBox = rtl && { flexDirection: 'row-reverse' };
  const rtlIcon = rtl && { paddingLeft: 20, paddingRight: 0 };
  const rtlPlaceHolder = rtl && { textAlign: 'right' };
  const trlClientText = rtl && { alignSelf: 'flex-end' };
  const trlUserText = rtl && { alignSelf: 'flex-start', };
  const isFocused = useIsFocused();
  useEffect(() => {
    if (isFocused) {
      if (i18n.language == "ar") {
        setRtl(true);
      } else {
        setRtl(false);
      }
    }
  }, [isFocused])
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <TouchableOpacity
          onPress={() => navigation.navigate("Chat")}
          style={styles.chatBox}>
          <Image
            style={styles.userImg}
            source={ImageUser}
          />
          <View>
            <Text style={styles.userName}>
              Rich Hassan
            </Text>
            <View style={styles.messageHeader}>
              <Text style={styles.countMessage}>
                2 new messages
              </Text>
              <Text style={styles.msgTime}>
               3h
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  chatBox: {
    flexDirection: 'row',
    alignItems: 'center',
    width: "100%",
    backgroundColor: '#FAFAFA',
    paddingHorizontal: 20,
    paddingVertical: 10,
    maxWidth: "100%"
  },
  messageHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop:5
  },
  userImg: {
    width: 60,
    height: 60,
    marginRight: 15
  },
  userName: {
    fontSize: 18,
    fontFamily: "MetropoliceBold"
  },
  countMessage : {
    fontSize:14,
    fontFamily:"MetropoliceMedium",
    marginRight: 10,
    color:"#A9A9A9",
  },
  msgTime : {
    fontFamily:"MetropoliceMedium",
    color:"#A9A9A9",
  }
})