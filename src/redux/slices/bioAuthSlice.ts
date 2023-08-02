import {PayloadAction, createSlice} from '@reduxjs/toolkit';

export type BioAuthState = {
  isBioAuth: boolean | null;
  BioMetricType: string | undefined;
};

const initialState: BioAuthState = {
  isBioAuth: null,
  BioMetricType: undefined,
};

const bioAuthSlice = createSlice({
  name: 'BioAuth',
  initialState,
  reducers: {
    updateBioAuth: (state, action: PayloadAction<boolean>) => {
      state.isBioAuth = action.payload;
    },

    setBiometricType: (state, action: PayloadAction<string | undefined>) => {
      if(action.payload){
        state.BioMetricType = action.payload;
      }
    }
  },
});

export const {updateBioAuth, setBiometricType} = bioAuthSlice.actions;
export default bioAuthSlice.reducer;
