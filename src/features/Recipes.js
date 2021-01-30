import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import Meal from '../components/Meal'


const Recipes = ({ navigation }) => {
  const recipes = require('../recipes.json');
  const [filteredMeals, setFilteredMeals] = useState(recipes);
  const list = useSelector( state => state.shoppingList.list);
  console.log(list)
  const renderMeals = ({ item }) => (
    <Meal item={ item } />
  );

  const filterRecipesByIngredient = textInput => {
    setFilteredMeals(recipes.filter(meal => Object.keys(meal.ingredients)
    .some(ingredient => ingredient.includes(textInput.toLowerCase()))));
  };

  // const showAlert = () => {
  //   Alert.alert('Meal already added to the list')
  // }

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
        data={ filteredMeals }
        renderItem={ renderMeals }
        keyExtractor={ item => item.title }
        keyboardShouldPersistTaps={'always'}
      />
      {list.length > 0 && 
        <TouchableOpacity testID='shoppingList' onPress={() => navigation.navigate('ShoppingList')} >
          <Text>{ list.length }</Text>
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