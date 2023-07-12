import {View, Text, TextInput, Button, Pressable, Image} from 'react-native';
import React, {useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackParamList} from '../navigation/AuthNavigator';
import {useAuth} from '../hooks/useAuth';

type Props = NativeStackScreenProps<AuthStackParamList, 'SignIn'>;

const SignInScreen = ({navigation}: Props) => {
  const {user, isLoading, signInUsingEmailAndPassword} = useAuth();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const isValid = email.length != 0 && password.length != 0;

  const handleSignIn = () => {
    if (email.length != 0 && password.length != 0) {
      signInUsingEmailAndPassword(email, password);
    } else {
      console.log('Dont Give empty string');
    }
  };

  const handlePasswordChange = () => {};

  return (
    <View className="h-full w-full flex-col items-center justify-between p-4">
      <View className="w-full items-center justify-center">
        <Image className="h-52 w-52" source={require('../assets/signin.png')} />
      </View>

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
          onChangeText={text => setEmail(text)}
          placeholder="example@mail.com"
          keyboardType="email-address"
        />

        <Text className="mt-3 w-full text-xl text-gray-600">Password</Text>
        <TextInput
          className="my-1 h-10 w-full rounded-md border border-gray-600 px-2 py-1 text-xl text-gray-800 placeholder:text-slate-400 focus:border-gray-800"
          inputMode="text"
          value={password}
          secureTextEntry={true}
          onChangeText={text => {
            setPassword(text);
          }}
          placeholder="Password"
        />
      </View>

      <View className="mb-6 w-full flex-col justify-center">
        <Button disabled={false} title="SignIn" onPress={handleSignIn} />
        <Pressable
          android_ripple={{
            color: '#d3d3d3',
          }}
          onPress={() => {
            navigation.navigate('SignUp');
          }}
        >
          <Text className="mt-2 w-full border border-gray-50 p-2 text-gray-600">
            SignUp
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SignInScreen;
