import React from 'react';
import { TouchableOpacity, StyleSheet, Text, Image, View, Styles, ScrollView } from 'react-native';
import NextButton from '../../components/NextButton';
import  GraphButtons from '../../components/GraphButtons';

export default function HabitLayout( { pageAnswer, setPageAnswer, handleSaveAndNext, question } ) {

  return (
    <>
    <ScrollView contentContainerStyle={styles.container}>   
      <Text style={styles.developmentModeText}>{question}</Text>
      <GraphButtons questions={[0,1,2,3]} useSymbols pageAnswer={pageAnswer} setPageAnswer={setPageAnswer} />
     
      
    </ScrollView>
    <NextButton onPress={() => { handleSaveAndNext(question) }} />
    </>
  )};


const styles = StyleSheet.create({
  developmentModeText: {
   
    color: '#ffffff',
    fontSize: 25,
    lineHeight: 30,
    textAlign: 'center',
    marginTop:120,
    fontWeight: 300,
  
  },
  container: {
    backgroundColor: '#14121b',
    height: 600
  }
});
