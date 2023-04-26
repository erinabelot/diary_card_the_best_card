import { color } from '@rneui/base';
import React from 'react';
import { StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, View, Text, Image } from 'react-native';

export default function MessengerScreen() {
  return (
    <>
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.headingText}>Good morning</Text>
          {/* <View style={styles.box}>
            <View style={styles.lightBox}/>
            <View style={styles.textContainer}>
          
              <Text style={styles.nameText}>Talk to us</Text>
              <Text style={styles.dateText}>Mar 24</Text>
            </View>
          </View> */}
          <View style={styles.box}>
            <View style={styles.darkBox}/>
            <View style={styles.textContainer}>
              <Text style={styles.nameText}>Kate Argentino</Text>
              <Text style={styles.dateText}>Mar 13</Text>
            </View>
      
          </View>
          <View style={styles.box}>
          <View style={styles.darkBox}/>
            <View style={styles.textContainer}>
              <Text style={styles.nameText}>Soren Frederiksen</Text>
              <Text style={styles.dateText}>Mar 01</Text>
            </View>

          </View>
          <View style={styles.box}>
            
            <View style={styles.greenBox}/>
          
            <View style={styles.textContainer}>
              <Text style={styles.nameText}>Nick Wolf</Text>
              <Text style={styles.dateText}>Mar 13</Text>
            </View>
      
          </View>
          <TouchableOpacity style={styles.circle}>
        <Image
            source={require('../../assets/images/plus.png')}
            style={styles.image}
          />
        </TouchableOpacity>

          
        </ScrollView>
     
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#14121b',
  },
  container: {
    backgroundColor: '#14121b',
    height: 500,
  },

  headingText: {
    fontSize: 40,
    color: '#ffffff',
    fontWeight: 700,
    // textAlign: 'center',
    marginTop: 40,
    marginLeft: 30,
    marginBottom: 20
  },
  box: {
    backgroundColor: '#191919',
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop:10,
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },

  nameText: {
    fontSize: 15,
    color: '#ffffff',
    fontWeight: 700,
    marginRight: 10,
    marginBottom: 13
  },
  labelText: {
    fontSize: 15,
    color: '#ffffff',
    fontWeight: 300,
    position: 'absolute',
    bottom: 10,
    marginLeft: 35
  
  },
  darkBox: {
    backgroundColor: '#2c2c2c',
    borderRadius: 2,
    width: 7,
    height: 50,
    marginRight: 30,
    marginLeft: -20,
  },

  greenBox: {
    backgroundColor: '#091BBC',
    borderRadius: 2,
    width: 7,
    height: 50,
    marginRight: 30,
    marginLeft: -20,
  },

  lightBox: {
    backgroundColor: '#9DFE94',
    borderRadius: 2,
    width: 7,
    height: 50,
    marginRight: 30,
    marginLeft: -20,

  },
  textContainer: {
    flexDirection: 'row',
  },
  // dateText: {
  //   marginRight: 10,
  //   marginLeft: 0,
  //   color: '#ffffff',
  //   alignSelf: 'flex-start',
  //   marginLeft: 100,
  //   textAlign: 'left',
  // },
  dateText: {
    color: '#ffffff',
    // position: 'absolute',
    // right: -150,
    
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginLeft: 100

  },
  circle: {
    backgroundColor: '#ffffff',
    height: 60,
    width: 60,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
    marginTop: 140,
    marginRight: 20,
    alignSelf: 'flex-end',
   
  },
  image: {
    height: 30,
    width: 30

  },
  imageLetter: {
    height: 40,
    width:40,
    marginLeft: -20,
    marginRight: 0
  }
});