import {View, Text, ToastAndroid} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeStackParamList} from '../navigation/HomeNavigator';
import TopBar from '../components/TopBar';
import MaterialButtonSolid from '../components/MaterialButtonSolid';

type Props = NativeStackScreenProps<HomeStackParamList, 'AddBank'>;
const title = 'Add Bank Accounts';

const AddBankAccountScreen = ({navigation}: Props) => {
  return (
    <View>
      <TopBar title={title} onBackPress={() => navigation.popToTop()} />

      <Text className="w-full p-4 text-center text-xl font-semibold text-gray-700">
        Add Your Bank
      </Text>
      <View className="mt-4 w-full px-4">
        <MaterialButtonSolid
          text={'Add Bank'}
          onPress={() => {
            ToastAndroid.show('Bank Portel will open', ToastAndroid.SHORT);
          }}
        />
      </View>
    </View>
  );
};

export default AddBankAccountScreen;
