import React, { useEffect } from 'react';
import { Provider } from "react-redux"
import store from "./src/reduxStore/store"
import * as ScreenOrientation from 'expo-screen-orientation'
import CustomTabNavigator from "./src/components/CustomTabNavigator"

export default function App() {
  useEffect(() => {
    const changeScreenOrientation = async () => {
      await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.PORTRAIT
      )
    }
    changeScreenOrientation()
  })
  

  return (
    <Provider store={store}>
      <CustomTabNavigator/>
    </Provider>
  );
};

