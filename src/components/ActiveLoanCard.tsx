import {View, Text, Pressable} from 'react-native';
import React, {useState} from 'react';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useAppSelector} from '../hooks/useReduxHooks';

type Props = {
  onPressCheckEligibility: Function;
};

const ActiveLoanCard = (props: Props) => {
  const loan = useAppSelector(state => state.persistedReducer.loan);
  const tempDate = new Date();

  if (loan === undefined) {
    return (
      <View className="mt-4 h-40 w-11/12 flex-col justify-between rounded-md bg-indigo-600 p-4 shadow-md">
        <View className="w-full flex-row items-end justify-between px-2">
          <Text className="text-base text-white"> Get Loan upto </Text>
        </View>

        <View className="mt-4 flex-row items-end px-4">
          <FontAwesome name="rupee" color={'white'} size={30} />
          <Text className="ml-2 text-3xl text-gray-300">
            {`1,00,000 `}
            <Text className="ml-2 text-xl text-gray-300"> from 15% p.a</Text>
          </Text>
        </View>

        <Pressable
          className="mt-4 h-10 items-center justify-center rounded-md border border-gray-400"
          onPress={e => {
            props.onPressCheckEligibility();
          }}
        >
          <Text className="text-base font-semibold text-white">
            Check Eligibility
          </Text>
        </Pressable>
      </View>
    );
  }

  const [isAmountShow, setIsAmountShow] = useState<boolean>(false);

  const intrestAmount = loan.borrowAmount.toLocaleString('en-US', {
    currency: 'INR',
  });
  const repayedAmount = loan.instalmentAmount.toLocaleString('en-US', {
    currency: 'INR',
  });

  return (
    <View className="mt-4 h-40 w-11/12 flex-col rounded-md bg-indigo-600 p-4 shadow-md">
      <View className="w-full flex-row items-end justify-between px-2">
        <Text className="text-base text-white"> Active Loan </Text>
        <Pressable onPress={e => setIsAmountShow(!isAmountShow)}>
          <FontAwesome5Icon
            name={isAmountShow ? 'eye' : 'eye-slash'}
            color={'white'}
            size={18}
          />
        </Pressable>
      </View>

      <View className="mt-4 flex-row items-end px-4">
        <FontAwesome name="rupee" color={'white'} size={30} />
        <View className="ml-4 flex-row">
          {isAmountShow ? (
            <Text className="items-bottom text-4xl text-white">
              {`${repayedAmount}/`}
              <Text className="text-3xl text-gray-300">{intrestAmount}</Text>
            </Text>
          ) : (
            <Text className="text-4xl text-gray-300">*,***</Text>
          )}
        </View>
      </View>

      <View className="mt-3 flex-row justify-between">
        <View className="ml-2 flex-col">
          <Text className="w-fit text-sm text-gray-400">Next Repayment</Text>
          {isAmountShow ? (
            <Text className="text-base text-gray-300">
              {`02 - ${tempDate.getMonth() + 1} - ${tempDate.getFullYear()}`}
            </Text>
          ) : (
            <Text className="text-base text-gray-300"> DD - MM - YYYY </Text>
          )}
        </View>

        <View className="mr-2 flex-col">
          <Text className="w-fit text-gray-400 first-letter:text-sm">
            Intrest Rate
          </Text>
          {isAmountShow ? (
            <Text className="w-fit text-base text-gray-300">
              {`${loan.intrestRate}% `}
              <Text className="w-fit text-sm text-gray-400">p.a.</Text>
            </Text>
          ) : (
            <Text className="w-fit text-base text-gray-300">
              {`-- `}
              <Text className="w-fit text-sm text-gray-400">p.a.</Text>
            </Text>
          )}
        </View>
      </View>
    </View>
  );
};

export default ActiveLoanCard;
