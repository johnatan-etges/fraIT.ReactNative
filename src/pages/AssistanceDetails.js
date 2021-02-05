import React from 'react';
import { StyleSheet, View, ScrollView, Text, TouchableOpacity } from 'react-native';

import Card from '../components/Card';
import CardTitle from '../components/CardTitle';
import SmallFontText from '../components/SmallFontText';
import MediumFontText from '../components/MediumFontText';
import LargeFontText from '../components/LargeFontText';

function AssistanceDetails({navigation}) {

  return (
    <ScrollView style={styles.container} >
      <Card>
        <CardTitle>Solicitação</CardTitle>
        <SmallFontText>Descrição</SmallFontText>
        <LargeFontText>A impressora da Andressa não está funcionando. Ela esquenta, porém não imprime nada após vários minutos. Além disto, o Eric não está conseguindo conectar-se ao aplicativo das baixas dos bancos</LargeFontText>
        <SmallFontText>Solicitante</SmallFontText>
        <MediumFontText>Ana Carolina Fragoso</MediumFontText>
        <SmallFontText>Local</SmallFontText>
        
        <TouchableOpacity
          onPress={() => navigation.navigate('LocalDetails', {local: 'Departamento de Tributos'})}
        >
          <MediumFontText>Depto de Tributos</MediumFontText>
        </TouchableOpacity>
        
        <SmallFontText>Prioridade</SmallFontText>
        <MediumFontText>Normal</MediumFontText>
      </Card>

      <Card>
        <CardTitle>Equipamento(s)</CardTitle>
        
        <View onPress={() => navigation.navigate('DeviceDetails', {patrimonio: '091855', equipamento: 'Impressora Brother MFC-8952DW', local: 'Depto de Tributos'})} style={styles.device}>
          <TouchableOpacity
            style={styles.listButton}
            onPress={() => navigation.navigate('DeviceDetails', {patrimonio: '091855', equipamento: 'Impressora Brother MFC-8952DW', local: 'Depto de Tributos'})}
          >
            <SmallFontText>Patrimônio</SmallFontText>
            <MediumFontText>091855</MediumFontText>
            <SmallFontText>Descrição</SmallFontText>
            <MediumFontText>Impressora Brother MFC-8952DW</MediumFontText>
          </TouchableOpacity>

          <TouchableOpacity
            
            onPress={() => {console.log('press!');}}
          >
            <MediumFontText>+Assist. Terceirizada</MediumFontText>
          </TouchableOpacity>
        </View>

        <View style={styles.device}>
        <TouchableOpacity
            style={styles.listButton}
            onPress={() => navigation.navigate('DeviceDetails', {patrimonio: '091855', equipamento: 'Impressora Brother MFC-8952DW', local: 'Depto de Tributos'})}
          >
            <SmallFontText>Patrimônio</SmallFontText>
            <MediumFontText>091855</MediumFontText>
            <SmallFontText>Descrição</SmallFontText>
            <MediumFontText>Impressora Brother MFC-8952DW</MediumFontText>
          </TouchableOpacity>

          <TouchableOpacity            
            onPress={() => {console.log('press!');}}
          >
            <MediumFontText>+Assist. Terceirizada</MediumFontText>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
            onPress={() => {console.log('press!');}}
          >
            <MediumFontText>+Equipamento</MediumFontText>
          </TouchableOpacity>
      </Card>

      <Card>
        <CardTitle>Solução</CardTitle>
        <TouchableOpacity
          onPress={() => {console.log('press!');}}
        >
          <MediumFontText>+Solução</MediumFontText>
        </TouchableOpacity>
      </Card>

      <Card>
        <TouchableOpacity
          onPress={() => console.log('Press!')}
        >
          <LargeFontText>Salvar</LargeFontText>
        </TouchableOpacity>
      </Card>
    </ScrollView>
  );
}

export default AssistanceDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2d2d2d',
  },

  device: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    maxHeight: 300,
    backgroundColor: '#363740',
    borderColor: '#DDE2FF',
    borderWidth: 0.3,
    borderRadius: 10,
    marginVertical: 5,
    marginHorizontal: -15,
  },

  /* device: {    
    maxHeight: 150,
    backgroundColor: '#363740',
    marginBottom: 10,
  }, */

  listButton: {
    marginBottom: 10,
  }
});