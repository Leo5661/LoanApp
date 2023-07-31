import {PayloadAction, createSlice} from '@reduxjs/toolkit';

export enum LoanStatus {
  NOT_APPLIED,
  APPLICATION_SUBMITED,
  DOCUMENT_SUBMITED,
  DOCUMENT_VERIFICATION_FAILED,
  DOCUMENT_VERIFICATION_SUCCESS,
  PENDING,
  LOAN_SUCCESS,
  LOAN_FAILURE,
}

export type Loan = {
  isActive: boolean;
  principleAmount: number;
  borrowAmount: number;
  loanPeriod: number;
  loanStatus: LoanStatus;
  instalmentAmount: number;
  intrestRate: number;
  nextDueDate: number | undefined;
  borrowedDate: number | undefined;
};

const initialState: Loan = {
  isActive: false,
  principleAmount: 0,
  loanPeriod: 0,
  borrowAmount: 0,
  loanStatus: LoanStatus.NOT_APPLIED,
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

    setBorrowAmount: (state, action: PayloadAction<number>) => {
      if (isNaN(action.payload)) {
        state.borrowAmount = 0;
      } else {
        state.borrowAmount = action.payload;
      }
    },

    setLoanStatus: (state, action: PayloadAction<LoanStatus>) => {
      if (action.payload === LoanStatus.LOAN_SUCCESS) {
        state.isActive = true;
      }

      state.loanStatus = action.payload;
    },

    setInstalment: (state, action: PayloadAction<number>) => {
      if (isNaN(action.payload)) {
        state.instalmentAmount = 0;
      } else {
        state.instalmentAmount = action.payload;
      }
    },

    setIntrestRate: (state, action: PayloadAction<number>) => {
      if (isNaN(action.payload)) {
        state.intrestRate = 0;
      } else {
        state.intrestRate = action.payload;
      }
    },

    setBorrowDate: state => {
      if (!state.borrowedDate) {
        const date = new Date();
        state.borrowedDate = date.getTime();
      } else {
        return;
      }
    },

    setLoanFromCloud: (state, action: PayloadAction<Loan>) => {
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
  setLoanAmount,
  setLoanPeriod,
  setBorrowAmount,
  setInstalment,
  setIntrestRate,
  setLoanStatus,
  setBorrowDate,
  setLoanFromCloud,
} = loanSlice.actions;

export default loanSlice.reducer;
