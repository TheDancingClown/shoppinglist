import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { removeMeal } from '../features/shoppingListSlice' 

const AddedMeals = () => {
  const list = useSelector( state => state.shoppingList.list);
  const dispatch = useDispatch();

  const renderMeal = ({ item }) => (
    <View style={ styles.mealContainer}>
      <Text>{item.title}</Text>
      <TouchableOpacity 
        onPress={() => dispatch(removeMeal(item)) }
        style={ styles.removeButton }>
        <Text style={{ color: 'white' }}>X</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View testID='added meal' style={ styles.container }>
      <FlatList
      data={ list }
      renderItem={ renderMeal }
      keyExtractor={ item => item.title }
      />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'lightgray',
    padding: 10
  },
  mealContainer: {
    flexDirection: 'row', 
    alignItems: 'stretch', 
    justifyContent: 'space-between',
    margin: 2
  },
  title: {
    textAlign: 'center',
    margin: 5
  },
  removeButton: {
    backgroundColor: 'red',
     borderRadius: 4
  },
});

export default AddedMeals;