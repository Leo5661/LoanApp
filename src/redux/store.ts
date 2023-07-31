import {combineReducers, configureStore} from '@reduxjs/toolkit';
import userSlice from './slices/userSlice';
import bioAuthSlice from './slices/bioAuthSlice';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import loanSlice from './slices/loanSlice';
import documentSlice from './slices/documentSlice';
import notificationSlice from './slices/notificationSlice';

const persistConfig = {
  key: 'loanApp',
  version: 1,
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  user: userSlice,
  bioAuth: bioAuthSlice,
  loan: loanSlice,
  doc: documentSlice,
  notification: notificationSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: {
    persistedReducer,
  },

  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
