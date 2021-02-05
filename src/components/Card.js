import React from 'react';
import { StyleSheet, View } from 'react-native';

function Card({children}) {
  return (
    <View style={styles.card}>
      {children}
    </View>
  )
}

export default Card;

const styles = StyleSheet.create({
  card: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    maxHeight: 500,
    backgroundColor: '#363740',
    borderRadius: 10,
    marginVertical: 5,
  },
});