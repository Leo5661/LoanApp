import React, {useEffect} from 'react';
// import {useAuth} from '../hooks/useAuth';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/RootNavigator';
import {Image, Text, View} from 'react-native';
import {useAuth} from '../hooks/useAuth';

type Props = NativeStackScreenProps<RootStackParamList, 'Splash'>;

const SplashScreen = ({navigation}: Props) => {
  const {user} = useAuth();

  useEffect(() => {
    setTimeout(() => {
      if (!user) {
        navigation.replace('Auth');
      } else {
        navigation.replace('Main');
      }
    }, 3000);
  });

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
