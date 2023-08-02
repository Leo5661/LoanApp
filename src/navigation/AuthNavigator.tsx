import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import BottomNavigator, {BottomNavStackParam} from './BottomNavigator';
import {NavigatorScreenParams} from '@react-navigation/native';
import BioAuthSetupScreen from '../screens/BioAuthSetupScreen';

export type AuthStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  BioAuth: undefined;
  Main: NavigatorScreenParams<BottomNavStackParam>;
};

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator
      initialRouteName="SignIn"
      screenOptions={{headerShown: false}}
    >
      <AuthStack.Screen name="SignIn" component={SignInScreen} />
      <AuthStack.Screen name="SignUp" component={SignUpScreen} />
      <AuthStack.Screen name="Main" component={BottomNavigator} />
      <AuthStack.Screen name="BioAuth" component={BioAuthSetupScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
