import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {Loan} from './loanSlice';

export type User = {
  uId: string | undefined;
  name: string | undefined;
  email: string | undefined;
  age: string | undefined;
  phone: string | undefined;
  address: string | undefined;
  jobType: string | undefined;
  companyName: string | undefined;
  position: string | undefined;
  monthlyPay: number | undefined;
  loans: Loan[];
};

const initialState: User = {
  uId: undefined,
  name: undefined,
  age: undefined,
  email: undefined,
  phone: undefined,
  address: undefined,
  jobType: undefined,
  companyName: undefined,
  position: undefined,
  monthlyPay: undefined,
  loans: [],
};

export const userSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    setUserName: (state, action: PayloadAction<string>) => {
      console.log(`${state.name} : action: ${action.payload}`);
      state.name = action.payload;
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
      state.monthlyPay = action.payload;
    },

    setLoan: (state, action: PayloadAction<Loan[]>) => {
      state.loans = action.payload;
    },
  },
});

export const {
  setUserName,
  setUserAge,
  setUserPhone,
  setUserEmail,
  setUserAddress,
  setUserJobType,
  setUserCompName,
  setUserPosition,
  setUserMonthlyPay,
} = userSlice.actions;

export default userSlice.reducer;
