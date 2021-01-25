import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, FlatList } from 'react-native';
import MealFinder from './src/MealFinder'

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);


export default function App() {
  const DATA = [
    {
      "title": "Peanut satay tempeh with chilli & crispy kale rice",
      "ingredients": {
        "carrot": "200 g",
        "kale": "80 g",
        "brown rice": "80 g",
        "tempeh": "200 g",
        "chilli": "0.5 units",
        "coriander": "1 units",
        "ginger": "1 units",
        "lime": "1 units",
        "spring onion": "2 units",
        "tamari": "2 units",
        "maple syrup": "1 tbls",
        "peanut paste": "2 tbls"
      }
    }
  ]
  const [meals, setMeals] = useState([])
  const planner = new MealFinder();
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  const searchIngredients = (text) => {
    setMeals(planner.filterMatchingMeals(text, DATA));
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
