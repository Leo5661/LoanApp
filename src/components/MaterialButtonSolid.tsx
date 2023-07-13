import React from 'react';
import {Pressable, Text, View} from 'react-native';

type Props = {
  disabled?: boolean;
  text: string;
  onPress: Function;
};

const MaterialButtonSolid = ({text, onPress, disabled}: Props) => {
  return (
    <Pressable
      disabled={disabled}
      onPress={e => onPress()}
      android_ripple={{
        color: '#2d52a392',
      }}
    >
      <View
        className={`h-10 w-full items-center justify-center rounded-md ${
          disabled ? 'bg-gray-400' : 'bg-blue-500'
        }`}
      >
        <Text className="text-base font-medium uppercase text-white">
          {text}
        </Text>
      </View>
    </Pressable>
  );
};

export default MaterialButtonSolid;
