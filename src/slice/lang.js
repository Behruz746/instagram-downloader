import { createSlice } from "@reduxjs/toolkit";
import i18next from "i18next";

const langCode = () => {
  let lang = localStorage.getItem("i18nextLng");
  if (lang === "uz") {
    lang = "O‘zb";
  } else if (lang === "en") {
    lang = "Eng";
  } else {
    lang = "Рус";
  }
  return lang;
};

const initialState = {
  language: langCode(),
  langToggle: false,
};

export const langSlice = createSlice({
  name: "lang",
  initialState,
  reducers: {
    toggleHandler: (state) => {
      state.langToggle = !state.langToggle;
    },
    changeLang: (state, action) => {
      const newLang = action.payload;
      i18next.changeLanguage(newLang.countryCode); // Tilni yangilash
      state.language = newLang.title; // Tilni Redux store ga saqlash
      state.langToggle = false; // LangToggle ni o'chirish
    },
    removeLang: (state) => {
      state.langToggle = false;
    },
  },
});

export const { toggleHandler, changeLang, removeLang } = langSlice.actions;
export default langSlice.reducer;
