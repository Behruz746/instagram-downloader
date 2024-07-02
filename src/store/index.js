import { configureStore } from "@reduxjs/toolkit";
import ReelsReduce from "../slice/reels";
import LangReduce from "../slice/lang";

export default configureStore({
  reducer: { reels: ReelsReduce, lang: LangReduce },
  devTools: process.env.NODE_ENV !== "production", // redux dev tool uchun
});
