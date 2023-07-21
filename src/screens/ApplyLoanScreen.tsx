import {ScrollView, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import TopBar from '../components/TopBar';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeStackParamList} from '../navigation/HomeNavigator';
import ApplicationFormCategory from '../components/ApplicationFormCategory';
import {useAppDispatch, useAppSelector} from '../hooks/useReduxHooks';
import {
  User,
  setUserAddress,
  setUserAge,
  setUserCompName,
  setUserJobType,
  setUserMonthlyPay,
  setUserName,
  setUserPhone,
  setUserPosition,
} from '../redux/slices/userSlice';
import MaterialButtonSolid from '../components/MaterialButtonSolid';
import {setLoanAmount, setLoanPeriod} from '../redux/slices/loanSlice';
import {isFormValid} from '../utils/FormValidation';

type Props = NativeStackScreenProps<HomeStackParamList, 'ApplyLoan'>;
const title = 'Apply Loan';

const ApplyLoanScreen = ({navigation, route}: Props) => {
  const name = useAppSelector(state => state.persistedReducer.user.name);
  const age = useAppSelector(state => state.persistedReducer.user.age);
  const phone = useAppSelector(state => state.persistedReducer.user.phone);
  const address = useAppSelector(state => state.persistedReducer.user.address);
  const typeOfJob = useAppSelector(
    state => state.persistedReducer.user.jobType,
  );
  const companyName = useAppSelector(
    state => state.persistedReducer.user.companyName,
  );
  const position = useAppSelector(
    state => state.persistedReducer.user.position,
  );
  const monthlyPay = useAppSelector(
    state => state.persistedReducer.user.monthlyPay,
  );
  const loanAmount = useAppSelector(
    state => state.persistedReducer.loan.principleAmount,
  );
  const repaymentPeriod = useAppSelector(
    state => state.persistedReducer.loan.loanPeriod,
  );
  const dispatch = useAppDispatch();

  // const [open, setOpen] = useState(false);
  // const [value, setValue] = useState('');
  // const [timeItem, setTimeItem] = useState([
  //   {
  //     key: `1`,
  //     value: '3',
  //   },
  //   {key: `2`, value: '6'},
  //   {key: `3`, value: '12'},
  // ]);

  const sendData = (user: User) => {};

  const handleSubmit = () => {
    navigation.navigate('CheckEligibility');
  };

  return (
    <View className="flex-grow flex-col">
      <TopBar title={title} onBackPress={() => navigation.goBack()} />
      <Text className="mt-4 pl-4 text-3xl font-semibold text-gray-600">
        Loan Application
      </Text>
      <Text className="mt-1 pl-4 text-lg font-light text-gray-500">
        Just few steps to get exciting loan package.
      </Text>

      <ScrollView className="mb-32 px-4">
        <ApplicationFormCategory
          title="Personal details"
          icon="person-outline"
        />

        <View className="mt-1 flex-col items-start p-1">
          <Text>Name</Text>
          <TextInput
            className="my-1 h-10 w-full rounded-md border border-gray-600 px-2 py-1 text-lg text-gray-800 focus:border-indigo-400"
            inputMode="text"
            value={name}
            placeholderTextColor={'#a0a0a097'}
            onChangeText={text => {
              dispatch(setUserName(text));
            }}
            placeholder="name"
            keyboardType="default"
          />
        </View>

        <View className=" flex-col items-start p-1">
          <Text>Age</Text>
          <TextInput
            className="my-1 h-10 w-full rounded-md border border-gray-600 px-2 py-1 text-lg text-gray-800 focus:border-indigo-400"
            inputMode="numeric"
            value={age?.toString()}
            placeholderTextColor={'#a0a0a097'}
            onChangeText={text => {
              dispatch(setUserAge(text));
            }}
            placeholder="20"
            keyboardType="number-pad"
          />
        </View>

        <ApplicationFormCategory
          title="Contact details"
          icon="mobile-friendly"
        />

        <View className="mt-1 flex-col items-start p-1">
          <Text>Phone</Text>
          <TextInput
            className="my-1 h-10 w-full rounded-md border border-gray-600 px-2 py-1 text-lg text-gray-800 focus:border-indigo-400"
            inputMode="numeric"
            maxLength={10}
            value={phone}
            placeholderTextColor={'#a0a0a097'}
            onChangeText={text => {
              dispatch(setUserPhone(text));
            }}
            placeholder="7548689542"
            keyboardType="number-pad"
          />
        </View>

        <View className=" flex-col items-start p-1">
          <Text>Address</Text>
          <TextInput
            className="my-1 h-10 w-full rounded-md border border-gray-600 px-2 py-1 text-lg text-gray-800 focus:border-indigo-400"
            inputMode="text"
            value={address}
            placeholderTextColor={'#a0a0a097'}
            onChangeText={text => {
              dispatch(setUserAddress(text));
            }}
            placeholder="New Delhi"
            keyboardType="default"
          />
        </View>

        <ApplicationFormCategory
          title="Employment details"
          icon="engineering"
        />

        <View className="mt-1 flex-col items-start p-1">
          <Text>Type of job</Text>
          <TextInput
            className="my-1 h-10 w-full rounded-md border border-gray-600 px-2 py-1 text-lg text-gray-800 focus:border-indigo-400"
            inputMode="text"
            placeholderTextColor={'#a0a0a097'}
            value={typeOfJob}
            onChangeText={text => {
              dispatch(setUserJobType(text));
            }}
            placeholder="Full time"
            keyboardType="default"
          />
        </View>

        <View className="mt-1 flex-col items-start p-1">
          <Text>Company Name</Text>
          <TextInput
            className="my-1 h-10 w-full rounded-md border border-gray-600 px-2 py-1 text-lg text-gray-800 focus:border-indigo-400"
            inputMode="text"
            placeholderTextColor={'#a0a0a097'}
            value={companyName}
            onChangeText={text => {
              dispatch(setUserCompName(text));
            }}
            placeholder="Google"
            keyboardType="default"
          />
        </View>

        <View className="mt-1 flex-col items-start p-1">
          <Text>Position/Role</Text>
          <TextInput
            className="my-1 h-10 w-full rounded-md border border-gray-600 px-2 py-1 text-lg text-gray-800 focus:border-indigo-400"
            inputMode="text"
            placeholderTextColor={'#a0a0a097'}
            value={position}
            onChangeText={text => {
              dispatch(setUserPosition(text));
            }}
            placeholder="SDE-2"
            keyboardType="default"
          />
        </View>

        <ApplicationFormCategory
          title="Income details"
          icon="monetization-on"
        />

        <View className="mt-1 flex-col items-start p-1">
          <Text>Monthly Pay</Text>
          <TextInput
            className="my-1 h-10 w-full rounded-md border border-gray-600 px-2 py-1 text-lg text-gray-800 focus:border-indigo-400"
            inputMode="numeric"
            maxLength={10}
            placeholderTextColor={'#a0a0a097'}
            value={monthlyPay?.toString()}
            onChangeText={text => {
              dispatch(setUserMonthlyPay(parseFloat(text)));
            }}
            placeholder="35,000"
            keyboardType="number-pad"
          />
        </View>

        <ApplicationFormCategory title="Loan details" icon="request-page" />

        <View className="mt-1 flex-col items-start p-1">
          <Text>Loan Amount</Text>
          <TextInput
            className="my-1 h-10 w-full rounded-md border border-gray-600 px-2 py-1 text-lg text-gray-800 focus:border-indigo-400"
            inputMode="numeric"
            maxLength={10}
            placeholderTextColor={'#a0a0a097'}
            value={loanAmount?.toString()}
            onChangeText={text => {
              dispatch(setLoanAmount(parseFloat(text)));
            }}
            placeholder="10,000"
            keyboardType="number-pad"
          />
        </View>

        <View className="mt-1 flex-col items-start p-1">
          <Text>
            {`Repayment period `}
            <Text className="text-xs font-extralight">(in years)</Text>
          </Text>
          <TextInput
            className="my-1 h-10 w-full rounded-md border border-gray-600 px-2 py-1 text-lg text-gray-800 focus:border-indigo-400"
            inputMode="numeric"
            maxLength={10}
            placeholderTextColor={'#a0a0a097'}
            value={repaymentPeriod?.toString()}
            onChangeText={text => {
              dispatch(setLoanPeriod(parseFloat(text)));
            }}
            placeholder="5"
            keyboardType="number-pad"
          />
        </View>

        {/* <SelectList
          setSelected={(val: any) => {
            setValue(val);
          }}
          data={timeItem}
        /> */}

        <View className="my-4">
          <MaterialButtonSolid
            disabled={
              !isFormValid(
                name,
                age,
                phone,
                address,
                typeOfJob,
                companyName,
                position,
                monthlyPay,
                loanAmount,
                repaymentPeriod,
              )
            }
            text="Check Eligibility"
            onPress={handleSubmit}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default ApplyLoanScreen;
