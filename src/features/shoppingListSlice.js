import { createSlice } from "@reduxjs/toolkit";
import { Alert } from 'react-native'

const shoppingList = createSlice({
  name: 'shoppingList',
  initialState: {
    list: [],
    ingredients: {}
  },
  reducers: {
    addMeal: (state, action) => {
      if(!shoppingList.caseReducers.alreadyAdded(state, action)) {
        state.list.push(action.payload);
        shoppingList.caseReducers.addIngredients(state, action);
      } else {
        shoppingList.caseReducers.alreadyAddedAlert()
      }
    },
    alreadyAdded: (state, action) => {
      for (var i=0; i < state.list.length; i++) {
        if (state.list[i].title == action.payload.title) {
          return true;
        };
      };
    },
    addIngredients: (state, action) => {
      newList = {}
      for (const [ingredient, value] of Object.entries(action.payload.ingredients)) {
        if(state.ingredients[ingredient] !== undefined) {
          newList[ingredient] = value + state.ingredients[ingredient]
        } else {
          newList[ingredient] = value
        }
      }
      Object.assign(state.ingredients, newList)
    },
    removeMeal: (state, action) => {
      state.list = state.list.filter((item) => item.title !== action.payload.title);
      shoppingList.caseReducers.removeIngredients(state, action);
    },
    removeIngredients: (state, action) => {
      newList = {}
      for (const [ingredient, value] of Object.entries(action.payload.ingredients)) {
        if(state.ingredients[ingredient] - value == 0) {
          delete state.ingredients[ingredient]
        } else {
          newList[ingredient] = state.ingredients[ingredient] - value
        }
      }
      Object.assign(state.ingredients, newList)
    },
    alreadyAddedAlert: () => {
      Alert.alert("Meal has already been added")
    }
  }
});

export const {
  addMeal,
  removeMeal
} = shoppingList.actions
export default shoppingList.reducer