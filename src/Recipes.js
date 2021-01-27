import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import Meal from '../components/Meal'

const Recipes = ({ navigation }) => {
  const recipes = require('../src/recipes.json');
  const [meals, setMeals] = useState(recipes);
  const [shoppingList, setShoppingList] = useState([]);
  
  const renderMeals = ({ item }) => (
    <Meal item={ item } addItem={ addMealToShoppingList } />
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
    <SafeAreaView style={ styles.container }>
      <Text>Search By Ingredient</Text>
      <TextInput
        testID='ingredientSearch'
        onChangeText={ text => filterRecipesByIngredient(text) }
        style={{ borderColor: 'lightgray', borderWidth: 1, width: 200 }}
      />
      <FlatList
        testID='recipes'
        data={ meals }
        renderItem={ renderMeals }
        extraData={ meals }
        keyextractor={ item => item.id.toString() }
        keyboardShouldPersistTaps={'always'}
      />
      {shoppingList.length>0 && 
        <TouchableOpacity testID='shoppingList' onPress={() => navigation.navigate('ShoppingList', { shoppingList })} >
          <Text>{ shoppingList.length }</Text>
        </TouchableOpacity> 
      } 
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20
  }
});

export default Recipes;