import * as WebBrowser from 'expo-web-browser';
import React, { useEffect, useState } from 'react';
import { Platform, StyleSheet, Text } from 'react-native';
import * as SQLite from 'expo-sqlite';

import HabitLayout from './HabitLayout';
import QuestionLayout from './QuestionLayout';

import HappyFeelingsLayout from './HappyFeelingsLayout';
import SadFeelingsLayout from './SadFeelingsLayout';
import AngryFeelingsLayout from './AngryFeelingsLayout';
import FearFeelingsLayout from './FearFeelingsLayout';

import LonelyFeelingsLayout from './LonelyFeelingsLayout';

import MindfulnessLayout from './MindfulnessLayout';
import DistressLayout from './DistressLayout';
import FeelingsLayout from './FeelingsLayout';
import RelationshipsLayout from './RelationshipsLayout';

import ContextLayout from './ContextLayout';


export default function HomeScreen() {
  const [pageAnswer, setPageAnswer] = useState(null)
  const [currentPageNumber, setCurrentPageNumber] = useState(0)

  useEffect(() => {
    const db = SQLite.openDatabase("diaryCard")
    db.transaction((tx) => {
      tx.executeSql(`CREATE TABLE IF NOT EXISTS responses (
        question STRING NOT NULL,
        date TEXT,
        answer TEXT NOT NULL DEFAULT '')
      `);
    });
  }, 
[]);



  const saveResponse = (question) => {
    const db = SQLite.openDatabase("diaryCard")
    db.transaction((tx) => {
      tx.executeSql(`INSERT INTO responses (question, answer) VALUES (${question}, ${pageAnswer})`, []);
    });
  }

  const readResponse = (question) => {
    const db = SQLite.openDatabase("diaryCard")
    const result = db.executeSql(`SELECT answer FROM responses WHERE question = ${question}`)
    console.log(result)
  }
  

  const handleNextPress = () => {
    setCurrentPageNumber(currentPageNumber + 1 == pages.length ? 0 : currentPageNumber + 1);
  }

  const handleSaveAndNext = (question) => {
    saveResponse(question)
    handleNextPress()
    readResponse()
  }

  const pages = [
    <HabitLayout
      question={`How strong was \n your urge to order Uber eats?`}
      pageAnswer={pageAnswer}
      handleSaveAndNext={handleSaveAndNext}
      readResponse={readResponse}
      setPageAnswer={setPageAnswer}
    />,
    <QuestionLayout
      question="Did you order Uber eats today?"
      handleSaveAndNext={handleSaveAndNext}
      setPageAnswer={setPageAnswer}
      readResponse={readResponse}
      pageAnswer={pageAnswer}
    />,
    <HappyFeelingsLayout
    question="How happy did you feel today?"
    handleSaveAndNext={handleSaveAndNext}
    setPageAnswer={setPageAnswer}
    readResponse={readResponse}
    pageAnswer={pageAnswer}
  />,
    <SadFeelingsLayout
      question="How sad did you feel today?"
      handleSaveAndNext={handleSaveAndNext}
      setPageAnswer={setPageAnswer}
      readResponse={readResponse}
      pageAnswer={pageAnswer}
    />,
    <FearFeelingsLayout
      question="How fearful did you feel today?"
      handleSaveAndNext={handleSaveAndNext}
      setPageAnswer={setPageAnswer}
      readResponse={readResponse}
      pageAnswer={pageAnswer}
    />,
    <AngryFeelingsLayout
      question="How angry did you feel today?"
      handleSaveAndNext={handleSaveAndNext}
      setPageAnswer={setPageAnswer}
      readResponse={readResponse}
      pageAnswer={pageAnswer}
    />,
    
    <LonelyFeelingsLayout
      question="How lonely did you feel today?"
      handleSaveAndNext={handleSaveAndNext}
      setPageAnswer={setPageAnswer}
      readResponse={readResponse}
      pageAnswer={pageAnswer}
    />,
   
    <MindfulnessLayout
      question="Mindfulness"
      handleSaveAndNext={handleSaveAndNext}
      setPageAnswer={setPageAnswer}
      readResponse={readResponse}
      pageAnswer={pageAnswer}
    />,
    <DistressLayout
      question="Distress"
      handleSaveAndNext={handleSaveAndNext}
      setPageAnswer={setPageAnswer}
      readResponse={readResponse}
      pageAnswer={pageAnswer}
     />,
     <FeelingsLayout
        question="Emotions"
        handleSaveAndNext={handleSaveAndNext}
        setPageAnswer={setPageAnswer}
        readResponse={readResponse}
        pageAnswer={pageAnswer}
     />,
     <RelationshipsLayout
        question="Relationships"
        handleSaveAndNext={handleSaveAndNext}
        setPageAnswer={setPageAnswer}
        readResponse={readResponse}
        pageAnswer={pageAnswer}
      />,
      <ContextLayout
      question="What may have contributed to emotional responses?"
      handleSaveAndNext={handleSaveAndNext}
      setPageAnswer={setPageAnswer}
      readResponse={readResponse}
      pageAnswer={pageAnswer}
    />,
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
