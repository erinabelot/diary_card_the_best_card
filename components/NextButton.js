import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

export default function NextButton( { onPress } ) { 
  return(
    <TouchableOpacity style={styles.nextButton} onPress={onPress}>
      <Text style={styles.nextText}>NEXT</Text>
    </TouchableOpacity>
  )}

const styles = StyleSheet.create({
  nextButton: {
    fontSize: 100,
    backgroundColor: '#9DFE94',
    color: '#ffffff',
    height: '9%',
    fontWeight: 'bold',
    height: 60,

  },

  nextText: {
    color: '#454040',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    letterSpacing: 1,
    paddingTop: 17,

  }
});
