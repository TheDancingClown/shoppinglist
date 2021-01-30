import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList, Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeMeal } from '../features/shoppingListSlice' 

const ShoppingList = () => {
  
  const { list } = useSelector( state => state.shoppingList);
  const dispatch = useDispatch();
  const [ingredientsList, setIngredientsList] = useState([]);

  useEffect(() => {
    setIngredientsList(listUniqueIngredients(list))
  }, [])
  
  // const removeItem = title => {
  //   setList(prevItems => {
  //     return prevItems.filter(item => item.title != title);
  //   });
  // }

  const listUniqueIngredients = list => {
    var newList = {}
    list.forEach(meal => Object.assign(newList, meal.ingredients))
    return Object.keys(newList)
  }

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
      data={ ingredientsList }
      renderItem={({item}) => (<Text>{item}</Text>) }
      keyExtractor={ item => item.key}
      extraData={ ingredientsList }
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