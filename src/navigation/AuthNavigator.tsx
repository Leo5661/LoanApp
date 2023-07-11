import React from 'react';
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {RootStackParamList} from './RootNavigator';

import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import HomeScreen from '../screens/HomeScreen';

export type AuthStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

type Props = NativeStackScreenProps<RootStackParamList, 'Auth'>;

const AuthNavigator = ({navigation}: Props) => {
  return (
    <AuthStack.Navigator
      initialRouteName="SignIn"
      screenOptions={{headerShown: false}}
    >
      <AuthStack.Screen name="SignIn" component={SignInScreen} />
      <AuthStack.Screen name="SignUp" component={SignUpScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
