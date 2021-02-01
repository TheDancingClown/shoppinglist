import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, FlatList, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
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
      <View style={styles.searchContainer}>
        <Text style={{ fontSize: 20 }}>Search By Ingredient</Text>
        <TextInput
          testID='ingredientSearch'
          onChangeText={ text => filterRecipesByIngredient(text) }
          style={ styles.textInput }
        />
      </View>
      <FlatList
        style={ styles.list }
        testID='recipes'
        data={ filteredMeals }
        numColumns={ 2 }
        contentContainerStyle={ styles.listContainer }
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        renderItem={ renderMeals }
        keyExtractor={ item => item.title }
        keyboardShouldPersistTaps={ 'always' }
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  searchContainer: {
    alignItems: 'center',
    fontSize: 20,
    marginTop: 10
  },
  listContainer: {
  paddingHorizontal: 30,
   shadowOffset: {
      width: 0,
      height: 2
    },
    shadowColor: 'black',
    shadowOpacity: 0.5
  },
  columnWrapperStyle: {
    justifyContent: 'space-between',
  },
  textInput: {
    borderColor: 'lightgray',
    borderWidth: 1,
    width: 200,
    marginBottom: 10
  }
});

export default Recipes;