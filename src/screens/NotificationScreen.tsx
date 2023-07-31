import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeStackParamList} from '../navigation/HomeNavigator';
import {useAppSelector} from '../hooks/useReduxHooks';
import TopBar from '../components/TopBar';
import NotificationCard from '../components/NotificationCard';

type Props = NativeStackScreenProps<HomeStackParamList, 'Notification'>;
const title = 'Notifications';
const NotificationScreen = ({navigation}: Props) => {
  const notificaion = useAppSelector(
    state => state.persistedReducer.notification.notification,
  );

  if (notificaion.length == 0) {
    console.log('first call');
    return (
      <View>
        <TopBar title={title} onBackPress={() => navigation.goBack()} />
        <Text className="w-full text-center text-xl text-gray-600">
          No Notification
        </Text>
      </View>
    );
  }

  return (
    <View>
      <TopBar title={title} onBackPress={() => navigation.goBack()} />
      <ScrollView className="gap-2 p-4">
        {notificaion ? (
          [...notificaion].reverse().map((item, index) => {
            return (
              <NotificationCard
                key={index}
                time={item.time!}
                title={item.title!}
                message={item.body!}
              />
            );
          })
        ) : (
          <></>
        )}
      </ScrollView>
    </View>
  );
};

export default NotificationScreen;
