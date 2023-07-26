import {View, Text, Image} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeStackParamList} from '../navigation/HomeNavigator';
import TopBar from '../components/TopBar';
import DocUploadCard from '../components/DocUploadCard';
import {DocList} from '../utils/TypesofDocuments';
import MaterialButtonSolid from '../components/MaterialButtonSolid';
import {useAppDispatch, useAppSelector} from '../hooks/useReduxHooks';
import {LoanStatus, setLoanStatus} from '../redux/slices/loanSlice';
import firestore from '@react-native-firebase/firestore';

type Props = NativeStackScreenProps<HomeStackParamList, 'DocumentVerification'>;
const title = 'Document Verification';

const DocumentVerification = ({navigation}: Props) => {
  const docList = useAppSelector(
    state => state.persistedReducer.doc.verificationDocList,
  );
  const status = useAppSelector(
    state => state.persistedReducer.loan.loanStatus,
  );
  const uid = useAppSelector(state => state.persistedReducer.user.uId);

  const dispatch = useAppDispatch();

  const updateStatusOnCloud = () => {
    firestore().collection('Users').doc(uid).update({
      'userData.loans.loanStatus': status,
    });
  };

  // const uploadDocOnCloud = () => {
  //   firestore().collection('Users').doc(uid).update({
  //     doc: docList,
  //   });
  // };

  const handleUploadDoc = () => {
    dispatch(setLoanStatus(LoanStatus.DOCUMENT_SUBMITED));
    updateStatusOnCloud();
    // uploadDocOnCloud();
    navigation.navigate('Status');
  };

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

      <View className="">
        {DocList.map((item, index) => {
          return (
            <DocUploadCard
              key={index}
              name={item.name}
              types={item.types}
              icon={item.icon}
            />
          );
        })}
      </View>

      <View className="my-4 p-4">
        <MaterialButtonSolid
          disabled={docList.length < 3}
          text="Upload for verification"
          onPress={handleUploadDoc}
        />
      </View>
    </View>
  );
};

export default DocumentVerification;
