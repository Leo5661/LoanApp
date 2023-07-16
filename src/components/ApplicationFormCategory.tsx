import {View, Text} from 'react-native';
import React from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

type Props = {
  title: string;
  icon: string;
};

const ApplicationFormCategory = ({title, icon}: Props) => {
  return (
    <View className="mt-4 flex-row items-center border-b border-gray-200">
      <View className="m-1">
        <MaterialIcon name={icon} color={'gray'} size={15} />
      </View>
      <Text className="text-base font-light text-gray-400">{title}</Text>
      <Text className="ml-1 text-base font-light text-indigo-300">*</Text>
    </View>
  );
};

export default ApplicationFormCategory;
