import messaging from '@react-native-firebase/messaging';

export const getDiviceToken = async () => {
  await messaging().registerDeviceForRemoteMessages();
  const token = await messaging().getToken();
  console.log('Divice Token: ', token);
};
