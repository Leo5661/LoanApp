import {View, Text, TextInput, Button, Pressable, Image} from 'react-native';
import React, {useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackParamList} from '../navigation/AuthNavigator';
import MaterialButtonSolid from '../components/MaterialButtonSolid';
import MaterialButtonText from '../components/MaterialButtonText';
import {useAuth} from '../hooks/useAuth';
import {ToastAndroid} from 'react-native';

type Props = NativeStackScreenProps<AuthStackParamList, 'SignUp'>;

const SignUpScreen = ({navigation}: Props) => {
  const {user, isLoading, signUpUsingEmailAndPassword} = useAuth();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const isValid =
    email.length != 0 && password.length != 0 && confirmPassword.length != 0;

  const isPasswordValid = password === confirmPassword;

  const handleSignUp = async () => {
    if (isValid) {
      if (isPasswordValid) {
        await signUpUsingEmailAndPassword(email, password);
        if (user) {
          navigation.replace('Main', {screen: 'Home'});
        } else {
          ToastAndroid.show(
            'Something went wrong Please try again!',
            ToastAndroid.SHORT,
          );
        }
      } else {
        ToastAndroid.show('Please check password', ToastAndroid.SHORT);
      }
    } else {
      ToastAndroid.show('Please fill all fields', ToastAndroid.SHORT);
    }
  };

  return (
    <View className="h-full w-full flex-col items-center p-4">
      <View className="mt-6 w-full items-center justify-center">
        <Image className="h-80 w-60" source={require('../assets/signin.png')} />
      </View>

      <View className="w-full flex-col justify-start">
        <Text className="text-3xl font-bold text-gray-900">Welcome</Text>
        <Text className="text-xl text-gray-600 ">SignUp to continue</Text>
      </View>

      <View className="my-4 w-full flex-grow flex-col justify-between">
        <View className="mt-4 w-full flex-col items-start justify-between">
          <Text className="w-full text-base text-gray-600">Email</Text>
          <TextInput
            className="my-1 h-10 w-full rounded-md border border-gray-600 px-2 py-1 text-xl text-gray-800 focus:border-blue-600"
            inputMode="email"
            value={email}
            placeholderTextColor={'#a0a0a097'}
            onChangeText={text => setEmail(text)}
            placeholder="example@mail.com"
            keyboardType="email-address"
          />

          <Text className="mt-3 w-full text-base text-gray-600">Password</Text>
          <TextInput
            className="my-1 h-10 w-full rounded-md border border-gray-600 px-2 py-1 text-xl text-gray-800 focus:border-blue-600"
            inputMode="text"
            value={password}
            placeholderTextColor={'#a0a0a097'}
            secureTextEntry={true}
            onChangeText={text => {
              setPassword(text);
            }}
            placeholder="password"
          />

          <Text className="mt-3 w-full text-base text-gray-600">
            Confirm Password
          </Text>
          <TextInput
            className="my-1 h-10 w-full rounded-md border border-gray-600 px-2 py-1 text-xl text-gray-800 focus:border-blue-600"
            inputMode="text"
            value={confirmPassword}
            placeholderTextColor={'#a0a0a097'}
            secureTextEntry={true}
            onChangeText={text => {
              setConfirmPassword(text);
            }}
            placeholder="password"
          />
        </View>

        <View className="mb-6 w-full flex-col justify-center">
          <MaterialButtonSolid
            disabled={!isValid || isLoading}
            text="Sign Up"
            onPress={handleSignUp}
          />
          <MaterialButtonText
            text="Sign In"
            onPress={() => {
              navigation.navigate('SignIn');
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default SignUpScreen;
