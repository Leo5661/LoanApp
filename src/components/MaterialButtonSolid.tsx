import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {shadow} from 'react-native-paper';

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
        style={{
          elevation: 5,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.27,
          shadowRadius: 5.65,
        }}
        className={`h-10 w-full items-center justify-center rounded-md ${
          disabled ? 'bg-gray-400' : 'bg-indigo-500'
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
