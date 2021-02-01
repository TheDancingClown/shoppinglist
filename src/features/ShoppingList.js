import React from 'react';
import { SafeAreaView, FlatList, Text, StyleSheet, View } from 'react-native';
import AddedMeals from '../components/AddedMeals'
import Ingredients from '../components/Ingredients'

const ShoppingList = () => {
  return (
    <SafeAreaView style={ styles.container }>
      <AddedMeals/>
      <Ingredients/>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20
  },
});

export default ShoppingList;