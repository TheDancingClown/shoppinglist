import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { addMeal } from '../features/shoppingListSlice' 

const Meal = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <View testID='meal' style={ styles.item }>
      <Text style={ styles.title }>{ item.title }</Text>
      <TouchableOpacity 
        testID='addMeal'
        style={ styles.button }
        onPress={() => dispatch(addMeal(item))}>
        <Text>Add</Text>
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'lightgray',
    margin: 2
  },
  title: {
    textAlign: 'left'
  },
  button: {
    borderWidth: 1
  }
});

export default Meal;