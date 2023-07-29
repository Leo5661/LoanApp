import {View, Text} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {BottomNavStackParam} from '../navigation/BottomNavigator';
import RepaymentCard from '../components/RepaymentCard';

type Props = NativeStackScreenProps<BottomNavStackParam, 'LoanRepay'>;

const LoanRepayScreen = ({navigation}: Props) => {
  return (
    <View className="h-full w-full items-center ">
      <View className="h-44 w-full bg-indigo-600">
        <Text className="mt-4 p-4 font-mono text-3xl text-gray-200">
          Repayment
        </Text>

        <View className="mt-4 w-full items-center justify-center">
          <RepaymentCard />
        </View>

        <View className="mt-8 w-full items-start border-b border-gray-300 px-4">
          <Text className="text-xl font-medium text-gray-600">
            Recent Transactions
          </Text>
        </View>
      </View>
    </View>
  );
};

export default LoanRepayScreen;
