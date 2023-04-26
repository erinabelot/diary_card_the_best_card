import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, ScrollView, Image } from 'react-native';

export default function LinksScreenLayout({ }) {
  return (
    <>
      <ScrollView contentContainerStyle={styles.container}> 
        <Image
            source={require('../../assets/images/logo.png')}
            style={styles.image}
          />
        <View style={styles.container1}>
        <Text style={styles.textInsideInnerSquare}>products & promotions</Text>
          <View style={styles.innerContainer}></View>
        </View> 
        <View style={styles.container2}>
          <Text style={styles.h3Text}>Hook up a mate</Text>
        </View> 
        <View style={styles.container2}>
          <Text style={styles.h3Text}>Perk Up</Text>   
        </View> 
        <View style={styles.container2}>
          <Text style={styles.h3Text}>Up Home</Text>   
        </View> 
        
        <View style={styles.container1}>
          <Text style={styles.textInsideInnerSquare}>account</Text>
          <View style={styles.innerContainer}></View>
        </View> 
        <View style={styles.container2}>
          <Text style={styles.h3Text}>Profile</Text>
        </View>
        <View style={styles.container2}>
          <Text style={styles.h3Text}>Statements</Text>
        </View> 
        
        <View style={styles.container1}>
          <Text style={styles.textInsideInnerSquare}>app settings</Text>
          <View style={styles.innerContainer}></View>
        </View> 
        <View style={styles.container2}>
          <Text style={styles.h3Text}>Notifications</Text>
        </View> 
        <View style={styles.container2}>
          <Text style={styles.h3Text}>Security</Text>   
        </View> 
        <View style={styles.container2}>
          <Text style={styles.h3Text}>About Up</Text>   
        </View> 

      




          
       

      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#14121b',
    height: 900,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container1: {
    backgroundColor: '#2B2B2B',
    marginLeft: 0, 
    marginRight: 0,
    marginBottom: 1,
    width: 400,
  },

  container2: {
    backgroundColor: '#191919',
    marginLeft: 0, 
    marginRight: 0,
    marginBottom: 1,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius:0,
    width:400
  },
  innerContainer: {
    flexDirection: 'row',
    // alignItems: 'center',
    marginTop: 10,
    marginLeft: 30,
    height: 17
    
  },
  h4Text: {
    marginTop: 0,
    marginBottom: 20,
    marginLeft: 30,
    marginRight: 100,
    fontWeight: '600',
    color: '#201C1C'
  },
  h3Text: {
    color: '#ffffff',
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 300,
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 60,
    textAlign: 'left'
  },
  circle: {
    backgroundColor: '#D9D9D9',
    height: 130,
    width: 130,
    borderRadius: 100,
    justifyContent: 'center',
 
    marginBottom: 10,
    marginTop: -200
  },

  square: {
    backgroundColor: '#FFFFFF',
    width: 320,
    height: 500,
    borderRadius: 22,
    justifyContent: 'start',
    alignItems: 'center',
    marginBottom: 30
  },
  innerSquare: {
    backgroundColor: '#F1EEEE', 
    width: 300,
    height: 40,
    borderRadius: 10,
    marginTop: 20,
   marginBottom: 20
  },
  textInsideInnerSquare: {
    color: '#ffffff', 
    fontSize: 14,
    textAlign: 'left',
    marginLeft: 50,
    marginTop: 6,
    marginBottom: -17,
    fontWeight: 500
   
  },

 

  heading: {
    color: '#7A7575',
    
    marginLeft: 20,
    fontSize: 15,
    textAlign: 'left',  
  
  },
  line: {
    height: 5,
    width: '80%',
    backgroundColor: '#000000',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 20
  },

  image: {
    width: 150,
    height: 75,
    marginLeft: 7,
    marginTop: -350,
    marginBottom: 30
  },

});








{/* 
<OptionButton
        icon="md-school"
        label="Read the Expo documentation"
        onPress={() => WebBrowser.openBrowserAsync('https://docs.expo.io')}
      />

      <OptionButton
        icon="md-compass"
        label="Read the React Navigation documentation"
        onPress={() => WebBrowser.openBrowserAsync('https://reactnavigation.org')}
      />

      <OptionButton
        icon="ios-chatboxes"
        label="Ask a question on the forums"
        onPress={() => WebBrowser.openBrowserAsync('https://forums.expo.io')}
        isLastOption
      />
    </ScrollView>
  );
}

function OptionButton({ icon, label, onPress, isLastOption }) {
  return (
    <RectButton style={[styles.option, isLastOption && styles.lastOption]} onPress={onPress}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.optionIconContainer}>
          <Ionicons name={icon} size={22} color="rgba(0,0,0,0.35)" />
        </View>
        <View style={styles.optionTextContainer}>
          <Text style={styles.optionText}>{label}</Text>
        </View>
      </View>
    </RectButton>
  );
} */}