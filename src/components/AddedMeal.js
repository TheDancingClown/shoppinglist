import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { removeMeal } from '../features/shoppingListSlice' 

const AddedMeal = () => {
  const list = useSelector( state => state.shoppingList.list);
  const dispatch = useDispatch();

  const renderItems = ({ item }) => (
    <View>
      <Text>{item.title}</Text>
      <TouchableOpacity onPress={() => dispatch(removeMeal(item)) }>
        <Text>Remove</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View testID='added meal' style={ styles.container }>
      <FlatList
      data={ list }
      renderItem={ renderItems }
      keyExtractor={ item => item.title }
      />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'lightgray',
    padding: 10
  },
  title: {
    textAlign: 'center',
    margin: 5
  },
  button: {
    borderWidth: 1,
    width: 50,
    padding: 5,
    alignSelf: 'center',
  },
  thumbnail: {
    height: 120,
    width: 120,
    alignSelf: 'center',
  }
});

export default AddedMeal;