import {View, Text, ToastAndroid} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useAppSelector} from '../hooks/useReduxHooks';
import MaterialButtonSolid from './MaterialButtonSolid';

type Props = {};

const RepaymentCard = (props: Props) => {
  let dateTime, date;
  const loan = useAppSelector(state => state.persistedReducer.loan);

  const currentEmiInstalment = loan.instalmentAmount.toLocaleString('en-US', {
    currency: 'INR',
  });
  if (loan.borrowedDate) {
    dateTime = new Date(loan.borrowedDate).toLocaleString().split(' ');
    date = dateTime[0].split('/');
  }

  if (loan.principleAmount === 0) {
    return (
      <View className="mt-4 h-40 w-11/12 flex-col justify-around rounded-md bg-white p-4 shadow-md">
        <Text className="w-full text-center text-xl font-light text-gray-500">
          No loan in your Account!
        </Text>

        <View className="mt-4">
          <MaterialButtonSolid
            text="Apply for loan"
            onPress={() => {
              ToastAndroid.show('Apply for loan from home', ToastAndroid.SHORT);
            }}
          />
        </View>
      </View>
    );
  }

  return (
    <View className="mt-4 w-11/12 flex-col rounded-md bg-white p-4 shadow-md">
      <Text className="text-gray-500">Current amount due</Text>
      <View className="mt-2 flex-row items-end px-2">
        <FontAwesome name="rupee" color={'gray'} size={30} />
        <Text className="ml-2 text-4xl font-semibold text-gray-500">
          {currentEmiInstalment}
        </Text>
      </View>

      <View className="mt-4 flex-row justify-between">
        <View className="ml-2 flex-col">
          <Text className="w-fit text-sm text-gray-500">Due date</Text>

          <Text className="text-base font-semibold text-gray-500 ">
            {`02 - ${parseInt(date![1]) + 1} - ${date![2].slice(0, -1)}`}
          </Text>
        </View>

        <View className="mr-2 flex-col">
          <Text className="w-fit text-gray-500 first-letter:text-sm">
            Intrest Rate
          </Text>

          <Text className="w-fit text-base text-gray-500">
            {`${loan.intrestRate}% `}
            <Text className="w-fit text-sm text-gray-400">p.a.</Text>
          </Text>
        </View>
      </View>

      <View className="mt-4">
        <MaterialButtonSolid
          text="Repay"
          onPress={() => {
            ToastAndroid.show('Payment portel will open', ToastAndroid.SHORT);
          }}
        />
      </View>
    </View>
  );
};

export default RepaymentCard;
