import { View, StyleSheet, ScrollView } from 'react-native'
import React from 'react';
import deleteIcon from '../../assets/images/delet.png'
import DeclarationProps from './eeclarationItems/DeclarationProps';

export default function Cancel() {
  return (
    <View style={styles.container}>
      <ScrollView>
      <DeclarationProps
          date={"11-02-2022"}
          time={"16:15"}
          actionIcon={deleteIcon}
          type={"Alvéoles"}
          qty={1000}
          price={1.50}
          total={1500}
          canCncel={false}
          isFree={false}
          func={() => alert("delete")}
        />
        {/*this card is for  if the offre is free  */}
        <DeclarationProps
          date={"11-02-2022"}
          time={"16:15"}
          actionIcon={deleteIcon}
          type={"Alvéoles"}
          qty={1000}
          canCncel={false}
          isFree={true}
          func={() => alert("delete")}
        />
        {/*this card is for  if the the`s a suggestion price  */}
        <DeclarationProps
          date={"11-02-2022"}
          time={"16:15"}
          actionIcon={deleteIcon}
          type={"Alvéoles"}
          SuggestedPrice={true}
          newPrice={5000}
          qty={1000}
          price={1.50}
          total={1200}
          canCncel={false}
          func={() => alert("delete")}
          totalSuggest={36700}
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