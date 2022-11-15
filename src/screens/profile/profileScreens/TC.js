import { View, Text, StyleSheet } from 'react-native'
import React from 'react';


export default function ButtonTC() {

  return (
    <SafeAreaView style={styles.container}>
    <View style={{ marginHorizontal:20,marginTop:30 }}>
              <Text style={{ fontSize:13,color:'black',fontWeight:'bold' }}>1. ACCEPTATION DE L'UTILISATION DES CONDITIONS GENERALES</Text>
              <Text style={{ color:'#7C7C7C' }}>

              {"\n"}Votre accès et votre utilisation de Lorem Ipsum (l'application) sont exclusivement soumis aux présentes conditions générales. Vous n'utiliserez pas l'application à des fins illégales ou interdites par les présentes conditions générales. En utilisant l'application, vous acceptez pleinement les termes, conditions et avis de non-responsabilité contenus dans cet avis. Si vous n'acceptez pas ces termes et conditions, vous devez immédiatement cesser d'utiliser l'application.{"\n"}
{"\n"}<Text style={{ fontSize:13,color:'black',fontWeight:'bold' }}>2. DÉTAILS DE LA CARTE DE CRÉDIT</Text>{"\n"}


{"\n"}Tous les achats Lorem Ipsum sont gérés par les App Stores individuels (Apple, Google Windows) et Lorem Ipsum ne stockera jamais vos informations de carte de crédit ni ne les mettra à la disposition de tiers. Toutes les informations d'achat fournies seront fournies directement par vous à l'App Store respectif et vous serez soumis à leurs politiques de carte de crédit.{"\n"}
{"\n"}<Text style={{ fontSize:13,color:'black',fontWeight:'bold' }}>3. AVIS JURIDIQUE</Text>{"\n"}


{"\n"}Le contenu de l'application Lorem Ipsum ne constitue pas un conseil et ne doit pas être invoqué pour prendre ou s'abstenir de prendre une décision.
Tout le matériel contenu sur Lorem Ipsum est fourni sans aucune garantie d'aucune sorte. Vous utilisez le matériel sur Lorem Ipsum à votre propre discrétion.{"\n"}
{"\n"}<Text style={{ fontSize:13,color:'black',fontWeight:'bold' }}>4. CHANGEMENT D'UTILISATION</Text>{"\n"}


{"\n"}4.1 modifier ou supprimer (temporairement ou définitivement) l'application ou toute partie de celle-ci sans préavis et vous confirmez que Lorem Ipsum ne sera pas responsable envers vous d'un tel changement ou suppression et.
{"\n"}4.2 modifier ces Termes et Conditions à tout moment, et votre utilisation continue de l'application après tout changement sera considérée comme votre acceptation d'un tel changement.
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