import {View, Text, Pressable} from 'react-native';
import React from 'react';
import Ionicon from 'react-native-vector-icons/Ionicons';

type Props = {
  title: string;
  onBackPress: Function;
};

const TopBar = ({title, onBackPress}: Props) => {
  return (
    <View className="flex-row items-center border-b border-gray-200 drop-shadow">
      <Pressable className="m-2" onPress={e => onBackPress()}>
        <Ionicon name="arrow-back-outline" color={'gray'} size={25} />
      </Pressable>
      <Text className="text-lg text-gray-600">{title}</Text>
    </View>
  );
};

export default TopBar;
