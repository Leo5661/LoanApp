import {View, Text} from 'react-native';
import React from 'react';

type Props = {
  text: string;
};

const PointsCard = ({text}: Props) => {
  return (
    <View className="w-full flex-row items-start">
      <View className="item-start h-2 w-2 justify-start rounded-full text-xl font-semibold text-gray-500" />
      <Text className="item-start ml-4 justify-start text-base text-gray-500">
        {text}
      </Text>
    </View>
  );
};

export default PointsCard;
