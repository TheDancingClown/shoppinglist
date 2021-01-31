import React from 'react';
import { SafeAreaView, FlatList, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import AddedMeal from '../components/AddedMeal'

const ShoppingList = () => {

  const ingredients = useSelector(state => state.shoppingList.ingredients);

  return (
    <SafeAreaView style={ styles.container }>
      <AddedMeal/>
      <FlatList
      data={ Object.keys(ingredients) }
      renderItem={({item}) => (<Text>{item}: {ingredients[item]}</Text>) }
      keyExtractor={ item => item}
      />
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    paddingTop: 20
  }
});

export default ShoppingList;