import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import LoanRepayScreen from '../screens/LoanRepayScreen';

export type BottomNavStackParam = {
  Splash: undefined;
  Home: undefined;
  LoanRepay: undefined;
};

const BottomNavStack = createMaterialBottomTabNavigator<BottomNavStackParam>();

const BottomNavigator = () => {
  return (
    <BottomNavStack.Navigator
      initialRouteName="Home"
      activeColor="#2d548f"
      inactiveColor="#77797c"
    >
      <BottomNavStack.Screen name="Home" component={HomeScreen} />
      <BottomNavStack.Screen name="LoanRepay" component={LoanRepayScreen} />
    </BottomNavStack.Navigator>
  );
};

export default BottomNavigator;
