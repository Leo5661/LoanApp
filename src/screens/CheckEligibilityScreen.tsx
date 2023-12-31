import {ScrollView, Text, View} from 'react-native';
import React from 'react';
import TopBar from '../components/TopBar';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeStackParamList} from '../navigation/HomeNavigator';
import {useAppDispatch, useAppSelector} from '../hooks/useReduxHooks';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import firestore from '@react-native-firebase/firestore';
import MaterialButtonSolid from '../components/MaterialButtonSolid';
import {Image} from 'react-native';
import {PointsList} from '../utils/LoanInEligiblePointsList';
import PointsCard from '../components/PointsCard';
import EmiCard from '../components/EmiCard';
import {isEligible} from '../utils/CheckLoanEligibility';
import {
  Loan,
  LoanStatus,
  setBorrowDate,
  setLoanStatus,
} from '../redux/slices/loanSlice';

type Props = NativeStackScreenProps<HomeStackParamList, 'CheckEligibility'>;
const title = 'Check Eligibility';
const RATE_OF_INTREST = 15;

const CheckEligibilityScreen = ({navigation, route}: Props) => {
  const age = useAppSelector(state => state.persistedReducer.user.age);
  const monthlyPay = useAppSelector(
    state => state.persistedReducer.user.monthlyPay,
  );
  const loanAmount = useAppSelector(
    state => state.persistedReducer.loan.principleAmount,
  );
  const repaymentPeriod = useAppSelector(
    state => state.persistedReducer.loan.loanPeriod,
  );
  const uid = useAppSelector(state => state.persistedReducer.user.uId);
  const loan = useAppSelector(state => state.persistedReducer.loan);
  const dispatch = useAppDispatch();

  const isEmployed = monthlyPay > 0;

  const sendData = (loan: Loan) => {
    firestore().collection('Users').doc(uid).update({
      'userData.loans': loan,
    });
  };

  const handleProceed = () => {
    dispatch(setLoanStatus(LoanStatus.APPLICATION_SUBMITED));
    dispatch(setBorrowDate());
    sendData(loan);
    navigation.navigate('DocumentVerification');
  };

  if (!isEligible(age, isEmployed, monthlyPay, loanAmount, repaymentPeriod)) {
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
    <View className="flex-grow flex-col bg-white">
      <TopBar title={title} onBackPress={() => navigation.goBack()} />
      <ScrollView className="px-4">
        <Text className="mt-4 border-b border-gray-200 px-4 pb-2 text-3xl font-semibold text-gray-600">
          Requested Loan
        </Text>

        <Text className="mt-4 px-4 text-base text-gray-500"> Loan Amount </Text>
        <View className="flex-row items-end justify-start px-4">
          <FontAwesome name="rupee" color={'gray'} size={30} />
          <View className="ml-2 flex-row">
            <Text className="items-bottom text-3xl text-black">
              {loanAmount}
            </Text>
          </View>
        </View>

        <EmiCard
          principleAmount={loanAmount}
          time={repaymentPeriod}
          rateOfIntrest={RATE_OF_INTREST}
        />
      </ScrollView>

      <View className="my-4 p-4">
        <MaterialButtonSolid text="Proceed" onPress={handleProceed} />
      </View>
    </View>
  );
};

export default CheckEligibilityScreen;
