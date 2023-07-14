import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../hooks/useReduxHooks';
import RTNBioAuth from 'rtn-bio_auth/js/NativeBioAuth';

type Props = {};

const HomeScreen = (props: Props) => {
  const isBioAuth = useAppSelector(
    state => state.persistedReducer.bioAuth.isBioAuth,
  );
  const dispatch = useAppDispatch();
  const isHwPresent = RTNBioAuth?.getAvailableBiometric();
  const [biometric, setBiometric] = useState<string | undefined>('');

  useEffect(() => {
    const data = async () => {
      try {
        const HW = await RTNBioAuth?.getAvailableBiometric();
        console.log(HW);
        setBiometric(HW);
      } catch (e) {
        console.log(e);
      }
    };

    data();
  }, []);

  return (
    <View className="h-full w-full items-center justify-center">
      <Text className="text-base text-black">HomeScreen</Text>
      <Text className="text-base text-black">{biometric}</Text>
    </View>
  );
};

export default HomeScreen;
