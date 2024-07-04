import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import store from "./store/index.js";
import { Provider } from "react-redux";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ["en", "uz", "ru", "ar", "chi", "jp", "kr", "tr", "uk"],
    fallbackLng: "ar",
    detection: {
      order: ["path", "cookie", "htmlTag", "localStorage", "subdomain"],
      caches: ["cookie"],
    },
    backend: { loadPath: "/locales/{{lng}}/translation.json" },
    react: { useSuspense: false },
  });

const detectedLanguage = localStorage.getItem("i18nextLng") || "en";
document.documentElement.lang = detectedLanguage;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
