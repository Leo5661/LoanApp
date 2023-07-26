import {View, Text, Image, Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../hooks/useReduxHooks';
import RTNBioAuth from 'rtn-bio_auth/js/NativeBioAuth';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useAuth} from '../hooks/useAuth';
import {QuickMenuList, QuickMenuListType} from '../utils/QuickMenuList';
import QuickFeatureCard from '../components/QuickFeaturesCard';
import ActiveLoanCard from '../components/ActiveLoanCard';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeStackParamList} from '../navigation/HomeNavigator';

type Props = NativeStackScreenProps<HomeStackParamList, 'Home'>;

const HomeScreen = ({navigation}: Props) => {
  const name = useAppSelector(state => state.persistedReducer.user.fname);
  const user = useAppSelector(state => state.persistedReducer.user);
  const loan = useAppSelector(state => state.persistedReducer.loan);

  const isBioAuth = useAppSelector(
    state => state.persistedReducer.bioAuth.isBioAuth,
  );
  const dispatch = useAppDispatch();
  const isHwPresent = RTNBioAuth?.getAvailableBiometric();
  const [biometric, setBiometric] = useState<string | undefined>('');
  const [isNotification, setIsNotification] = useState<boolean>(false);

  useEffect(() => {
    const data = async () => {
      try {
        const HW = await RTNBioAuth?.getAvailableBiometric();
        console.log(HW);
        console.log(user);
        console.log(loan);
        setBiometric(HW);
      } catch (e) {
        console.log(e);
      }
    };

    data();
  }, []);

  return (
    <View className="h-full w-full flex-col">
      <View className="w-full flex-row justify-between border-b border-gray-200 drop-shadow">
        <Pressable
          className="m-3"
          onPress={() => {
            console.log('Clicked home menu');
          }}
        >
          <MaterialIcons name="sort" color={'#444444a9'} size={25} />
        </Pressable>

        <Pressable
          className="relative m-3"
          onPress={() => {
            console.log('Clicked home notification');
          }}
        >
          {isNotification ? (
            <View className="absolute right-1 top-0 z-10 h-2 w-2 items-center justify-center rounded-full bg-red-700" />
          ) : (
            <></>
          )}

          <Ionicons
            name="notifications-outline"
            color={'#444444a9'}
            size={22}
          />
        </Pressable>
      </View>

      <View className="w-full flex-grow flex-col items-center">
        <View className="w-full items-start px-4 py-2">
          <Text className="text-xl font-medium text-gray-800">
            Hi, {name} &#128075;
          </Text>
        </View>

        <ActiveLoanCard
          isActiveLoan={true}
          principleAmount={10000}
          intrestAmount={11500}
          loanDate={new Date()}
          intrest={15}
          nextRepayment={new Date()}
          repayedAmount={1500}
          onPressCheckEligibility={() => {
            navigation.navigate('ApplyLoan');
          }}
        />

        <View className="mt-8 w-full items-start px-4">
          <Text className="text-xl font-medium text-gray-600">
            Quick Features
          </Text>
        </View>

        <View className="mt-8 w-full flex-row items-start justify-around px-4">
          {QuickMenuList.map((item: QuickMenuListType, index: any) => {
            return (
              <QuickFeatureCard
                key={index}
                name={item.name}
                icon={item.icon}
                onPress={() => {
                  navigation.navigate(item.navRoute);
                }}
              />
            );
          })}
        </View>

        <View className="mt-8 w-full items-start px-4">
          <Text className="text-xl font-medium text-gray-600">
            Money Management Read
          </Text>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
