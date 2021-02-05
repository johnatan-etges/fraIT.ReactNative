import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

import Card from '../components/Card';
import CardTitle from '../components/CardTitle';
import SmallFontText from '../components/SmallFontText';
import MediumFontText from '../components/MediumFontText';
import LargeFontText from '../components/LargeFontText';

function DeviceDetails({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Card>
        <CardTitle>{ navigation.getParam('equipamento') }</CardTitle>
        <SmallFontText>Patrimônio</SmallFontText>
        <MediumFontText>{ navigation.getParam('patrimonio') }</MediumFontText>
        <SmallFontText>Local</SmallFontText>
        <MediumFontText>{ navigation.getParam('local') }</MediumFontText>
        <SmallFontText>Categoria</SmallFontText>
        <TouchableOpacity>
          <MediumFontText>Impressoras</MediumFontText>
        </TouchableOpacity>
        <SmallFontText>Adquirida em</SmallFontText>
        <MediumFontText>05/03/2014</MediumFontText>
        <SmallFontText>Nota fiscal</SmallFontText>
        <MediumFontText>524/2014</MediumFontText>
        <SmallFontText>Status da garantia</SmallFontText>
        <MediumFontText>Fora do prazo de 1 ano de garantia do fabricante</MediumFontText>
        <SmallFontText>Custo total com manutenção</SmallFontText>
        <LargeFontText>R$1235,96</LargeFontText>
      </Card>

      <Card>
        <CardTitle>Histórico do dispositivo</CardTitle>
        <View style={styles.historyCard}>
          {/*Aqui vai o tipo de histórico
          Seja movimentação patrimonial, manutenção, etc.. pensar bem como fazer isto...*/}
          <CardTitle>Movimentação Patrimonial</CardTitle>
          <SmallFontText>Data</SmallFontText>
          <MediumFontText>21/12/2019</MediumFontText>
          <SmallFontText>Origem</SmallFontText>
          <MediumFontText>Contabilidade</MediumFontText>
          <SmallFontText>Destino</SmallFontText>
          <MediumFontText>Depto de Tributos</MediumFontText>
        
        </View>

        <View style={styles.historyCard}>
          {/*Aqui vai o tipo de histórico
          Seja movimentação patrimonial, manutenção, etc.. pensar bem como fazer isto...*/}
          <CardTitle>Movimentação Patrimonial</CardTitle>
          <SmallFontText>Data</SmallFontText>
          <MediumFontText>21/12/2019</MediumFontText>
          <SmallFontText>Origem</SmallFontText>
          <MediumFontText>Contabilidade</MediumFontText>
          <SmallFontText>Destino</SmallFontText>
          <MediumFontText>Depto de Tributos</MediumFontText>
        
        </View>
      </Card>
    </ScrollView>
  )
}

export default DeviceDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2d2d2d',
  },

  historyCard: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    maxHeight: 300,
    backgroundColor: '#363740',
    borderColor: '#DDE2FF',
    borderWidth: 0.3,
    borderRadius: 10,
    marginVertical: 5,
    marginHorizontal: -15,
  }
});