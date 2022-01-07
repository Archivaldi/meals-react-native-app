import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import  AppLoading from 'expo-app-loading';
import {enableScreens} from 'react-native-screens';

import MealsNavigator from './navigation/MealsNavigation';

enableScreens();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const fetchFonts = () => {
    return Font.loadAsync({
      'open-sans': require("./assets/fonts/OpenSans-Regular.ttf"),
      'open-sans-bold': require("./assets/fonts/OpenSans-Bold.ttf")
    })
  };

  if (!fontsLoaded){
    return <AppLoading startAsync={fetchFonts} onFinish={() => setFontsLoaded(true)} onError={(err) => console.log(err)} />
  };

  return <MealsNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
