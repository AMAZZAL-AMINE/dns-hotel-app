import { View, StyleSheet, ScrollView } from 'react-native'
import React from 'react';
import cancelIcon from '../../assets/images/anul.png'
import DeclarationProps from './eeclarationItems/DeclarationProps';

export default function InProgress() {

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* default card  */}
        <DeclarationProps
          date={"11-02-2022"}
          time={"16:15"}
          actionIcon={cancelIcon}
          type={"Alvéoles"}
          qty={1000}
          price={1.50}
          total={1500}
          canCncel={true}
          isFree={false}
          func={() => alert("annuler")}
        />
        {/*this card is for  if the offre is free  */}
        <DeclarationProps
          date={"11-02-2022"}
          time={"16:15"}
          actionIcon={cancelIcon}
          type={"Alvéoles"}
          qty={1000}
          canCncel={true}
          isFree={true}
          func={() => alert("annuler")}
        />
        {/*this card is for  if the the`s a suggestion price  */}
        <DeclarationProps
          date={"11-02-2022"}
          time={"16:15"}
          actionIcon={cancelIcon}
          type={"Alvéoles"}
          SuggestedPrice={true}
          newPrice={5000}
          qty={1000}
          price={1.50}
          total={1200}
          canCncel={true}
          func={() => alert("annuler")}
          totalSuggest={5000}
        />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
})