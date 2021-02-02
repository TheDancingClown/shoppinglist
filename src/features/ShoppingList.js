import React from 'react';
import { StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import AddedMeals from '../components/AddedMeals'
import Ingredients from '../components/Ingredients'

const ShoppingList = () => {
  return (
    <SafeAreaView style={ styles.container }>
      <AddedMeals/>
      <Ingredients/>
      <StatusBar style="auto" />
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default ShoppingList;