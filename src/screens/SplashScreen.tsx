import React, {useEffect, useRef} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/RootNavigator';
import {Image, Text, View, ToastAndroid} from 'react-native';
import {useAuth} from '../hooks/useAuth';
import {useAppSelector} from '../hooks/useReduxHooks';
import RTNBioAuth from 'rtn-bio_auth/js/NativeBioAuth';

type Props = NativeStackScreenProps<RootStackParamList, 'Splash'>;

const SplashScreen = ({navigation}: Props) => {
  const {user} = useAuth();
  const isBioAuthActive = useAppSelector(
    state => state.persistedReducer.bioAuth.isBioAuth,
  );

  const currentUserRef = useRef(user);
  currentUserRef.current = user;

  const bioAuth = async () => {
    console.log('BioAuth open');
    try {
      const isAuthenticated = await RTNBioAuth?.authenticate();
      if (isAuthenticated) {
        navigation.replace('MainStack', {
          screen: 'HomeStack',
          params: {screen: 'Home'},
        });
      } else {
        navigation.replace('AuthStack', {screen: 'SignIn'});
        ToastAndroid.show(
          'Authentication Failed, Please login again',
          ToastAndroid.SHORT,
        );
      }
    } catch (e) {
      console.log(e);
      navigation.replace('AuthStack', {screen: 'SignIn'});
    }
  };

  useEffect(() => {
    setTimeout(() => {
      console.log(!currentUserRef, currentUserRef);
      if (!currentUserRef) {
        navigation.replace('AuthStack', {screen: 'SignIn'});
      } else if (isBioAuthActive) {
        bioAuth();
      } else {
        navigation.replace('MainStack', {
          screen: 'HomeStack',
          params: {screen: 'Home'},
        });
      }
    }, 3000);
  }, []);

  return (
    <View className="h-full w-full items-center justify-center">
      <View className="w-full items-center justify-center">
        <Image
          className="h-44 w-36 animate-bounce border"
          source={require('../assets/splash.png')}
        />
      </View>
      <Text className="text-2xl tracking-wider text-slate-900">Loan App</Text>
    </View>
  );
};

export default SplashScreen;
