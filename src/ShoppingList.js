import React from 'react';
import { SafeAreaView, FlatList, Text, StyleSheet } from 'react-native';

const ShoppingList = ({ route }) => {
  
  const { shoppingList } = route.params;

  const renderItems = ({ item }) => (
    <Text>{item.title}</Text>
  );

  return (
    <SafeAreaView style={ styles.container }>
      <FlatList
      data={ shoppingList }
      renderItem={ renderItems } 
      extraData={ shoppingList }
      />
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



export default ShoppingList