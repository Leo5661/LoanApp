import React from 'react';
import {Pressable, Text, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

//  "th-large", 5> "boxes", "cubes", "hand-holding-usd" "credit-card",
export type QuickMenuProps = {
  icon: string;
  name: string;
  onPress: Function;
};

const QuickFeatureCard = ({name, icon, onPress}: QuickMenuProps) => {
  return (
    <Pressable
      className={`w-30 flex-col flex-wrap items-center justify-center`}
      onPress={e => {
        onPress();
      }}
      android_ripple={{
        color: '#d1d1d192',
      }}
    >
      <View className="flex-grow items-center justify-center rounded-md bg-gray-200 p-5">
        <FontAwesome name={icon} color={'rgb(79 70 229)'} size={25} />
      </View>
      <Text className="mt-1 text-base font-light uppercase text-gray-400">
        {name}
      </Text>
    </Pressable>
  );
};

export default QuickFeatureCard;
