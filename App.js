import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, SafeAreaView } from 'react-native';
import Meal from './components/Meal'
import { v4 as uuidv4 } from 'uuid';

export default function App() {
  const recipes = require('./src/recipes.json');
  const [meals, setMeals] = useState(recipes);
  const [shoppingList, setShoppingList] = useState([]);
  
  const renderMeals = ({ item }) => (
    <Meal item={item} addItem={addMealToShoppingList} />
  );

  const filterRecipesByIngredient = (textInput) => {
    setMeals(recipes.filter(meal => Object.keys(meal.ingredients)
    .some(ingredient => ingredient.includes(textInput.toLowerCase()))));
  };

  const addMealToShoppingList = (item) => {
    setShoppingList(prevItems => {
      return [...prevItems, item]
    })
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>Search By Ingredient</Text>
      <TextInput
        testID='ingredientSearch'
        onChangeText={text => filterRecipesByIngredient(text)}
        style={{borderColor: 'lightgray', borderWidth: 1, width: 200}}
      />
      <FlatList
        testID='recipes'
        data={meals}
        renderItem={renderMeals}
        extraData={meals}
        keyextractor={(item) => item.title}
      />
      {shoppingList.length>0 && 
        <Text testID='shoppingList'>{shoppingList.length}</Text>
      } 
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
  }
});
