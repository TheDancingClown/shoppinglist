import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from "react-redux"
import store from "./reduxStore/store"
import Recipes from './features/Recipes';
import ShoppingList from './features/ShoppingList'

export default function App() {

  const Stack = createStackNavigator();

  return (
    <Provider store={store}>
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
          options={{ title: 'Shopping List'}}
          component={ShoppingList} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

