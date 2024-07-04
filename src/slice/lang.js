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
  menuToggle: false,
};

export const langSlice = createSlice({
  name: "lang",
  initialState,
  reducers: {
    toggleLangHandler: (state) => {
      state.langToggle = !state.langToggle;
    },
    toggleMenuHandler: (state) => {
      state.menuToggle = !state.menuToggle;
    },
    changeLang: (state, action) => {
      const newLang = action.payload;
      i18next.changeLanguage(newLang.countryCode);
      state.language = newLang.name;
      state.langToggle = false;
    },
    remove: (state) => {
      state.langToggle = false;
      state.menuToggle = false;
    },
  },
});

export const { toggleLangHandler, toggleMenuHandler, changeLang, remove } =
  langSlice.actions;

export default langSlice.reducer;
