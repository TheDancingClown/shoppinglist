import React, { useState } from 'react';
import { SafeAreaView, FlatList, Text, StyleSheet, View, TouchableOpacity } from 'react-native';

const ShoppingList = ({ route, navigation }) => {
  
  const { shoppingList, setShoppingList } = route.params;
  const [list, setList] = useState(shoppingList)
  
  const removeItem = id => {
    setList(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  }

  const goBack = () => {
    setShoppingList(list)
    navigation.navigate('Recipes')
  }

  const renderItems = ({ item }) => (
    <View>
      <Text>{item.title}</Text>
      <TouchableOpacity onPress={() => removeItem(item.id) }>
        <Text>Remove</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={ styles.container }>
      <FlatList
      data={ list }
      renderItem={ renderItems }
      extraData= { list }
      keyextractor={ item => item.id.toString() }
      />
      <TouchableOpacity
      onPress={() => goBack() }>
        <Text>See Recipes</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20
  }
});

export default ShoppingList;