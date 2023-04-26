import React from 'react';
import { TouchableOpacity, StyleSheet, Text, Image, View, Styles, ScrollView } from 'react-native';
import NextButton from '../../components/NextButton';
import Slider from '../../components/Slider';


export default function FearFeelingsLayout( { pageAnswer, setPageAnswer, handleSaveAndNext, question, readResponse  } ) {
  
   
  readResponse(question)

  const sliderColor = '#8D0DAD';

  return (
    <>
     <ScrollView contentContainerStyle={styles.container}>
     
        <Text style={styles.headingText}>Fear</Text>
        
        <Text style={styles.developmentModeText}>{question}</Text>
        <Slider color={sliderColor} pageAnswer={pageAnswer} setPageAnswer={setPageAnswer} />
  
       
      </ScrollView>
      <NextButton onPress={() => { handleSaveAndNext(question) }} />
    </>
  )};


  const styles = StyleSheet.create({
 
    developmentModeText: {
      marginBottom: 80,
      color: '#ffffff',
      fontSize: 15,
      lineHeight: 19,
      textAlign: 'center',
  
  
    },
    headingText: {
      fontSize: 30, 
      color: '#ffffff', 
      fontWeight: '500', 
      textAlign: 'center', 
      marginTop: 110,
    
      marginBottom: 10,
     
    },

    container: {
      backgroundColor: '#14121b',
      height: 600
   
    }
  });
