import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Ingredients = ({ list }) => {
  const 
  return (
  <View testID='meal' style={ styles.item }>
    <Text style={ styles.title }>{ list.key }</Text>
  </View>)
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

export default Ingredients;