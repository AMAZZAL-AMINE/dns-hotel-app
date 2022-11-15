import { View, Text, ScrollView, StyleSheet, SafeAreaView, Image, Modal, Pressable } from 'react-native'
import React, { useState, useEffect } from "react";
import Ionicons from '@expo/vector-icons/Ionicons';
import dOneIcon from "../../../assets/images/d1.png";
import addfour from '../../../assets/images/add4.png'
import add from "../../../assets/images/add.png";
import i18n from "i18next";
import { useIsFocused } from "@react-navigation/native";

export default function ImageUploadedView({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [rtl, setRtl] = useState(false);
  const rtlBox = rtl && { flexDirection: 'row-reverse' };
  const rtlText = rtl && { textAlign:'right' };
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
        <View style={styles.descBoxContainer}>
          <View style={styles.uploadImgBox}>
            <Image
              style={styles.imgUploaded}
              source={dOneIcon}
            />
            <Image
              style={styles.imgUploaded}
              source={dOneIcon}
            />
            <Pressable
              style={[styles.button, styles.buttonOpen]}
              onPress={() => setModalVisible(true)}
            >
              <Image
                style={styles.imgUploaded}
                source={addfour}
              />
            </Pressable>
          </View>
          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Image
                  style={styles.modalIcon}
                  source={add}
                />
                <Text
                   style={styles.modalTextTitle}>
                 {i18n.t("modal.uploadPhoto.title")}
                </Text>
                <View style={[styles.followButton, rtlBox]}>
                  <Text
                    style={styles.modelTextBtn}>
                    {i18n.t("modal.uploadPhoto.takePhoto")}
                  </Text>
                  <Ionicons
                    name="camera"
                    size={25}
                    color="#53C330"
                  />
                </View>
                
                <View style={[styles.followButton, rtlBox]}>
                  <Text
                    style={styles.modelTextBtn}>
                    {i18n.t("modal.uploadPhoto.fromGalerie")}
                  </Text>
                  <Ionicons name="image" size={25} color="#53C330" />
                </View>
                <View>
                  <Text
                    style={styles.countTitle}
                    onPress={() => setModalVisible(!modalVisible)}>
                    {i18n.t("modal.uploadPhoto.cancel")}
                  </Text>
                </View>
              </View>
            </View>
          </Modal>
        </View>
      </ScrollView>
      <View style={styles.btnBoxDec}>
        <Text
          onPress={() => navigation.navigate('DeclarationEscriptoion')}
          style={styles.btnDeclar}>
          SUIVANT
        </Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    flex: 1,
    backgroundColor: 'white',
  },
  btnBoxDec: {
    backgroundColor: 'white',
    marginTop: 50,
    paddingBottom: 27,
    paddingTop: 27,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
},
btnDeclar: {
    textAlign: 'center',
    backgroundColor: '#53c330',
    borderRadius: 6,
    marginHorizontal: 20,
    fontFamily: 'MetropoliceLight',
    padding: 15,
    color: 'white',
},

  imgUploaded: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  countTitle: {
    fontSize: 14,
    color: '#53C330',
    marginTop: 40,
    fontFamily : 'MetropoliceLight',
    letterSpacing : 0.5,
  },
  centeredView : {
    backgroundColor: 'rgba(38, 38, 38, 0.5)',
    flex: 1,
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 35,
    alignItems: "center",
    marginHorizontal: 20,
    elevation: 5
  },
  uploadImgBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  followButton: {
    marginTop: 20,
    maxWidth: '100%',
    width: 400,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: "#f8f8f8",
    paddingVertical: 10,
    paddingHorizontal: 20,
    height: 45,
    borderRadius: 8,
    height: 50,
  },
  modalIcon : {
    width: 65.4,
    height: 62.58,
  },
  modalTextTitle : {
    fontSize: 14,
    marginTop: 15,
    fontFamily: 'MetropoliceLight',
    letterSpacing: 0.5,
    marginBottom : 20
  },
  modelTextBtn : {
    fontFamily:'MetropoliceLight',
    letterSpacing: 0.5,
    color: '#262626', 
    fontSize : 14
  }
})

