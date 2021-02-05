import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, Text } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';

function Main({navigation}) {
  const [currentRegion, setCurrentRegion] = useState(null);

  useEffect(() => {
    async function getInitialPosition() {      
      const { granted } = await requestPermissionsAsync();

      if (granted) {        
        const { coords } = await getCurrentPositionAsync({
          enableHighAccuracy: true,
        });
        const { latitude, longitude } = coords;

        setCurrentRegion({
          latitude: latitude,
          latitudeDelta: 0.04,
          longitude: longitude,
          longitudeDelta: 0.04,        
        });      
      }
    };

    getInitialPosition();
  },[]);

  return (    
      <MapView 
        region={currentRegion}
        style={styles.map}
      >
        <Marker coordinate={{latitude: -27.0266766, longitude: -50.9182225}}>
          <Image source={{uri: 'https://lh5.googleusercontent.com/p/AF1QipMr4I0_dlPifL3UvFMnWvmOLvx00xerJR0te9mK=w426-h240-k-no'}} style={styles.place} />
          <Callout
            onPress={() => {
              navigation.navigate('AssistanceDetails')
            }}
            style={styles.callout}>
            <Text style={styles.assistanceDescription}>A impressora da Andressa não está funcionando. Ela esquenta, porém não imprime nada após vários minutos. Além disto, o Eric não está conseguindo conectar-se ao aplicativo das baixas dos bancos</Text>
            <Text style={styles.assistanceRequester}>Ana Cristina Fragoso</Text>
            <Text style={styles.assistanceLocal}>Depto de Tributos</Text>
          </Callout>
        </Marker>
      </MapView>
  );
}

export default Main;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },

  place: {
    width: 30,
    height: 30,
    borderColor: '#FFF',
    borderWidth: 4,
    borderRadius: 4,
  },

  callout: {
    width: 360,
  },

  assistanceDescription: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#363740',
    bottom: 5,
  },

  assistanceRequester: {
    fontSize: 12,
    fontWeight: '400',
    color: '#363740'
  },

  assistanceLocal: {
    fontSize: 12,
    fontWeight: '600',
    color: '#363740',
  }
});