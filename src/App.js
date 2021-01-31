import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from "react-redux"
import store from "./reduxStore/store"
import Recipes from './features/Recipes';
import ShoppingList from './features/ShoppingList'

export default function App() {

  const Tab = createBottomTabNavigator();


  return (
    <Provider store={store}>
      <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold'}}}>
          <Tab.Screen 
          name="Recipes"
          options={{ title: "Recipes" }}
          component={Recipes} 
          />
          <Tab.Screen 
          name="ShoppingList"
          options={{ title: 'Shopping List'}}
          component={ShoppingList} 
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

