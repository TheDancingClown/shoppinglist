import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, FlatList } from 'react-native';
import MealFinder from './src/MealFinder'

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);


export default function App() {
  const recipes = require('./src/recipes.json')
  const [meals, setMeals] = useState([])
  const planner = new MealFinder();
  const renderItem = ({ item }) => (
    <Item key={item.index} title={item.title} />
  );

  const searchIngredients = async (text) => {
    setMeals(planner.filterMatchingMeals(text, recipes));
  };

  return (
    <View style={styles.container}>
      <Text>Enter an ingredient</Text>
      <TextInput
      onChangeText={text => searchIngredients(text)}
      style={{borderColor: 'black', borderWidth: 1, width: 200}}
      />
      <FlatList
        data={meals}
        renderItem={renderItem}
        extraData={meals}
        keyExtractor={item => item.key}
      />
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
