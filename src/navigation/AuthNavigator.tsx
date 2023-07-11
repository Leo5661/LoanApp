import {Text, View} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from './RootNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'Auth'>;

const AuthNavigator = ({navigation}: Props) => {
  return (
    <View className="h-full w-full items-center justify-center">
      <Text className="text-base text-black">AuthNavigator</Text>
    </View>
  );
};

export default AuthNavigator;
