import { View, Text, Image, Modal, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import UserIcon from '../../assets/images/user23.png';
import i18n from 'i18next';

function ModalProfile({ navigation }) {
  const [modalVisible, setModalVisible] = useState(true);
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <TouchableOpacity
        onPress={() => setModalVisible(!modalVisible)}
        style={styles.centeredView}>
        <View style={styles.modalView}>
          <Image
            style={styles.imgProfile}
            source={UserIcon}
          />
          <Text
            style={styles.modalText}>
            {i18n.t("modal.completProfile.title")}
          </Text>
          <Text
            onPress={() => navigation.navigate('EditeProfile')}
            style={styles.followButtonDes}>
            {i18n.t("modal.completProfile.completBtn")}
          </Text>
          <Text
            style={styles.followButton1Deasc}
            onPress={() => setModalVisible(!modalVisible)}>
            {i18n.t("modal.completProfile.exit")}
          </Text>
        </View>
      </TouchableOpacity>
    </Modal>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  followButton1Deasc: {
    marginTop: 20,
    backgroundColor: 'transparent',
    maxWidth: '100%',
    fontSize: 12,
    width: 150,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 50,
    color: '#A3A3A3',
    textAlign: "center",
    fontFamily: 'MetropoliceMedium',
    borderWidth: 1,
    borderColor: '#A3A3A3',
  },
  followButtonDes: {
    marginTop: 30,
    backgroundColor: '#53C330',
    maxWidth: '100%',
    fontSize: 12,
    width: 150,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 50,
    color: '#fff',
    textAlign: "center",
    fontFamily: 'MetropoliceMedium'
  },
  modalText: {
    textAlign: 'center',
    fontSize: 13,
    marginTop: 20,
    lineHeight: 20,
    color: "#A3A3A3",
    fontWeight: '400',
    fontFamily: 'MetropoliceLight',
    letterSpacing: 0.5,
  },
  imgProfile: {
    width: 70,
    height: 70,
    alignItems: 'center',
    alignSelf: 'center',
    marginLeft: 15,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 35,
    alignItems: "center",
    width: '65%',
  },
});

export default ModalProfile

