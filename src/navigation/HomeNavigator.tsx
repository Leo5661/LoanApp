import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ApplyLoanScreen from '../screens/ApplyLoanScreen';
import LoanPackage from '../screens/LoanPackage';

export type HomeStackParamList = {
  Home: undefined;
  ApplyLoan: undefined;
  Notification: undefined;
  Settings: undefined;
  UploadDoc: undefined;
  CheckEligibility: undefined;
  LoanPackage: undefined;
  Status: undefined;
};

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

const HomeNavigator = () => {
  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}
    >
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="ApplyLoan" component={ApplyLoanScreen} />
      <HomeStack.Screen name="LoanPackage" component={LoanPackage} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
