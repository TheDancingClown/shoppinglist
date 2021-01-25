import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, FlatList, SafeAreaView } from 'react-native';
import Meal from './components/Meal'
import MealFinder from './src/MealFinder'

export default function App() {
  const recipes = require('./src/recipes.json')
  const [meals, setMeals] = useState(recipes)
  const planner = new MealFinder();

  const renderMeals = ({ item }) => (
    <Meal key={item.index} title={item.title} />
  );

  const searchIngredients = (text) => {
    setMeals(planner.filterMatchingMeals(text, recipes));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>Enter an ingredient</Text>
      <TextInput
      testID='ingredient-search'
      onChangeText={text => searchIngredients(text)}
      style={{borderColor: 'lightgray', borderWidth: 1, width: 200}}
      />
      <FlatList
        testID='recipes'
        data={meals}
        renderItem={renderMeals}
        extraData={meals}
        keyExtractor={item => item.key}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20
  },
});
