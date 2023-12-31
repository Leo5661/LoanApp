import {View, Text} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeStackParamList} from '../navigation/HomeNavigator';
import TopBar from '../components/TopBar';
import {useAppSelector} from '../hooks/useReduxHooks';
import MaterialButtonSolid from '../components/MaterialButtonSolid';
import StatusCard from '../components/StatusCard';
import {StatusList} from '../utils/StatusList';

type Props = NativeStackScreenProps<HomeStackParamList, 'Status'>;
const title = 'Status';

const LoanStatusScreen = ({navigation}: Props) => {
  const status = useAppSelector(
    state => state.persistedReducer.loan.loanStatus,
  );
  console.log(status);
  if (status == 0) {
    return (
      <View>
        <TopBar title={title} onBackPress={() => navigation.popToTop()} />
        <Text className="my-4 text-center text-lg font-medium text-gray-500">
          No Application yet
        </Text>

        <View className="px-4">
          <MaterialButtonSolid
            text="Apply for Loan"
            onPress={() => navigation.replace('ApplyLoan')}
          />
        </View>
      </View>
    );
  }

  return (
    <View>
      <TopBar title={title} onBackPress={() => navigation.popToTop()} />
      <Text className="mt-4 pl-4 text-3xl font-semibold text-gray-600">
        Application status
      </Text>
      <Text className="mt-1 pl-4 text-lg font-light text-gray-500">
        Realtime Application status.
      </Text>

      <View className="flex-col items-start justify-evenly">
        {StatusList.map((item, index) => {
          return (
            <StatusCard
              key={index}
              name={item.name}
              statusCode={item.statusCode}
            />
          );
        })}
      </View>
    </View>
  );
};

export default LoanStatusScreen;
