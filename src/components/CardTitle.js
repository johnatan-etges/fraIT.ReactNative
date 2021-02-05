import React, { Children } from 'react';
import { Text, StyleSheet } from 'react-native';

function CardTitle({ children }) {
  return (
    <Text style={styles.text}>{ children }</Text>
  );
}

export default CardTitle;

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: 'normal',
    color: '#DDE2FF',
    textAlign: 'center',
  }
});