import {PayloadAction, createSlice} from '@reduxjs/toolkit';

export type Doc = {
  name: string;
  docBase64: string;
};

export type DocState = {
  verificationDocList: Doc[];
};

const initialState: DocState = {
  verificationDocList: [],
};

export const docSlice = createSlice({
  name: 'Doc',
  initialState,
  reducers: {
    setDocToList: (state, action: PayloadAction<Doc>) => {
      if (state.verificationDocList.length != 0) {
        let id = action.payload.name;
        state.verificationDocList.forEach((element, index) => {
          if (element.name === id) {
            state.verificationDocList.splice(index, 1, action.payload);
          } else {
            state.verificationDocList.push(action.payload);
          }
        });
      } else {
        state.verificationDocList.push(action.payload);
      }
    },
  },
});

export const {setDocToList} = docSlice.actions;

export default docSlice.reducer;
