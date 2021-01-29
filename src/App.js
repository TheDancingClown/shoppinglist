import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Recipes from './Recipes';
import ShoppingList from './ShoppingList'

export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: 'bold'}}}>
        <Stack.Screen 
        name="Recipes"
        options={{ title: "Recipes" }}
        component={Recipes} 
        />
        <Stack.Screen 
        name="ShoppingList"
        options={{ title: 'Shopping List', headerLeft: null }}
        component={ShoppingList} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

