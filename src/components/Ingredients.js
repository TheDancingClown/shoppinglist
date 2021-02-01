import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Ingredients = ({ list }) => {
  return (
    <View testID='meal' style={ styles.item }>
      <Text style={ styles.bodyText }>{ list.key }</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'lightgray',
    
  },
  bodyText: {
    textAlign: 'left',
    
  },
  button: {
    borderWidth: 1
  }
});

export default Ingredients;