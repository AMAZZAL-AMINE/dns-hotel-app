import { View, Text, ScrollView, StyleSheet, SafeAreaView, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import i18n from 'i18next';
import { useIsFocused } from '@react-navigation/native';
export default function Chat() {
  const [newMessage, setNewMessage] = useState(null);
  const [sendMsgDate, setSendMsgDate] = useState("Bonjours");
  const sendTheMsg = () => {
    setSendMsgDate(newMessage);
  }
  const [rtl, setRtl] = useState(false);
  const rtlBox = rtl && { flexDirection: 'row-reverse' };
  const rtlIcon = rtl && { paddingLeft: 20,paddingRight:0 };
  const rtlPlaceHolder = rtl && { textAlign:'right' };
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
        <View >
          <Text style={styles.sendMsgDate}>Mar, 09:46 AM</Text>
          <View style={styles.allMessagesBox}>
            <View>
              <Text style={styles.userMessage}>
                {sendMsgDate}
              </Text>
            </View>
            <View>
              <Text style={styles.suportMessage}>
                Salut Hassan, je suis Ali, je
                ferai de mon mieux pour
                répondre à vos questions 😊
                Comment est-ce que je peux
                vous aider aujourd'hui ?
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={[styles.messageBox, rtlBox]}>
        <TextInput
          style={[styles.messageInput, rtlPlaceHolder]}
          value={newMessage}
          onChangeText={setNewMessage}
          placeholder={i18n.t("suportMessage.placeholer")}
          placeholderTextColor={"#A3A3A3"}
        />
        <Icon
          onPress={sendTheMsg}  
          style={[styles.messageIcon, rtlIcon]}
          name="send"
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  messageBox: {
    flexDirection: 'row',
    alignItems: 'center',
    width: "100%",
    backgroundColor: 'white',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
    elevation: 17,
    fontFamily : 'MetropoliceLight',
  },
  messageInput: {
    flex: 1,
    padding: 15,
    paddingLeft: 40,
    fontFamily : "MetropoliceLight",
    letterSpacing : 0.5,
    lineHeight : 20
  },
  messageIcon: {
    color: '#53C330',
    fontSize: 25,
    marginRight: 20,
  },
  sendMsgDate: {
    color: '#A3A3A3',
    textAlign: 'center',
    marginTop: 20,
    fontFamily : 'MetropoliceLight',
    fontSize : 14,
  },
  allMessagesBox: {
    marginTop: 30,
  },
  userMessage: {
    display: 'flex',
    alignSelf: 'flex-end',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginHorizontal: 20,
    borderRadius : 10,
    color: 'white',
    backgroundColor: '#53C330',
    padding: 10,
    height: 'auto',
    fontSize: 13,
    paddingHorizontal: 15,
    fontFamily : 'MetropoliceLight',
    letterSpacing : 0.5,
    lineHeight : 20,
  },
  suportMessage: {
    display: 'flex',
    alignSelf: 'flex-start',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginHorizontal: 20,
    marginRight: 50,
    borderRadius: 10,
    marginTop: 25,
    color: 'black',
    backgroundColor: '#F8F8F8',
    padding: 20,
    height: 'auto',
    fontSize: 13,
    fontFamily : 'MetropoliceLight',
    letterSpacing : 0.5,
    lineHeight : 20

  },
})