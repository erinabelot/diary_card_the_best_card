import * as WebBrowser from 'expo-web-browser';
import React, { useEffect, useCallback, useState } from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as SQLite from 'expo-sqlite';

import { MonoText } from '../components/StyledText';
import HabitLayout from '../screens/HabitLayout';
import QuestionLayout from '../screens/QuestionLayout';
// import NavigationBar from '../navigation/BottomTabNavigator';

export default function HomeScreen() {
  const [name, setName] = useState('counter')
  const [count, setCount] = useState(0)
  const [numberAnswer, setNumberAnswer] = useState(null)
  const [currentPageNumber, setCurrentPageNumber] = useState(0)



  useEffect(() => {
    const db = SQLite.openDatabase("diaryCard")
    db.transaction((tx) => {
      tx.executeSql(`CREATE TABLE IF NOT EXISTS responses (
        question STRING NOT NULL,
        date TEXT,
        answer INTEGER NOT NULL DEFAULT 0)
      `);
    });
  }, []);

  const updateCount = (increase) => {
    const db = SQLite.openDatabase("counters")
    db.transaction((tx) => {
      tx.executeSql(`UPDATE counters SET total=total+1 WHERE name="counter"`, [], console.log, console.log);

      tx.executeSql(
        `SELECT counters.total FROM counters WHERE counters.name="counter"`,
        [],
        (transaction, result) => { setCount(result.rows.item(0).total) },
        console.log
      );
    });
  }

  const saveHabitLayout = () => {
    const db = SQLite.openDatabase("diaryCard")
    db.transaction((tx) => {
      tx.executeSql(`INSERT INTO responses (question, answer) VALUES ("how are you?", ${numberAnswer})`, [], console.log, console.log);
    });
  }

  const handleNextPress = () => {
    console.log('hi')
    setCurrentPageNumber(currentPageNumber + 1);
  }

  const handleNumberPress = (i) => {
    setNumberAnswer(i)
  }

  const pages = [
    <HabitLayout
      numberAnswer={numberAnswer}
      handleNumberPress={handleNumberPress}
      handleNextPress={handleNextPress}
      saveHabitLayout={saveHabitLayout}
    />,
    <QuestionLayout />,
  ];
  return pages[currentPageNumber]
  
}

HomeScreen.navigationOptions = {
  header: null,
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use useful development
        tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/workflow/development-mode/');
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/get-started/create-a-new-app/#making-your-first-change'
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  highlightedButton: {
    backgroundColor: '#f59',
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'gray',
    borderRadius: 100,
    height: 70,
    width: 70,
    padding: 10,
    display: 'flex',
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',    
  },
  standardButton: {
    backgroundColor: '#9af',
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'gray',
    borderRadius: 100,
    height: 70,
    width: 70,
    padding: 10,
    display: 'flex',
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',    
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
    fontSize: 37,

  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },

  answerOptions: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  answerOption: {

  }  
});
