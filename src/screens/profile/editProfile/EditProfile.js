import { View, Text, StyleSheet, TextInput, Image, SafeAreaView, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react';
import IconLock from '../../../assets/images/lock.png'
import { Picker } from '@react-native-picker/picker';
import { Formik } from 'formik';
import { schema, defaultValue, handleSubmit } from './services/EditProfile.services'
import { useIsFocused } from "@react-navigation/native";
import i18n from 'i18next';

export default function EditProfile({ navigation }) {
  const [rtl, setRtl] = useState(false);
  const rtlBox = rtl && { flexDirection: 'row-reverse' };
  const rtlText = rtl && { textAlign:'right' };
  const rtlInputPass = rtl && {textAlign:'right', marginRight:20}
  const rtlInputIcon = rtl && {marginRight: 0}
  const isFocused = useIsFocused();

  useEffect(() => {
      if(isFocused){ 
          if (i18n.language == "ar") {
              setRtl(true);
          } else {
              setRtl(false);
          }
      }
  }, [isFocused]);
  return (
    <Formik
      initialValues={defaultValue}
      validationSchema={schema}
      onSubmit={(values) => handleSubmit(values, navigation)}>
      {(props) => (
        <View style={styles.container}>
          <ScrollView>
            <View >
              <View style={styles.containerContent}>
                <View style={{ marginTop: 30 }}>
                  <Text style={styles.labelText}>
                    {i18n.t("editProfile.boutTtile")}
                  </Text>
                  <TextInput
                    style={[styles.textInput, rtlText]}
                    placeholderTextColor="#A3A3A3"
                    placeholder={i18n.t("editProfile.fullName")}
                    onChangeText={props.handleChange('name')}
                    onBlur={props.handleBlur('name')}
                    value={props.values.name}
                  />
                  {props.errors.name ? (
                    <Text style={[styles.error, rtlText]}>{props.errors.name}</Text>
                  ) : null}
                  <TextInput
                    style={[styles.textInput, rtlText]}
                    placeholderTextColor="#A3A3A3"
                    placeholder={i18n.t("editProfile.email")}
                    onChangeText={props.handleChange('email')}
                    onBlur={props.handleBlur('email')}
                    value={props.values.email}
                  />
                  {props.errors.email ? (
                    <Text style={[styles.error, rtlText]}>{props.errors.email}</Text>
                  ) : null}
                  <TextInput
                    style={[styles.textInput, rtlText]}
                    placeholderTextColor="#A3A3A3"
                    placeholder={i18n.t("editProfile.phone")}
                    onChangeText={props.handleChange("phone")}
                    onValueChange={props.handleBlur("phone")}
                    value={props.values.phone}
                  />
                  {props.errors.phone ? (
                    <Text style={[styles.error, rtlText]}>{props.errors.phone}</Text>
                  ) : null}
                  <TextInput
                    style={[styles.textInput, rtlText]}
                    placeholderTextColor="#A3A3A3"
                    placeholder={i18n.t("editProfile.cin")}
                    onChangeText={props.handleChange("cin")}
                    onValueChange={props.handleBlur("cin")}
                    value={props.values.cin}
                  />
                  {props.errors.cin ? (
                    <Text style={[styles.error, rtlText]}>{props.errors.cin}</Text>
                  ) : null}
                </View>
                <View style={{ marginTop: 30 }}>
                  <Text style={styles.labelText}>
                  {i18n.t("editProfile.addressTitle")}
                  </Text>
                  <View style={styles.placeSelectBpx}>
                    <Picker
                      selectedValue={props.values.city}
                      style={[styles.placeSelect, rtlBox]}
                      onValueChange={props.handleChange("city")}
                    >
                      <Picker.Item style={styles.optionLabl} label={i18n.t("editProfile.city")} value="" />
                      <Picker.Item style={styles.optionLabl} label="Agadir" value="Agadir" />
                      <Picker.Item style={styles.optionLabl} label="Taroudant" value="Taroudant" />
                    </Picker>
                  </View>
                  {props.errors.city ? (
                    <Text style={[styles.error, rtlText]}>{props.errors.city}</Text>
                  ) : null}
                  <TextInput
                    style={[styles.textInput, rtlText]}
                    placeholderTextColor="#A3A3A3"
                    placeholder={i18n.t("editProfile.block")}
                    onChangeText={props.handleChange("address")}
                    onValueChange={props.handleBlur("address")}
                    value={props.values.address}
                  />
                  {props.errors.address ? (
                    <Text style={[styles.error, rtlText]}>{props.errors.address}</Text>
                  ) : null}
                </View>

                <View style={{ marginTop: 30 }}>
                  <Text style={styles.labelText}>{i18n.t("editProfile.berthTitle")}</Text>
                  <View style={[styles.dateBerth, rtlBox]}>
                    <TextInput
                      style={[styles.dateTextInput, { marginLeft: 15 }, rtlText]}
                      placeholder={i18n.t("editProfile.dayBerh")}
                      keyboardType="numeric"
                      maxLength={2}
                      onChangeText={props.handleChange("birthDay")}
                      onValueChange={props.handleBlur("birthDay")}
                      value={props.values.birthDay}
                    />
                    <TextInput
                      style={[styles.leftBordTextInp, rtlText]}
                      placeholder={i18n.t("editProfile.berthMonth")}
                      keyboardType="numeric"
                      maxLength={2}
                      onChangeText={props.handleChange("birthMonth")}
                      onValueChange={props.handleBlur("birthMonth")}
                      value={props.values.birthMonth}
                    />
                    <TextInput
                      style={[styles.dateTextInput, { width: 30, marginRight: 8 }, rtlText]}
                      placeholder={i18n.t("editProfile.berthYear")}
                      keyboardType="numeric"
                      maxLength={4}
                      onChangeText={props.handleChange("birthYear")}
                      onValueChange={props.handleBlur("birthYear")}
                      value={props.values.birthYear}
                    />
                  </View>
                  {props.errors.birthDay ? <Text style={[styles.error, rtlText]}>{props.errors.birthDay}</Text>
                    : props.errors.birthMonth ? <Text style={[styles.error, rtlText]}>{props.errors.birthMonth}</Text>
                      : props.errors.birthYear ? <Text style={[styles.error, rtlText]}>{props.errors.birthYear}</Text>
                        : null
                  }
                </View>
                <View style={{ marginTop: 40 }}>
                  <Text style={styles.labelText}>
                    {i18n.t("editProfile.changePasswordTitle")}
                  </Text>
                  <Text style={styles.passTextDesc}>
                    {i18n.t("editProfile.changePasswordDesc")}
                  </Text>
                  <View style={[styles.passBox, rtlBox]} >
                    <Image source={IconLock} style={[styles.iconLock, rtlInputIcon]} />
                    <TextInput
                      placeholderTextColor="#A3A3A3"
                      placeholder={i18n.t("editProfile.password")}
                      secureTextEntry={true}
                      style={[styles.inputPass, rtlInputPass]}
                      onChangeText={props.handleChange("password")}
                      onValueChange={props.handleBlur("password")}
                      value={props.values.password}
                    />
                  </View>
                  {props.errors.password ? (
                    <Text style={[styles.error, rtlText]}>{props.errors.password}</Text>
                  ) : null}
                  <View style={[styles.passBox, rtlBox]}>
                    <Image source={IconLock} style={[styles.iconLock, rtlInputIcon]} />
                    <TextInput
                      placeholderTextColor="#A3A3A3"
                      secureTextEntry={true}
                      placeholder={i18n.t("editProfile.newPassword")}
                      style={[styles.inputPass, rtlInputPass]}
                      onChangeText={props.handleChange("newPassword")}
                      onValueChange={props.handleBlur("newPassword")}
                      value={props.values.newPassword}
                    />
                  </View>
                  {props.errors.newPassword ? (
                    <Text style={[styles.error, rtlText]}>{props.errors.newPassword}</Text>
                  ) : null}
                  <View style={[styles.passBox, rtlBox]} >
                    <Image source={IconLock} style={[styles.iconLock, rtlInputIcon]} />
                    <TextInput
                      placeholderTextColor="#A3A3A3"
                      secureTextEntry={true}
                      placeholder={i18n.t("editProfile.confirmPassword")}
                      style={[styles.inputPass, rtlInputPass]}
                      onChangeText={props.handleChange("confirmPassword")}
                      onValueChange={props.handleBlur("confirmPassword")}
                      value={props.values.confirmPassword}
                    />
                  </View>
                  {props.errors.confirmPassword ? (
                    <Text style={[styles.error, rtlText, {marginBottom:30}]}>{props.errors.confirmPassword}</Text>
                  ) : null}
                </View>
              </View>
            </View>
          </ScrollView>
          <View style={[styles.btnSaved, rtlBox]}>
            <Text
              onPress={props.handleSubmit}
              style={styles.btnSave}>
              {i18n.t("editProfile.submitButton")}
            </Text>
            <Text
              onPress={props.resetForm}
              style={styles.btnDefault}>
              {i18n.t("editProfile.resetButton")}
            </Text>
          </View>
        </View>
      )}
    </Formik>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  containerContent: {
    marginHorizontal: 20,
  },
  labelText: {
    color: 'black',
    fontSize: 17,
    fontFamily: 'MetropoliceSemiBold',
    letterSpacing: 0.5,
  },
  profileImgCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    shadowColor: "lightgray",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 15,
    padding: 20,
    marginTop: 20
  },
  iconLock: {
    width: 18,
    height: 18,
    marginRight: 15,
  },
  selectType: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectBoxS: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imgProfile: {
    width: 86,
    height: 86,
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
  uploadImgBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
  },

  textInput: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#A3A3A3',
    borderRadius: 6,
    marginTop: 15,
    paddingLeft: 16,
    height: 50,
    fontFamily: 'MetropoliceLight',
    letterSpacing: 0.5,
    fontSize: 13,
    marginBottom: 10,
  },
  breakLine: {
    height: 9,
    backgroundColor: '#F3F3F3',
    marginTop: 30,
  },
  placeSelectBpx: {
    padding: 1,
    borderWidth: 1,
    borderColor: '#A3A3A3',
    borderRadius: 6,
    marginTop: 15,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
  inputPass: {
    fontFamily: 'MetropoliceLight',
    letterSpacing: 0.5,
    fontSize: 13,
    width: '90%',
  },
  placeSelect: {
    fontFamily: 'MetropoliceLight',
    color: 'black',
    height: 50,
    letterSpacing: 0.5,
    borderWidth: 1,
    borderColor: '#A3A3A3',
  },
  dateTextInput: {
    fontSize: 13,

    fontFamily: 'MetropoliceLight',
  },
  optionLabl: {
    fontFamily: 'MetropoliceLight',
    fontSize: 13,
    letterSpacing: 0.5,
    marginTop: 15,
  },
  zipBox: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  placeINcity: {
    padding: 1,
    borderWidth: 1,
    borderColor: '#9296A1',
    borderRadius: 6,
    marginTop: 15,

    fontWeight: 'bold',
    color: 'black',
    width: "47%",
    marginRight: 18,
  },
  inputZip: {
    padding: 12,
    borderWidth: 1,
    borderColor: '#9296A1',
    borderRadius: 6,
    marginTop: 15,
    paddingLeft: 20,
    fontWeight: 'bold',
    color: 'black',
    width: "47%",
  },
  dateBerth: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 10,
    borderWidth: 1,
    borderColor: '#9296A1',
    borderRadius: 6,
    marginTop: 15,
    fontWeight: 'bold',
    color: '#A3A3A3',
    height: 50,
  },
  leftBordTextInp: {
    borderLeftColor: '#C4C4C4',
    borderRightColor: '#C4C4C4',
    borderLeftWidth: 1,
    borderRightWidth: 1,
    paddingLeft: 50,
    paddingRight: 50,
    fontFamily: 'MetropoliceLight',
    color: '#A3A3A3',
  },
  passBox: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#A3A3A3',
    borderRadius: 6,
    marginTop: 15,
    paddingLeft: 16,
    height: 50,
    fontFamily: 'MetropoliceLight',
    letterSpacing: 0.5,
    fontSize: 13,
    marginBottom: 10,
  },
  textPassBx: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 13,
  },

  btnSaved: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 30,
    paddingHorizontal: 20,
    marginTop: 20,
    backgroundColor: 'white',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
    width: "100%",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  btnSave: {
    backgroundColor: '#53C330',
    color: 'white',
    borderRadius: 50,
    padding: 10,
    fontSize: 14,
    paddingHorizontal: 30,
    width: "48%",
    textAlign: 'center',
    fontFamily: 'MetropoliceMedium',
    paddingVertical: 14,
  },
  btnDefault: {
    backgroundColor: '#F4F4F4',
    color: '#262626',
    borderRadius: 50,
    padding: 10,
    paddingHorizontal: 30,
    width: "48%",
    paddingVertical: 14,
    textAlign: 'center',
    fontSize: 14,
    fontFamily: 'MetropoliceMedium',
  },
  passTextDesc: {
    color: "#A3A3A3",
    fontSize: 11,
    fontFamily: 'MetropoliceLight',
    marginTop: 5,
    letterSpacing: 0.5,
    lineHeight: 20,
  },
  error: {
    color: 'red',
    fontSize: 12,
    fontFamily: 'MetropoliceLight',
    marginTop: 5,
    fontStyle: 'normal',
    lineHeight: 12,
    letterSpacing: 0.5,
  }
})