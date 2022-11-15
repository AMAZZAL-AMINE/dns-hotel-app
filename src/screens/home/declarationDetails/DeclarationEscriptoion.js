import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";
import React, {useState, useEffect} from "react";
import { RadioButton } from 'react-native-paper';
import { schema, defaultValue, handleSubmit } from "./services/DeclarationEscriptoion.services";
import { Formik } from "formik";
import i18n from "i18next";
import { useIsFocused } from "@react-navigation/native";

export default function DeclarationEscriptoion({ navigation }) {
  const [checked, setChecked] = React.useState(null);
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
  }, [isFocused]);
  return (
    <Formik
      initialValues={defaultValue}
      validationSchema={schema}
      onSubmit={(values) => handleSubmit(values, navigation)}
    >
      {(props) => (
        <View style={styles.container}>
          <ScrollView>
            <View style={styles.descBoxContainer}>
              <View style={styles.descFiel}>
                <Text style={styles.descTextTitle}>
                  {i18n.t("declarationRegister.desc")}  <Text style={styles.textDescMini}>( {i18n.t("declarationRegister.option")})</Text>
                </Text>
                <TextInput
                  style={[styles.textInputDes, rtlText]}
                  placeholderTextColor="#D2D7D4"
                  placeholder= {i18n.t("declarationRegister.write")}
                  keyboardAppearance="light"
                  onChangeText={props.handleChange("desc")}
                  onBlur={props.handleBlur("desc")}
                  value={props.values.desc}
                />
              </View>
              {props.errors.desc ?
                <Text style={[styles.errorText, rtlText]}>
                  {props.errors.desc}
                </Text>
                : null}
              <TouchableOpacity
                onPress={() => setChecked(!checked)}
                style={[styles.inputBox, rtlBox]}>
                <Text style={styles.termsTextDesc}>
                {i18n.t("declarationRegister.freeText")}
                </Text>
                <RadioButton
                  color="#53c330"
                  uncheckedColor="#A3A3A3"
                  value="gratuit"
                  status={checked ? 'checked' : 'unchecked'}
                  onPress={() => setChecked(!checked)}
                />
              </TouchableOpacity>
              <View style={[styles.inputBox, rtlBox]}>
                <Text style={styles.inputTextBtn}>
                {i18n.t("declarationRegister.qtyKg")}
                </Text>
                <TextInput
                  style={[styles.inputField, rtlText]}
                  placeholderTextColor="#A3A3A3"
                  placeholder={i18n.t("declarationRegister.enter")}
                  keyboardAppearance="light"
                  keyboardType="numeric"
                  onChangeText={props.handleChange("qty")}
                  onBlur={props.handleBlur("qty")}
                  value={props.values.qty}
                />
              </View>
              {props.errors.qty ?
                <Text style={[styles.errorText, rtlText]}>
                  {props.errors.qty}
                </Text>
                : null}

              <View style={[styles.inputBox, rtlBox]}>
                <Text style={styles.inputTextBtn}>
                {i18n.t("declarationRegister.prix")}
                </Text>
                <TextInput
                  style={[styles.inputField, rtlText]}
                  placeholderTextColor="#A3A3A3"
                  placeholder={i18n.t("declarationRegister.enter")}
                  keyboardAppearance="light"
                  keyboardType="numeric"
                  onChangeText={props.handleChange("price")}
                  onBlur={props.handleBlur("price")}
                  value={props.values.price}
                />
              </View>
              {props.errors.price ?
                <Text style={[styles.errorText, rtlText]}>
                  {props.errors.price}
                </Text>
                : null}
              <View style={[styles.inputBox, rtlBox]}>
                <Text style={styles.inputTextBtn}>
                {i18n.t("declarationRegister.address")}
                </Text>
                <TextInput
                  style={styles.inputField}
                  placeholderTextColor="#A3A3A3"
                  placeholder={i18n.t("declarationRegister.enter")}
                  keyboardAppearance="light"
                  keyboardType="numeric"
                  onChangeText={props.handleChange("address")}
                  onBlur={props.handleBlur("address")}
                  value={props.values.address}
                />
              </View>
              {props.errors.address ?
                <Text style={[styles.errorText, rtlText]}>
                  {props.errors.address}
                </Text>
                : null}
              <View style={[styles.inputBox, rtlBox]}>
                <Text style={styles.inputTextBtn}>
                {i18n.t("declarationRegister.city")}
                </Text>
                <TextInput
                  style={styles.inputField}
                  placeholderTextColor="#A3A3A3"
                  placeholder={i18n.t("declarationRegister.enter")}
                  keyboardAppearance="light"
                  keyboardType="numeric"
                  onChangeText={props.handleChange("city")}
                  onBlur={props.handleBlur("city")}
                  value={props.values.city}
                />
              </View>
              {props.errors.city ?
                <Text style={[styles.errorText, rtlText]}>
                  {props.errors.city}
                </Text>
                : null}
            </View>
          </ScrollView>
          <View style={styles.btnBoxDec}>
            <Text
              onPress={props.handleSubmit}
              style={styles.btnDeclar}>
                {i18n.t("declarationRegister.btn")}
            </Text>
          </View>
        </View>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  termsTextDesc: {
    fontSize: 13,
    fontFamily: "MetropoliceSemiBold",
    color: '#000',
    letterSpacing: 0.5,
  },
  descFiel: {
    backgroundColor: "white",
    shadowColor: "#888888",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 5,
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  inputBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    shadowColor: "#888888",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 5,
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 20,
    height: 60,
    marginBottom: 5,
  },
  inputField: {
    maxWidth: "100%",
    height: "100%",
    color: "black",
    fontSize: 13,
    fontFamily: "MetropoliceLight",
    letterSpacing: 0.5,
    textAlign: 'right'
  },
  inputTextBtn: {
    color: "#262626",
    fontSize: 13,
    fontFamily: "MetropoliceSemiBold",
    letterSpacing: 0.5,
    textAlign: 'left'
  },
  descTextTitle: {
    fontFamily: "MetropoliceSemiBold",
    fontSize: 13,
    marginTop: 10,
    color: "#000",
    maxWidth: "100%",
    letterSpacing: 0.5,
  },
  textInputDes: {
    fontSize: 13,
    height: 60,
    fontFamily: "MetropoliceLight",
    letterSpacing: 0.5,
  },
  textDescMini: {
    fontSize: 13,
    color: "#D2D7D4",
    fontFamily: "MetropoliceLight",
    letterSpacing: 0.5,
  },
  descBoxContainer: {
    paddingTop: 10,
    marginHorizontal: 20,
  },
  btnBoxDec: {
    backgroundColor: 'white',
   
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
    backgroundColor: '#53C330',
    borderRadius: 6,
    marginHorizontal: 20,
    padding: 15,
    color: 'white',
    fontFamily: "MetropoliceSemiBold",
    fontSize: 14,
    letterSpacing: 0.5,
  },
  errorText: {
    fontSize: 12,
    color: 'red',
    fontFamily: 'MetropoliceLight',
    marginTop: 10,
  },
});
