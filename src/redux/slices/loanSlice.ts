import {PayloadAction, createSlice} from '@reduxjs/toolkit';

export type Loan = {
  isActive: boolean;
  principleAmount: number;
  borrowAmount: number;
  loanPeriod: number;
  instalmentAmount: number;
  intrestRate: number;
  nextDueDate: Date | undefined;
  borrowedDate: Date | undefined;
};

const initialState: Loan = {
  isActive: false,
  principleAmount: 0,
  borrowAmount: 0,
  loanPeriod: 0,
  instalmentAmount: 0,
  intrestRate: 0,
  nextDueDate: undefined,
  borrowedDate: undefined,
};

export const loanSlice = createSlice({
  name: 'Loan',
  initialState,
  reducers: {
    setLoanAmount: (state, action: PayloadAction<number>) => {
      if (isNaN(action.payload)) {
        state.principleAmount = 0;
      } else {
        state.principleAmount = action.payload;
      }
    },

    setLoanPeriod: (state, action: PayloadAction<number>) => {
      if (isNaN(action.payload)) {
        state.loanPeriod = 0;
      } else {
        state.loanPeriod = action.payload;
      }
    },
  },
});

export const {setLoanAmount, setLoanPeriod} = loanSlice.actions;

export default loanSlice.reducer;
