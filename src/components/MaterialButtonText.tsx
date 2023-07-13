import {Pressable, Text, View} from 'react-native';
import React from 'react';

type Props = {
  disabled?: boolean;
  text: string;
  onPress: Function;
};

const MaterialButtonText = ({text, onPress, disabled}: Props) => {
  return (
    <Pressable
      disabled={disabled}
      onPress={e => onPress()}
      android_ripple={{
        color: '#d3d3d3',
      }}
    >
      <View className="h-10 w-full items-center justify-center rounded-md bg-transparent">
        <Text
          className={`text-base font-medium uppercase ${
            disabled ? 'text-gray-400' : 'text-blue-500'
          }`}
        >
          {text}
        </Text>
      </View>
    </Pressable>
  );
};

export default MaterialButtonText;
