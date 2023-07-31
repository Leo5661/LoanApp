import React, {useEffect} from 'react';
import {
  NavigationContainer,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import BottomNav, {BottomNavStackParam} from './BottomNavigator';
import AuthNav, {AuthStackParamList} from './AuthNavigator';
import {useAppDispatch, useAppSelector} from '../hooks/useReduxHooks';
import messaging, {
  FirebaseMessagingTypes,
} from '@react-native-firebase/messaging';
import {
  FCMNotificationListType,
  setNotification,
  setDeviceToken,
} from '../redux/slices/notificationSlice';

export type RootStackParamList = {
  Splash: undefined;
  AuthStack: NavigatorScreenParams<AuthStackParamList>;
  MainStack: NavigatorScreenParams<BottomNavStackParam>;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  const deviceToken = useAppSelector(
    state => state.persistedReducer.notification.deviceToken,
  );
  const dispatch = useAppDispatch();

  const setNotificaion = (
    remoteMessage: FirebaseMessagingTypes.RemoteMessage,
  ) => {
    const notificationData: FCMNotificationListType = {
      title: remoteMessage.notification?.title,
      body: remoteMessage.notification?.body,
      data: remoteMessage.data,
      time: remoteMessage.sentTime,
    };

    dispatch(setNotification(notificationData));
  };

  useEffect(() => {
    const getDiviceToken = async () => {
      await messaging().registerDeviceForRemoteMessages();
      const token = await messaging().getToken();
      console.log('Divice Token: ', token);
      dispatch(setDeviceToken(token));

      if (!deviceToken) {
        getDiviceToken();
      }
    };
  }, []);

  useEffect(() => {
    const unsubscribe = messaging().setBackgroundMessageHandler(
      async remoteMessage => {
        console.log(
          'A new background FCM message arrived!',
          JSON.stringify(remoteMessage),
        );
        setNotificaion(remoteMessage);
      },
    );

    return unsubscribe;
  }, []);

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log('A new FCM message arrived!', JSON.stringify(remoteMessage));
      setNotificaion(remoteMessage);
    });

    return unsubscribe;
  }, []);

  return (
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
  );
};

export default RootNavigator;
