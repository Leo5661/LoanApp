import {PayloadAction, createSlice} from '@reduxjs/toolkit';

export type User = {
  uId: string;
  fname: string;
  lname: string;
  email: string;
  age: string;
  phone: string;
  address: string;
  jobType: string;
  companyName: string;
  position: string;
  monthlyPay: number;
};

const initialState: User | null = {
  uId: '',
  fname: '',
  lname: '',
  age: '',
  email: '',
  phone: '',
  address: '',
  jobType: '',
  companyName: '',
  position: '',
  monthlyPay: 0,
};

export const userSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    setUserId: (state, action: PayloadAction<string>) => {
      state.uId = action.payload;
    },

    setUserfName: (state, action: PayloadAction<string>) => {
      state.fname = action.payload;
    },

    setUserlName: (state, action: PayloadAction<string>) => {
      state.lname = action.payload;
    },

    setUserEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },

    setUserAge: (state, action: PayloadAction<string>) => {
      state.age = action.payload;
    },

    setUserPhone: (state, action: PayloadAction<string>) => {
      state.phone = action.payload;
    },

    setUserAddress: (state, action: PayloadAction<string>) => {
      state.address = action.payload;
    },

    setUserJobType: (state, action: PayloadAction<string>) => {
      state.jobType = action.payload;
    },

    setUserCompName: (state, action: PayloadAction<string>) => {
      state.companyName = action.payload;
    },

    setUserPosition: (state, action: PayloadAction<string>) => {
      state.position = action.payload;
    },

    setUserMonthlyPay: (state, action: PayloadAction<number>) => {
      if (isNaN(action.payload)) {
        state.monthlyPay = 0;
      } else {
        state.monthlyPay = action.payload;
      }
    },

    setUserfromCloud: (state, action: PayloadAction<User | null>) => {
      if (action.payload != null) {
        console.log(action.payload);
        return action.payload;
      } else {
        return initialState;
      }
    },
  },
});

export const {
  setUserId,
  setUserfName,
  setUserlName,
  setUserAge,
  setUserPhone,
  setUserEmail,
  setUserAddress,
  setUserJobType,
  setUserCompName,
  setUserPosition,
  setUserMonthlyPay,
  setUserfromCloud,
} = userSlice.actions;

export default userSlice.reducer;
