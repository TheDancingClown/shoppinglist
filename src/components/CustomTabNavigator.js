import React from 'react';
import { useSelector } from "react-redux"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Recipes from '../features/Recipes';
import ShoppingList from '../features/ShoppingList'

const CustomTabNavigator = () => {

  const Tab = createBottomTabNavigator();
  const list = useSelector(state => state.shoppingList.list)

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
        name="Recipes"
        options={{ title: "Recipes" }}
        component={Recipes} 
        />
        <Tab.Screen 
        name="ShoppingList"
        options={{ 
          title: 'Shopping List', 
          tabBarLabel: `Shopping List: ${list.length}`}}
        component={ShoppingList} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default CustomTabNavigator;