import React from 'react';
import { Text, StyleSheet } from 'react-native';

function SmallFontText({ children }) {
  return (
    <Text style={styles.text}>{ children }</Text>
  );
}

export default SmallFontText;

const styles = StyleSheet.create({
  text: {
    fontSize: 11,
    fontWeight: 'normal',
    color: '#7F6A93',
    marginTop: 10,
  }
});