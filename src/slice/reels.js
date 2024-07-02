import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoad: false,
  reel: null,
  reelsHistory: [],
  isErr: null,
};

export const reelsSlice = createSlice({
  name: "reels",
  initialState,
  reducers: {
    getReelStart: (state) => {
      state.isLoad = true;
    },
    getReelSuccess: (state, action) => {
      state.isLoad = false;
      state.reel = action.payload;
    },
    getReelFailure: (state, action) => {
      state.isLoad = false;
      state.isErr = action.payload;
      console.log(state.isErr);
    },
  },
});

export const { getReelStart, getReelSuccess, getReelFailure } =
  reelsSlice.actions;
export default reelsSlice.reducer;
