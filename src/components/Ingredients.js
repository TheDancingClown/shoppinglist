import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

const Ingredients = () => {
  const ingredients = useSelector(state => state.shoppingList.ingredients);

  const renderIngredient = ({ item }) => (
    <Text style={styles.ingredientsText}>{item}: {ingredients[item]}</Text>
  );

  return (
    <View style={ styles.innerContainer} >
      <Text style={ styles.listHeading }>Ingredients</Text>
      <View style={ styles.divider } /> 
      <FlatList
        data={ Object.keys(ingredients) }
        contentContainerStyle={ styles.listContainer }
        renderItem={ renderIngredient } 
        keyExtractor={ item => item }
      />
    </View>
  )
};

const styles = StyleSheet.create({
  innerContainer: {
    alignItems: 'center',
    backgroundColor: 'lightyellow',
    flex: 1
  },
  divider: {
    borderWidth: 1,
    alignSelf: 'stretch'
  },
  listContainer: {
    justifyContent: 'flex-start',
    paddingTop: 20
  },
  ingredientsText: {
    fontSize: 20,
    fontFamily: Platform.OS === 'android'
        ? 'noteworthy'
        : 'Noteworthy', //need to fix
  },
  listHeading: {
    fontSize: 25,
    margin: 10,
    fontFamily: 'Noteworthy',
  }
});

export default Ingredients;