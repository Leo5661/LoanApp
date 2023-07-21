import {View, Text} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {BottomNavStackParam} from '../navigation/BottomNavigator';

type Props = NativeStackScreenProps<BottomNavStackParam, 'LoanRepay'>;

const LoanRepayScreen = ({navigation}: Props) => {
  return (
    <View className="h-full w-full items-center justify-center">
      <Text className="text-base text-black">LoanRepayScreen</Text>
    </View>
  );
};

export default LoanRepayScreen;
