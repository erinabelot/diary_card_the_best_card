import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

export default function GraphButtons( { questions, useSymbols, pageAnswer, setPageAnswer } ) {
  return (
    <View style={styles.answerOptions}>
          {questions.map ((n) =>
          {
            return (
              <View key={`key_${n}`}>
                <TouchableOpacity
                  key={`option_${n}`}
                  style={[
                    styles.buttonGraph,
                    styles[`buttonGraphSize${n}`],
                    (n === pageAnswer ? styles.buttonGraphHighlight : null)
                  ]}
                  onPress={() => { setPageAnswer(n) }}>
                  <Text>{useSymbols ? '' : n}</Text>
                </TouchableOpacity>
              </View>
            )
          })}
        </View>
 )};

 const styles = StyleSheet.create({
  answerOptions: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingBottom: 90,
    paddingTop: 40,
  },
  selectedGraphButton: {
    backgroundColor: '#ffffff',
  },
  buttonGraph: {
    backgroundColor: '#F4F4F4',
    borderRadius:4,
    margin: 10,
    marginBottom: 110,
    shadowOffset: {
      width: 0,
      height: 1,
    },

    elevation: 2,
  },
  buttonGraphSize0: {
    height: 40,
    width: 40,
  },
  buttonGraphSize1: {
    height: 70,
    width: 50,
  },
  buttonGraphSize2: {
    height: 120,
    width: 50,
  },
  buttonGraphSize3: {
    height: 160,
    width: 50,
  },
  buttonGraphHighlight: {
    backgroundColor: '#091BBC',
  },
   
  Text: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
    letterSpacing: 2,
    paddingTop: 10,
  }
});
