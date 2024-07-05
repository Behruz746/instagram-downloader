import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  code: "",
  isLoad: false,
  toggleReel: false,
  reel: null,
  reelsHistory: [],
  isErr: null,
};

export const reelsSlice = createSlice({
  name: "reels",
  initialState,
  reducers: {
    getReelView: (state) => {
      state.toggleReel = true;
    },
    setCode: (state, action) => {
      state.code = action.payload;
    },
    getReelStart: (state) => {
      state.isLoad = true;
      state.isErr = null;
    },
    getReelSuccess: (state, action) => {
      state.isLoad = false;
      state.reel = action.payload;
    },
    getReelFailure: (state, action) => {
      state.isLoad = false;
      state.isErr = action.payload;
    },
  },
});

export const {
  getReelView,
  setCode,
  getReelStart,
  getReelSuccess,
  getReelFailure,
} = reelsSlice.actions;
export default reelsSlice.reducer;
