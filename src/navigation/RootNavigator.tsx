import React from 'react';
import {
  NavigationContainer,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';

import SplashScreen from '../screens/SplashScreen';
import BottomNav, {BottomNavStackParam} from './BottomNavigator';
import AuthNav, {AuthStackParamList} from './AuthNavigator';
import store from '../redux/store';

export type RootStackParamList = {
  Splash: undefined;
  AuthStack: NavigatorScreenParams<AuthStackParamList>;
  MainStack: NavigatorScreenParams<BottomNavStackParam>;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Splash"
          screenOptions={{headerShown: false}}
        >
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="AuthStack" component={AuthNav} />
          <Stack.Screen name="MainStack" component={BottomNav} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default RootNavigator;
