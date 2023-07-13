import {View, Text, TextInput, Image, Alert, ToastAndroid} from 'react-native';
import React, {useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackParamList} from '../navigation/AuthNavigator';
import {useAuth} from '../hooks/useAuth';
import MaterialButtonSolid from '../components/MaterialButtonSolid';
import MaterialButtonText from '../components/MaterialButtonText';

type Props = NativeStackScreenProps<AuthStackParamList, 'SignIn'>;

const SignInScreen = ({navigation}: Props) => {
  const {user, isLoading, signInUsingEmailAndPassword} = useAuth();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const isValid = email.length != 0 && password.length != 0;

  const handleSignIn = async () => {
    if (isValid) {
      await signInUsingEmailAndPassword(email, password);
      if (user) {
        navigation.replace('Main', {screen: 'Home'});
      } else {
        ToastAndroid.show(
          'Please enter correct email & password',
          ToastAndroid.SHORT,
        );
      }
    } else {
      ToastAndroid.show('Please enter email & password', ToastAndroid.SHORT);
    }
  };

  return (
    <View className="h-full w-full flex-col items-center p-4">
      <View className="mt-6 w-full items-center justify-center">
        <Image className="h-80 w-60" source={require('../assets/signin.png')} />
      </View>

      <View className="w-full flex-col justify-start">
        <Text className="text-3xl font-bold text-gray-900">Welcome</Text>
        <Text className="text-xl text-gray-600 ">SignIn to continue</Text>
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
            placeholder="Password"
          />
        </View>

        <View className="mb-6 w-full flex-col justify-center">
          <MaterialButtonSolid
            disabled={!isValid || isLoading}
            text="Sign In"
            onPress={handleSignIn}
          />
          <MaterialButtonText
            text="Sign Up"
            onPress={() => {
              navigation.navigate('SignUp');
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default SignInScreen;
