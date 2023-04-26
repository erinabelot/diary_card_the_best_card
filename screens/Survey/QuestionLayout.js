import React from 'react';
import { TouchableOpacity, StyleSheet, Text, Image, View, Styles } from 'react-native';
import NextButton from '../../components/NextButton';
import GraphButtons from '../../components/GraphButtons';
import { ScrollView } from 'react-native-gesture-handler';

export default function QuestionLayout( { question, handleSaveAndNext, pageAnswer, setPageAnswer } ) {
  return (
    <>
    <ScrollView contentContainerStyle={styles.container}>   
      <Text style={styles.developmentModeText}>{question}</Text>
      <GraphButtons questions={['Yes', 'No']} pageAnswer={pageAnswer} setPageAnswer={setPageAnswer} />
  
    </ScrollView>
      <NextButton onPress={() => { handleSaveAndNext(question) }} />
    </>
  )
};

const styles = StyleSheet.create({

  developmentModeText: {
    marginBottom: 20,
    color: '#ffffff',
    fontSize: 30,
    lineHeight: 30,
    textAlign: 'center',
    marginTop:100,
    fontWeight: 300,
 
  },
  container: {
    backgroundColor: '#14121b',
    height: 600
  }
});
