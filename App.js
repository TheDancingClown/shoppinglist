import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [searchValue, setSearch] = useState('')

  return (
    <View style={styles.container}>
      <Text>Enter an ingredient</Text>
      <TextInput
      onChangeText={text => setSearch(text)}
      style={{borderColor: 'black', borderWidth: 1, width: 200}}
      />
      <Text>{searchValue}</Text>
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
