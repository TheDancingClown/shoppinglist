import { configureStore } from "@reduxjs/toolkit";
import shoppingList from "../features/shoppingListSlice.js"

const store = configureStore({
  reducer: {
    shoppingList
  }
});

export default store;