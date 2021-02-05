import React from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import MapView from 'react-native-maps';

import Card from '../components/Card';
import CardTitle from '../components/CardTitle';
import SmallFontText from '../components/SmallFontText';
import MediumFontText from '../components/MediumFontText';

function LocalDetails({navigation}) {
  return ( 
    <ScrollView style={styles.container}>
      <Card>
        <CardTitle>{navigation.getParam(`local`)}</CardTitle>
        <SmallFontText>Secretaria</SmallFontText>
        <MediumFontText>Finanças</MediumFontText>
        <SmallFontText>Telefone</SmallFontText>
        <MediumFontText>(49)3256-3014</MediumFontText>
        <SmallFontText>Endereço</SmallFontText>
        <MediumFontText>Av. Rio das Antas, 185, Centro, Fraiburgo - SC</MediumFontText>
        <SmallFontText>Responsável</SmallFontText>
        <MediumFontText>Rui Braun</MediumFontText>        
      </Card>
      <CardTitle>Localização</CardTitle>
        <MapView region={{latitude: -27.0266766, latitudeDelta: 0.01, longitude: -50.9182225, longitudeDelta: 0.01}} style={{ height: 520 }} />      
    </ScrollView>
  );
}

export default LocalDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2d2d2d',
  },
});