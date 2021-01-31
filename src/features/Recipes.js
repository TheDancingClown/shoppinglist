import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, FlatList, SafeAreaView } from 'react-native';
import recipes from '../assets/recipes'
import Meal from '../components/Meal'


const Recipes = () => {
  const [filteredMeals, setFilteredMeals] = useState(recipes);
  const renderMeals = ({ item }) => (
    <Meal item={ item } />
  );

  const filterRecipesByIngredient = textInput => {
    setFilteredMeals(recipes.filter(meal => Object.keys(meal.ingredients)
    .some(ingredient => ingredient.includes(textInput.toLowerCase()))));
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
        style={ styles.list }
        testID='recipes'
        data={ filteredMeals }
        numColumns={2}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        renderItem={ renderMeals }
        keyExtractor={ item => item.title }
        keyboardShouldPersistTaps={'always'}
      />
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
    paddingTop: 20,
    flexDirection: 'column'
  },
  list: {
    flexDirection: 'row',
  }
});

export default Recipes;