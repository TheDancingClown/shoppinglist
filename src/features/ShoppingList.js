import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList, Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeMeal } from '../features/shoppingListSlice' 

const ShoppingList = () => {
  
  const list = useSelector( state => state.shoppingList.list);
  const ingredients = useSelector( state => state.shoppingList.ingredients);
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
    <SafeAreaView style={ styles.container }>
      <FlatList
      data={ list }
      renderItem={ renderItems }
      keyExtractor={ item => item.title }
      />
      <FlatList
      data={ Object.keys(ingredients) }
      renderItem={({item}) => (<Text>{item}: {ingredients[item]}</Text>) }
      keyExtractor={ item => item}
      />
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    paddingTop: 20
  }
});

export default ShoppingList;