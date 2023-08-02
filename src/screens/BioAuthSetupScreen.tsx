import {View, Text} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackParamList} from '../navigation/AuthNavigator';

type Props = NativeStackScreenProps<AuthStackParamList, 'BioAuth'>;

const BioAuthSetupScreen = ({navigation}: Props) => {
  return (
    <View>
      <Text>SetupBioAuthScreen</Text>
    </View>
  );
};

export default BioAuthSetupScreen;
