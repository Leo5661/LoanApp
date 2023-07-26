import {View, Text, Pressable} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {LoanStatus} from '../redux/slices/loanSlice';
import {useAppSelector} from '../hooks/useReduxHooks';

type Props = {
  statusCode: LoanStatus;
  name: string;
};

const StatusCard = ({statusCode, name}: Props) => {
  const status = useAppSelector(
    state => state.persistedReducer.loan.loanStatus,
  );

  return (
    <View className="flex-col items-start justify-evenly">
      <Pressable className="mx-2 mt-4 flex-row px-4 " onPress={() => {}}>
        <View className="flex-grow flex-row items-center justify-between">
          <Text
            className={`text-xl ${
              statusCode <= status
                ? 'font-medium text-gray-500'
                : 'font-thin text-gray-400'
            }`}
          >
            {name}
          </Text>
          {statusCode <= status ? (
            <View className="items-center justify-center">
              <Ionicons
                name={
                  status == LoanStatus.PENDING
                    ? 'time-outline'
                    : statusCode <= status
                    ? 'checkmark-circle-outline'
                    : 'close-circle-outline'
                }
                color={statusCode <= status ? 'green' : 'red'}
                size={15}
              />
            </View>
          ) : (
            <></>
          )}
        </View>
      </Pressable>
    </View>
  );
};

export default StatusCard;
