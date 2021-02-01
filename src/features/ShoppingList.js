import React from 'react';
import { SafeAreaView, FlatList, Text, StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import AddedMeal from '../components/AddedMeal'

const ShoppingList = () => {

  const ingredients = useSelector(state => state.shoppingList.ingredients);

  return (
    <SafeAreaView style={ styles.container }>
      <AddedMeal/>
      <View style={ styles.subheading}>
        <Text style={ styles.listHeading }>Ingredients</Text>
      </View>
      <View style={{borderWidth:1}}/>
      <FlatList
        data={ Object.keys(ingredients) }
        contentContainerStyle={ styles.listContainer }
        renderItem={({item}) => (
          <Text style={styles.ingredientsText}>{item}: {ingredients[item]}</Text>
        )}
        keyExtractor={ item => item }
      />
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20
  },
  subheading: {
    alignItems: 'center',
    backgroundColor: 'lightyellow'
  },
  listContainer: {
    backgroundColor: 'lightyellow',
    alignItems: 'center',
    paddingTop: 20
  },
  ingredientsText: {
    fontSize: 20,
    fontFamily: Platform.OS === 'android'
        ? 'noteworthy'
        : 'Noteworthy',
  },
  listHeading: {
    fontSize: 25,
    margin: 10,
    fontFamily: Platform.OS === 'android'
        ? 'noteworthy'
        : 'Noteworthy',
  }
});

export default ShoppingList;