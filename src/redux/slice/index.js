import { createSlice } from "@reduxjs/toolkit";

const sampleSlice = createSlice({
  name: "sample",
  initialState: {
    ///state//
    fillText: {},
  },
  ///reducer
  reducers: {
    ///action
    fillTextAction: (state, { payload }) => {
      state.fillText = payload;
    },
  },
});

export const {
  // sampleAction ,
  fillTextAction,
} = sampleSlice.actions;

// export const sampleSelector = (state) => state.sample;
///assign state to selector
export const fillTextSelector = (state) => state.fillText;

//export reducer
const sampleReducer = sampleSlice.reducer;
export default sampleReducer;
