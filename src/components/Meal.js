import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { addMeal } from '../features/shoppingListSlice' 

const Meal = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <View testID='meal' style={ styles.item }>
      <Image style={ styles.thumbnail} source={ item.thumbnail } />
      <Text style={ styles.title }>{ item.title }</Text>
      <TouchableOpacity 
        testID='addMeal'
        style={ styles.button }
        onPress={() => dispatch(addMeal(item))}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
      
    </View>
  )
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: 'lightgray',
    margin: 10,
    maxWidth: 150,
    padding: 10 
  },
  title: {
    textAlign: 'center',
    margin: 5,
    shadowOpacity: 0,
    height: 70
  },
  button: {
    borderRadius: 4,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20
  },
  thumbnail: {
    height: 120,
    width: 120,
    alignSelf: 'center'
  }
});

export default Meal;