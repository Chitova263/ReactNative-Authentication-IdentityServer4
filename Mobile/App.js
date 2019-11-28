import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import Loading from './screens/Loading';
import Login from './screens/Login';
import Home from './screens/Home';

const AppSwitchNavigator = createSwitchNavigator({
  Loading,
  Home,
  Login,
});

const AppNavigator = createAppContainer(AppSwitchNavigator);


function App() {
  return <AppNavigator/> 
};

const styles = StyleSheet.create({
  
});

export default App;
