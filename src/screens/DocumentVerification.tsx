import {View, Text, Image} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeStackParamList} from '../navigation/HomeNavigator';
import TopBar from '../components/TopBar';
import DocUploadCaard from '../components/DocUploadCaard';
import {DocList} from '../utils/TypesofDocuments';

type Props = NativeStackScreenProps<HomeStackParamList, 'DocumentVerification'>;
const title = 'Document Verification';

const DocumentVerification = ({navigation}: Props) => {
  return (
    <View>
      <TopBar title={title} onBackPress={() => navigation.goBack()} />
      <View className="mt-4 px-4">
        <Text className="text-3xl font-semibold text-gray-600">
          We Need Some Documents
        </Text>
        <Text className="text-lg font-light text-gray-500">
          To complete loan verification process please provide all following
          documents.
        </Text>
      </View>

      <View className="flex-grow">
        {DocList.map((item, index) => {
          return (
            <DocUploadCaard
              key={index}
              name={item.name}
              types={item.types}
              icon={item.icon}
            />
          );
        })}
      </View>
    </View>
  );
};

export default DocumentVerification;
