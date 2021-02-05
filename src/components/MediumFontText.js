import React from 'react';
import { Text, StyleSheet } from 'react-native';

function MediumFontText({ children }) {
  return (
    <Text style={styles.text}>{ children }</Text>
  );
}

export default MediumFontText;

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: 'normal',
    color: '#DDE2FF',
  }
});