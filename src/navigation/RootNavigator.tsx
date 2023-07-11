import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';

import SplashScreen from '../screens/SplashScreen';
import BottomNav from './BottomNavigator';
import AuthNav from './AuthNavigator';
import store from '../redux/store';

export type RootStackParamList = {
  Splash: undefined;
  Auth: undefined;
  Main: undefined;
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
          <Stack.Screen name="Auth" component={AuthNav} />
          <Stack.Screen name="Main" component={BottomNav} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default RootNavigator;
