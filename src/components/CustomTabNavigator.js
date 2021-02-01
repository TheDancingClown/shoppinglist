import React from 'react';
import { useSelector } from "react-redux"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Recipes from '../features/Recipes';
import ShoppingList from '../features/ShoppingList'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CustomTabNavigator = () => {

  const Tab = createBottomTabNavigator();
  const list = useSelector(state => state.shoppingList.list)

  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'Recipes') {
            return (
              <Icon
                name={focused? 'sprout' : 'sprout-outline'}
                size={size}
                color={color}
              />
            );
          } else if (route.name === 'ShoppingList') {
            return (
              <Icon
                name={focused ? 'clipboard-list' : 'clipboard-list-outline'}
                size={size}
                color={color}
              />
            );
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: 'green',
        inactiveTintColor: 'gray',
      }}>
        <Tab.Screen 
        name="Recipes"
        options={{ title: "Recipes" }}
        component={Recipes} 
        />
        <Tab.Screen 
        name="ShoppingList"
        options={{ 
          title: 'Shopping List', 
          tabBarBadge: list.length
        }} 
        component={ShoppingList} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default CustomTabNavigator;