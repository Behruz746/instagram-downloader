import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  code: "",
  isLoad: false,
  reel: null,
  reelsHistory: [],
  isErr: null,
};

export const reelsSlice = createSlice({
  name: "reels",
  initialState,
  reducers: {
    setCode: (state, action) => {
      state.code = action.payload;
      console.log(state.code);
    },
    getReelStart: (state) => {
      state.isLoad = true;
    },
    getReelSuccess: (state, action) => {
      state.isLoad = false;
      state.reel = action.payload;
      console.log(state.reel);
    },
    getReelFailure: (state, action) => {
      state.isLoad = false;
      state.isErr = action.payload;
      console.log(state.isErr);
    },
  },
});

export const { setCode, getReelStart, getReelSuccess, getReelFailure } =
  reelsSlice.actions;
export default reelsSlice.reducer;
