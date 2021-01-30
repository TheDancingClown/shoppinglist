import { createSlice } from "@reduxjs/toolkit";

const shoppingList = createSlice({
  name: 'shoppingList',
  initialState: {
    list: []
  },
  reducers: {
    addMeal: (state, action) => {
      if(!shoppingList.caseReducers.alreadyAdded(state, action)) {
        state.list.push(action.payload)
      }
    },
    alreadyAdded: (state, action) => {
      for (var i=0; i < state.list.length; i++) {
        if (state.list[i].title == action.payload.title) {
          return true;
        };
      };
    },
    removeMeal: (state, action) => {
      state.list = state.list.filter((item) => item.title != action.payload.title) 
    }
  }
});

export const {
  addMeal,
  removeMeal
} = shoppingList.actions
export default shoppingList.reducer