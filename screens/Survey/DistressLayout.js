import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  Image,
  View,
  Styles,
  ScrollView,

} from 'react-native';
import NextButton from '../../components/NextButton';
import CheckBox from '../../components/Checkbox';

export default function DistressLayout({
  pageAnswer,
  setPageAnswer,
  handleSaveAndNext,
  question,
}) {
  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.h2Text}>{question}</Text>
        <Text style={styles.developmentModeText}>Which skills have you practised today?</Text> 

        <View style={styles.numberBox}>
          <Text style={styles.numberText}>01</Text>
          <CheckBox title="ACCEPTS" /> 
          <Image
            source={require('../../assets/images/arrow-down.png')}
            style={styles.image}
          />   
        </View>
        <View style={styles.bottomLineBox}></View>
        <View style={styles.numberBox}>
          <Text style={styles.numberText}>02</Text>
          <CheckBox title="Self Soothe" />   
          <Image
            source={require('../../assets/images/arrow-down.png')}
            style={styles.image}
          />   
        </View>
        <View style={styles.bottomLineBox}></View>
        <View style={styles.numberBox}>
          <Text style={styles.numberText}>03</Text>
          <CheckBox title="Pros and Cons" /> 
          <Image
            source={require('../../assets/images/arrow-down.png')}
            style={styles.image}
          />   
        </View>
        <View style={styles.bottomLineBox}></View>
        <View style={styles.numberBox}>
          <Text style={styles.numberText}>04</Text>
          <CheckBox title="Non-judgmentally" />    
          <Image
            source={require('../../assets/images/arrow-down.png')}
            style={styles.image}
          />   
        </View>
        <View style={styles.bottomLineBox}></View>
        <View style={styles.numberBox}>
          <Text style={styles.numberText}>05</Text>
          <CheckBox title="IMPROVE the moment" />    
          <Image
            source={require('../../assets/images/arrow-down.png')}
            style={styles.image}
          />   
        </View>
        <View style={styles.bottomLineBox}></View>
       
  

        
        
      </ScrollView>
      <NextButton onPress={() => handleSaveAndNext(question)} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#14121b',
    height: 750,
  },

  bottomLineBox: {
    borderBottomWidth: 0.5,
    borderColor: '#373737',
    marginLeft: 30,
    marginRight: 30,
    paddingBottom: 5,
    paddingTop: 15,
  },

  numberBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 60,
    marginTop: 5,
    marginBottom: -10
    
  },

  image: {
    width: 30,
    height: 30,
    marginLeft: -50,
  },

  numberText: {
    fontSize: 32,
    color: '#E9E6E6',
    fontWeight: '700',
    marginLeft: -20,
    marginRight: 25
  },

  highlightedNumberText: {
    fontSize: 32,
    color: '#8D0DAD',
    fontWeight: '700',
    marginLeft: -20,
    marginRight: 25
  },

  h2Text: {
    marginTop: 50,
    fontWeight: 600,
    color: '#E9E6E6',
    fontSize: 23,
    textAlign: 'center',
    marginBottom: 5,
    letterSpacing: .5
  },
  developmentModeText: {
    marginBottom: 50,
    color: '#ffffff',
    fontSize: 13,
    lineHeight: 19,
    textAlign: 'center',
    letterSpacing: .5
  },
});