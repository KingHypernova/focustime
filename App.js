import React, { useState } from 'react';
import { Text, View, StyleSheet, Platform, SafeAreaView, StatusBar } from 'react-native';
import { colors } from './src/utils/colors';
// import Constants from 'expo-constants';
import { Focus } from './src/features/Focus';
import { Timer } from './src/features/Timer';
import {FocusHistory} from './src/features/FocusHistory'

export default function App() {

  const [currentSubject, setCurrentSubject] = useState('test0');
  const [history, setHistory] = useState([]);
  
  return (

    <SafeAreaView style={styles.container}>
      {
        //If current subject isn't input, show Focus.js logic, else if it was inputted then show it as text
        !currentSubject
        ? (
          <>
            <Focus addSubject = {setCurrentSubject} />
            <FocusHistory history={history} />
          </>
        ) : (
          <Timer
            focusSubject = {currentSubject}
            onTimerEnd = { (subject) => setHistory([...history, subject])}
            clearSubject = { () => {setCurrentSubject(null)} }
          />
        )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.darkBlue
  },

});
