import React from 'react';
import { StyleSheet, ScrollView, View, Image } from 'react-native';

export default function LineGraphScreen() {
  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#49464A',
    height: 700,
  },
});