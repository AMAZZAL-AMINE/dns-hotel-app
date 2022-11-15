import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import React from 'react';
import Accordin from './QuestionsItems/Accordin';
import { dataSupport, dataPayments, dataOther } from './QuestionsItems/QuestionData';

export default function TC() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <Text style={styles.titleBig}>
            Support d'aide
          </Text>
          {dataSupport.map((item, index) => {
            return (
              <Accordin key={index} title={item.title} desc={item.desc} />
            )
          })}
        </View>
        <View>
          <Text style={styles.titleBig}>
            Modes de paiement et incidents
          </Text>
          {dataPayments.map((item, index) => {
            return (
              <Accordin key={index} title={item.title} desc={item.desc} />
            )
          })}
        </View>
        <View>
          <Text style={styles.titleBig}>
            Autres
          </Text>
          {dataOther.map((item, index) => {
            return (
              <Accordin key={index} title={item.title} desc={item.desc} />
            )
          })}
        </View>
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  titleBig : {
    fontSize: 15,
    fontFamily: 'MetropoliceLight',
    letterSpacing: 0.5,
    color: '#A3A3A3',
    marginHorizontal: 20,
    borderBottomColor: '#e0e0e0',
    borderBottomWidth: 1,
    paddingBottom: 10,
    marginBottom : 20,
  },
})