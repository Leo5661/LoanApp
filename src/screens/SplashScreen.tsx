import React, {useEffect} from 'react';
// import {useAuth} from '../hooks/useAuth';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/RootNavigator';
import {Text, View} from 'react-native';

type Props = NativeStackScreenProps<RootStackParamList, 'Splash'>;

const SplashScreen = ({navigation}: Props) => {
  // const {user} = useAuth();

  useEffect(() => {
    setTimeout(() => {
      if (true) {
        navigation.replace('Auth');
      } else {
        navigation.replace('Main');
      }
    }, 3000);
  });

  return (
    <View className="h-full w-full items-center justify-center">
      <Text className="text-base text-black">SignUpScreen</Text>
    </View>
  );
};

export default SplashScreen;
