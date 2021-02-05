import React from 'react';
import { Text, StyleSheet } from 'react-native';

function LargeFontText({ children }) {
  return (
    <Text style={styles.text}>{ children }</Text>
  );
}

export default LargeFontText;

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    textAlign: 'justify',
    fontWeight: 'normal',
    color: '#DDE2FF',
  }
});