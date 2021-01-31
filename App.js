import React from 'react';
import { Provider } from "react-redux"
import store from "./src/reduxStore/store"
import CustomTabNavigator from "./src/components/CustomTabNavigator"

export default function App() {

  return (
    <Provider store={store}>
      <CustomTabNavigator/>
    </Provider>
  );
};

