import {View, Text, Pressable} from 'react-native';
import React from 'react';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import ImageCropPicker from 'react-native-image-crop-picker';

type Props = {
  name: string;
  types: string;
  icon: string;
  onPress?: Function;
};

const handleCamera = () => {
  ImageCropPicker.openCamera({
    width: 300,
    height: 400,
    cropping: true,
    includeBase64: true,
  }).then(data => {
    console.log(data);
  });
};

const DocUploadCaard = ({name, types, icon, onPress}: Props) => {
  return (
    <Pressable
      className="shadow-inne m-4 justify-between rounded-md border border-gray-200 bg-white p-2"
      style={{
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 5.65,
      }}
      onPress={handleCamera}
    >
      <View className="w-full flex-row">
        <View className="flex-grow flex-col">
          <Text className="text-lg font-medium text-gray-600">{name}</Text>
          <Text className="text-sm font-light text-gray-500">{types}</Text>
        </View>
        <View className="w-12 flex-grow-0 items-center justify-center rounded-md bg-gray-100 p-2">
          <FontAwesome5Icon name={icon} color={'gray'} size={25} />
        </View>
      </View>
    </Pressable>
  );
};

export default DocUploadCaard;
