import {View, Text} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackParamList} from '../navigation/AuthNavigator';

type Props = NativeStackScreenProps<AuthStackParamList, 'SignUp'>;

const SignUpScreen = ({navigation}: Props) => {
  return (
    <View className="h-full w-full items-center justify-center">
      <Text className="text-base text-black">SignUpScreen</Text>
    </View>
  );
};

export default SignUpScreen;
