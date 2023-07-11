import {View, Text} from 'react-native';
import React from 'react';

type Props = {};

const HomeScreen = (props: Props) => {
  return (
    <View className="h-full w-full items-center justify-center">
      <Text className="text-base text-black">HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;
