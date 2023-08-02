import {View, Text, TextInput, Image, Modal, ToastAndroid} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackParamList} from '../navigation/AuthNavigator';
import {useAuth} from '../hooks/useAuth';
import MaterialButtonSolid from '../components/MaterialButtonSolid';
import MaterialButtonText from '../components/MaterialButtonText';
import {useAppDispatch, useAppSelector} from '../hooks/useReduxHooks';
import RTNBioAuth from 'rtn-bio_auth/js/NativeBioAuth';
import {updateBioAuth} from '../redux/slices/bioAuthSlice';
import Ionicons from 'react-native-vector-icons/Ionicons';

type Props = NativeStackScreenProps<AuthStackParamList, 'SignIn'>;

const SignInScreen = ({navigation}: Props) => {
  const {user, isLoading, signInUsingEmailAndPassword} = useAuth();
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const isBioAuthActive = useAppSelector(
    state => state.persistedReducer.bioAuth.isBioAuth,
  );
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const isValid = email.length != 0 && password.length != 0;

  const signIn = async () => {
    const res = await signInUsingEmailAndPassword(email, password);
    if (res) {
      navigation.replace('Main', {
        screen: 'HomeStack',
        params: {screen: 'Home'},
      });
    } else {
      ToastAndroid.show(
        'Please enter correct email & password',
        ToastAndroid.SHORT,
      );
    }
  };

  const getBioMetricLock = async () => {
    try {
      const HW = await RTNBioAuth?.getAvailableBiometric();
      console.log(HW);
      setModalVisible(true);
    } catch (e) {
      console.log(`Error in finding Biometric Hardware: ${e}`);
      signIn();
    }
  };

  const handleSignIn = async () => {
    if (isValid) {
      getBioMetricLock();
    } else {
      ToastAndroid.show('Please enter email & password', ToastAndroid.SHORT);
    }
  };

  const handleBioAuthSetup = async () => {
    try {
      const isAuthenticated = await RTNBioAuth?.authenticate();
      if (isAuthenticated) {
        dispatch(updateBioAuth(true));
        setModalVisible(!modalVisible);
        signIn();
      }
    } catch (e) {
      console.log(e);
      setModalVisible(!modalVisible);
      ToastAndroid.show('Authentication Failed', ToastAndroid.SHORT);
    }
  };

  const handleWithoutBioLock = () => {
    dispatch(updateBioAuth(false));
    setModalVisible(!modalVisible);
    signIn();
  };

  const BioSetupView = (
    <View className="items-center rounded-t-lg bg-white">
      <Text className="mt-4 w-full text-center text-2xl font-bold text-black">
        Biometric Setup
      </Text>
      <Text className="mt-2 w-full text-center text-lg font-normal text-gray-500">
        Make your data more secure using{'\n'}your mobile biometric.
      </Text>

      <View className="my-6">
        <Ionicons name="finger-print-outline" color={'gray'} size={60} />
      </View>

      <View className=" mt-4 w-full px-4">
        <MaterialButtonSolid
          text="Continue with Biometric lock"
          onPress={handleBioAuthSetup}
        />
        {/* <Ionicons name="finger-print-outline" color={'gray'} size={60} /> */}
      </View>

      <View className="mb-8 mt-4 px-4">
        <MaterialButtonText
          text="Continue without Biometric lock"
          onPress={handleWithoutBioLock}
        />
      </View>
    </View>
  );

  return (
    <View className="h-full w-full flex-col items-center justify-center p-4">
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View className="h-full justify-end ">{BioSetupView}</View>
      </Modal>
      <View className="mt-6 w-full items-center justify-center">
        <Image className="h-60 w-60" source={require('../assets/signin.png')} />
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
