import {PayloadAction, createSlice} from '@reduxjs/toolkit';

export type BioAuthState = {
  isBioAuth: boolean | null;
};

const initialState: BioAuthState = {
  isBioAuth: null,
};

const bioAuthSlice = createSlice({
  name: 'BioAuth',
  initialState,
  reducers: {
    updateBioAuth: (state, action: PayloadAction<boolean>) => {
      state.isBioAuth = action.payload;
    },
  },
});

export const {updateBioAuth} = bioAuthSlice.actions;
export default bioAuthSlice.reducer;
