import {View, Text, Pressable, Image, ToastAndroid} from 'react-native';
import React, {useState} from 'react';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import ImageCropPicker from 'react-native-image-crop-picker';
import {Doc, setDocToList} from '../redux/slices/documentSlice';
import {useAppDispatch} from '../hooks/useReduxHooks';

type Props = {
  name: string;
  types: string;
  icon: string;
};

const DocUploadCard = ({name, types, icon}: Props) => {
  const dispatch = useAppDispatch();

  const [ImgData, setImgData] = useState<any>();

  const setToReduxStore = () => {
    const base64Img = ImgData.data;
    try {
      dispatch(
        setDocToList({
          name: name,
          docBase64: base64Img,
        }),
      );
    } catch {
      ToastAndroid.show(
        'Something went wrong Please try again.',
        ToastAndroid.SHORT,
      );
    }
  };

  const openCam = () => {
    ImageCropPicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
      includeBase64: true,
      compressImageQuality: 0.7,
    }).then(data => {
      console.log(data);
      setImgData(data);
      setToReduxStore();
    });
  };

  const handleCamera = () => {
    openCam();
  };

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
          {ImgData ? (
            <Image
              className="h-10 w-10"
              source={{uri: `data:${ImgData.mime};base64,${ImgData.data}`}}
            />
          ) : (
            <FontAwesome5Icon name={icon} color={'gray'} size={25} />
          )}
        </View>
      </View>
    </Pressable>
  );
};

export default DocUploadCard;
