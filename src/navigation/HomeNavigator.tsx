import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ApplyLoanScreen from '../screens/ApplyLoanScreen';
import LoanPackage from '../screens/LoanPackage';
import CheckEligibilityScreen from '../screens/CheckEligibilityScreen';
import DocumentVerification from '../screens/DocumentVerification';
import LoanStatusScreen from '../screens/LoanStatusScreen';
import AddBankAccountScreen from '../screens/AddBankAccountScreen';
import NotificationScreen from '../screens/NotificationScreen';

export type HomeStackParamList = {
  Home: undefined;
  ApplyLoan: undefined;
  Notification: undefined;
  Settings: undefined;
  UploadDoc: undefined;
  CheckEligibility: undefined;
  DocumentVerification: undefined;
  LoanPackage: undefined;
  Status: undefined;
  AddBank: undefined;
};

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

const HomeNavigator = () => {
  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}
    >
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="ApplyLoan" component={ApplyLoanScreen} />
      <HomeStack.Screen name="LoanPackage" component={LoanPackage} />
      <HomeStack.Screen
        name="CheckEligibility"
        component={CheckEligibilityScreen}
      />
      <HomeStack.Screen
        name="DocumentVerification"
        component={DocumentVerification}
      />
      <HomeStack.Screen name="Status" component={LoanStatusScreen} />
      <HomeStack.Screen name="AddBank" component={AddBankAccountScreen} />
      <HomeStack.Screen name="Notification" component={NotificationScreen} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
