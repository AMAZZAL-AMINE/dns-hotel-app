import { View, Text, StyleSheet,SafeAreaView } from 'react-native'
import React, { useState } from 'react';


export default function Politique() {

  return (

    <SafeAreaView style={styles.container}>
    <View style={{ marginHorizontal:20,marginTop:30 }}>
              <Text 
              style={{ fontSize:20,color:'black',fontWeight:'bold' }}>A. Introduction{"\n"}
              </Text>
              <Text 
              style={{ color:'#7C7C7C' }}>La confidentialité des visiteurs de notre site web est très importante à nos yeux, et nous nous engageons à la protéger. Cette politique détaille ce que nous faisons de vos informations personnelles.
              Consentir à notre utilisation de cookies en accord avec cette politique lors de votre première visite de notre site web nous permet d’utiliser des cookies à chaque fois que vous consultez notre site.
              </Text>
              <Text 
              style={{ fontSize:20,color:'black',fontWeight:'bold' }}>B. Source{"\n"}
              </Text>
              <Text 
              style={{ color:'#7C7C7C' }}>Ce document a été créé grâce à un modèle de SEQ Legal (seqlegal.com)
              et a été modifié par Website Planet (www.websiteplanet.com)
              </Text>
              <Text 
              style={{ fontSize:20,color:'black',fontWeight:'bold' }}>C. Collecte d’informations personnelles{"\n"}
              </Text>
              <Text 
              style={{ color:'#7C7C7C' }}>Les types d’informations personnelles suivants peuvent collectés, stockés et utilisés :{"\n"}

              Des informations à propos de votre ordinateur, y compris votre adresse IP, votre localisation géographique, le type et la version de votre navigateur, et votre système d’exploitation ;
              Des informations sur vos visites et votre utilisation de ce site web y compris la source référente, la durée de la visite, les pages vues, et les chemins de navigation de sites web ;
              Des informations comme votre adresse e-mail, que vous nous fournissez lors de votre inscription au site ;
               messages privés envoyés par le biais du service de messagerie privé de notre site web) ; et
              D’autres utilisations.              
              </Text>
              
    </View> 
    </SafeAreaView>

      
  )
}


const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor : 'white',
  },
})