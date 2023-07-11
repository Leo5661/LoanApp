import {createSlice} from '@reduxjs/toolkit';

export type User = {
  uId: string;
  name: string;
  email: string;
};

export type UserState = {
  user: User | undefined;
  loading: boolean;
  error: boolean;
};

const initialState: UserState = {
  user: undefined,
  loading: false,
  error: false,
};

export const userSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    resetUser: (state, action) => {
      state.user = undefined;
      state.loading = false;
      state.error = false;
    },
  },
});

export const {setUser, setLoading, setError, resetUser} = userSlice.actions;

export default userSlice.reducer;
