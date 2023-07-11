import {View, Text, TextInput, Button} from 'react-native';
import React, {useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackParamList} from '../navigation/AuthNavigator';

type Props = NativeStackScreenProps<AuthStackParamList, 'SignIn'>;

const SignInScreen = ({navigation}: Props) => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const handleEmailChange = () => {};

  const handlePasswordChange = () => {};

  return (
    <View className="h-full w-full flex-col items-center justify-between p-4">
      <View className="w-full flex-col justify-start">
        <Text className="text-3xl text-gray-900 ">Welcome!</Text>
        <Text className="text-xl text-gray-600 ">SignIn to continue</Text>
      </View>

      <View className="w-full  flex-col items-start justify-between">
        <Text className="w-full text-xl text-gray-600">Email</Text>
        <TextInput
          className="my-1 h-10 w-full rounded-md border border-gray-600 px-2 py-1 text-xl text-gray-800 placeholder:text-slate-400 focus:border-gray-800"
          inputMode="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="example@mail.com"
          keyboardType="email-address"
        />

        <Text className="mt-3 w-full text-xl text-gray-600">Password</Text>
        <TextInput
          className="my-1 h-10 w-full rounded-md border border-gray-600 px-2 py-1 text-xl text-gray-800 placeholder:text-slate-400 focus:border-gray-800"
          inputMode="text"
          value={password}
          secureTextEntry={true}
          onChange={handlePasswordChange}
          placeholder="Password"
        />
      </View>

      <View className="mb-6 w-full flex-col justify-center">
        <Button title="SignIn" onPress={() => {}} />
        <Text className="mt-2 w-full border border-gray-50 p-2 text-gray-600">
          SignUp
        </Text>
      </View>
    </View>
  );
};

export default SignInScreen;