import {ScrollView, Text, TextInput, View} from 'react-native';
import React from 'react';
import TopBar from '../components/TopBar';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeStackParamList} from '../navigation/HomeNavigator';
import ApplicationFormCategory from '../components/ApplicationFormCategory';
import {useAppDispatch, useAppSelector} from '../hooks/useReduxHooks';
import {
  setUserAddress,
  setUserAge,
  setUserCompName,
  setUserJobType,
  setUserMonthlyPay,
  setUserName,
  setUserPhone,
  setUserPosition,
} from '../redux/slices/userSlice';
import MaterialButtonSolid from '../components/MaterialButtonSolid';
import {setLoanAmount, setLoanPeriod} from '../redux/slices/loanSlice';
import {isEligible} from '../utils/CheckLoanEligibility';
import {Image} from 'react-native';
import {PointsList} from '../utils/LoanInEligiblePointsList';
import PointsCard from '../components/PointsCard';

type Props = NativeStackScreenProps<HomeStackParamList, 'CheckEligibility'>;
const title = 'Check Eligibility';

const CheckEligibilityScreen = ({navigation, route}: Props) => {
  const name = useAppSelector(state => state.persistedReducer.user.name);
  const age = useAppSelector(state => state.persistedReducer.user.age);
  const phone = useAppSelector(state => state.persistedReducer.user.phone);
  const address = useAppSelector(state => state.persistedReducer.user.address);
  const monthlyPay = useAppSelector(
    state => state.persistedReducer.user.monthlyPay,
  );
  const loanAmount = useAppSelector(
    state => state.persistedReducer.loan.principleAmount,
  );
  const repaymentPeriod = useAppSelector(
    state => state.persistedReducer.loan.loanPeriod,
  );
  const dispatch = useAppDispatch();

  if (false) {
    return (
      <View className="flex-grow flex-col bg-white">
        <TopBar title={title} onBackPress={() => navigation.goBack()} />

        <View className="mt-1 w-full items-center justify-center">
          <Image
            className="h-60 w-60"
            source={require('../assets/sorry.png')}
          />
        </View>

        <View className="mt-2 px-4">
          <Text className="text-lg font-semibold text-gray-600">
            Request Rejected
          </Text>
          <Text className="border-b border-gray-200 pb-4 text-sm font-light text-gray-600">
            The loan request is rejected due to following reason.
          </Text>

          <View className="mt-8">
            {PointsList.map((item, index) => {
              return <PointsCard text={item} key={index} />;
            })}
          </View>
        </View>

        <View className="my-8 px-4">
          <MaterialButtonSolid
            text="I Understand"
            onPress={() => {
              navigation.navigate('Home');
            }}
          />
        </View>
      </View>
    );
  }

  return (
    <View className="flex-grow flex-col">
      <TopBar title={title} onBackPress={() => navigation.goBack()} />
      <ScrollView className="px-4">
        <Text className="mt-4 border-b border-gray-200 px-4 pb-2 text-lg font-medium text-gray-500">
          Requested Loan
        </Text>
      </ScrollView>

      <View className="my-4">
        <MaterialButtonSolid text="Check Eligibility" onPress={() => {}} />
      </View>
    </View>
  );
};

export default CheckEligibilityScreen;
