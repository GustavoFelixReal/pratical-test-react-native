import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchField from './components/SearchField';
import {API_KEY} from '@env';

export default function App() {
  useEffect(() => {
    axios.get('https://api.nytimes.com/svc/books/v3/lists/overview.json', {
      params: { 'api-key': API_KEY },
    }).then(res => {
      console.log(res.data)
    }).catch(err => {
      console.log(err.data)
    });
  })


  return (
    <View style={styles.container}>
      <SearchField onChange={() => console.log('teste')} />

      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
