import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import NextButton from '../../components/NextButton';
import Input from '../../components/Input';

export default function ContextLayout( { pageAnswer, setPageAnswer, handleSaveAndNext, question } ) {
  return (
    <>
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.h3Text}>{question}</Text>
     
      <Input></Input>
    
      </ScrollView>

      <NextButton onPress={() => { handleSaveAndNext(question) }} />
    </>
  )};


const styles = StyleSheet.create({
  h3Text: {
    marginTop: 130,
    fontWeight: 400,
    color: '#ffffff',
    fontSize: 25,
    textAlign: 'center',
    
  },
  container: {
    backgroundColor: '#14121b',
    height: 600
  },
 
});
