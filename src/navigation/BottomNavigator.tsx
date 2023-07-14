import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import LoanRepayScreen from '../screens/LoanRepayScreen';
import HomeNavigator, {HomeStackParamList} from './HomeNavigator';
import {NavigatorScreenParams} from '@react-navigation/native';

export type BottomNavStackParam = {
  Splash: undefined;
  HomeStack: NavigatorScreenParams<HomeStackParamList>;
  LoanRepay: undefined;
};

const BottomNavStack = createMaterialBottomTabNavigator<BottomNavStackParam>();

const BottomNavigator = () => {
  return (
    <BottomNavStack.Navigator
      initialRouteName="HomeStack"
      activeColor="rgb(79 70 229)"
      labeled={true}
      inactiveColor="#c0c0c0"
      barStyle={{
        backgroundColor: 'transparent',
        height: 70,
        borderTopWidth: 1,
        borderTopColor: 'rgb(229 231 235)',
      }}
    >
      <BottomNavStack.Screen
        name="HomeStack"
        component={HomeNavigator}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <Ionicons name="md-home-outline" color={color} size={20} />
          ),
        }}
      />
      <BottomNavStack.Screen
        name="LoanRepay"
        component={LoanRepayScreen}
        options={{
          tabBarLabel: 'Repay',
          tabBarIcon: ({color}) => (
            <Ionicons name="card-outline" color={color} size={20} />
          ),
        }}
      />
    </BottomNavStack.Navigator>
  );
};

export default BottomNavigator;
