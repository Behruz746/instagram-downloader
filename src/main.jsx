import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import store from "./store/index.js";
// import { Provider } from "react-redux";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

// i18next
//   .use(initReactI18next)
//   .use(LanguageDetector)
//   .use(HttpApi)
//   .init({
//     supportedLngs: ["en", "uz", "ru"],
//     fallbackLng: "en",
//     detection: {
//       order: ["path", "cookie", "htmlTag", "localStorage", "subdomain"],
//       caches: ["localStorage"],
//     },
//     backend: { loadPath: "/locales/{{lng}}/translation.json" },
//     react: { useSuspense: false },
//   });
// document.documentElement.lang = localStorage.getItem("i18nextLng");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <App />
    {/* </Provider> */}
  </React.StrictMode>
);
