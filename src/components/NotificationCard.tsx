import {View, Text, Image} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

type Props = {
  time: number;
  title: string;
  message: string;
  img?: string;
};

const NotificationCard = ({time, title, message, img}: Props) => {
  const dateTime = new Date(time).toDateString();

  return (
    <View className="flex-row items-center justify-start border-b border-gray-200 px-2 py-4 drop-shadow-md">
      <View className="h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-gray-200 py-2 drop-shadow">
        {!img ? (
          <Ionicons name="megaphone-outline" size={24} color={'gray'} />
        ) : (
          <Image source={{uri: `${img}`}} className="h-6 w-6" />
        )}
      </View>

      <View className="ml-4 flex-grow flex-col">
        <View className="flex-row items-center justify-between">
          <Text className="text-xl font-medium text-gray-700">{title}</Text>
          <Text className="text-lg font-light text-gray-500">{dateTime}</Text>
        </View>
        <Text className="text-xl font-normal text-gray-600">{message}</Text>
      </View>
    </View>
  );
};

export default NotificationCard;
