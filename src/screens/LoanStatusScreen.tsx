import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeStackParamList} from '../navigation/HomeNavigator';
import TopBar from '../components/TopBar';
import {useAppSelector} from '../hooks/useReduxHooks';
import MaterialButtonSolid from '../components/MaterialButtonSolid';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import StatusCard from '../components/StatusCard';
import {LoanStatus} from '../redux/slices/loanSlice';
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
        <Text>No Application yet</Text>
        <MaterialButtonSolid
          text={'Apply Loan'}
          onPress={() => navigation.replace('ApplyLoan')}
        />
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
