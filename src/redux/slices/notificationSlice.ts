import {PayloadAction, createSlice} from '@reduxjs/toolkit';

export type FCMNotificationListType = {
  title: string | undefined;
  body: string | undefined;
  data: {} | undefined;
  time: number | undefined;
};

type initialStateType = {
  deviceToken: string | undefined;
  isNewNotification: boolean;
  notification: FCMNotificationListType[];
};

const initialState: initialStateType = {
  deviceToken: undefined,
  isNewNotification: false,
  notification: [],
};

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    openNotification: (state, action: PayloadAction<boolean>) => {
      state.isNewNotification = action.payload;
    },

    setDeviceToken: (state, action: PayloadAction<string>) => {
      state.deviceToken = action.payload;
    },

    setNotification: (
      state,
      action: PayloadAction<FCMNotificationListType>,
    ) => {
      state.notification.push(action.payload);
      state.isNewNotification = true;
    },
  },
});

export const {setNotification, openNotification, setDeviceToken} =
  notificationSlice.actions;
export default notificationSlice.reducer;
