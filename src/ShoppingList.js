import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList, Text, StyleSheet, View, TouchableOpacity } from 'react-native';

const ShoppingList = ({ route, navigation }) => {
  
  const { shoppingList, setShoppingList } = route.params;
  const [list, setList] = useState(shoppingList);
  const [ingredientsList, setIngredientsList] = useState([]);
  
  const removeItem = title => {
    setList(prevItems => {
      return prevItems.filter(item => item.title != title);
    });
  }
  
  const goBack = () => {
    //should use Redux
    setShoppingList(list)
    navigation.navigate('Recipes')
  }

  const renderItems = ({ item }) => (
    <View>
      <Text>{item.title}</Text>
      <TouchableOpacity onPress={() => removeItem(item.title) }>
        <Text>Remove</Text>
      </TouchableOpacity>
    </View>
  );
  
  // useEffect(() => {
  //   let newList = ingredientsList
  //   for(const recipe of list) {
  //     // for(const [key,value] of recipe.ingredients) {
  //     //   if(newList[key]) {
  //     //     newList[key] += value
  //     //   } else {
  //     //     newList[key] = value
  //     //   }
  //     // }
  //     newList.push(recipe)
  //   }
  //   setIngredientsList(shoppingList)
  // })

  return (
    <SafeAreaView style={ styles.container }>
      <FlatList
      data={ list }
      renderItem={ renderItems }
      keyextractor={ item => item.id.toString() }
      />
     
      <TouchableOpacity
      onPress={() => goBack() }>
        <Text style={{textAlign: 'center'}}>See Recipes</Text>
      </TouchableOpacity>
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