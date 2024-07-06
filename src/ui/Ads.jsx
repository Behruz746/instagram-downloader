import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { icons } from "../constans";
import { textStyles } from "../util/styles";
import Cookies from "js-cookie";

function Ads() {
  const { t } = useTranslation();
  const [adToggle, setAdToggle] = useState(false);
  const [time, setTime] = useState(0);
  const intervalIdRef = useRef(null);
  const currentLangCode = Cookies.get("i18next");
  const setFont = `${
    currentLangCode === "ru" || "uk" ? "font-arial" : "font-allerta"
  }`;

  useEffect(() => {
    intervalIdRef.current = setInterval(() => {
      setTime((prev) => {
        const newTime = prev + 1000;
        if (newTime === 25 * 1000) {
          setAdToggle(true);
        } else if (newTime >= 60 * 1000) {
          setAdToggle(false);
          clearInterval(intervalIdRef.current);
        }
        return newTime;
      });
    }, 1000);

    return () => clearInterval(intervalIdRef.current);
  }, []);

  const handleButtonClick = () => {
    clearInterval(intervalIdRef.current);
    setAdToggle(false);
  };

  return (
    <>
      <div
        className={`${
          adToggle ? "w-full h-screen fixed z-90 bottom-[0px]" : "hidden"
        }`}
        onClick={handleButtonClick}
      ></div>
      <div
        className={`fixed z-[150] max-w-[935px] w-full  left-[50%] translate-x-[-50%] bg-white py-[10px] px-[10px] sm:py-[20px] sm:px-[30px] rounded-[16px] border-[1px] border-solid border-[#FF5B79] ease-in duration-200 ${
          adToggle
            ? "bottom-[0px] sm:bottom-[20px] opacity-[1] z-[100] pointer-events-auto"
            : "-bottom-[150px] sm:-bottom-[200px] opacity-[0] -z-[100] pointer-events-none select-none"
        }`}
      >
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-[10px]">
            <img src={icons.blueLogo} alt="insta downloader logo" />
            <h1>Insta Downloader</h1>
          </div>
          <button
            type="button"
            className="p-[10px] cursor-pointer"
            onClick={() => handleButtonClick()}
          >
            <img
              src={icons.clear}
              className="w-[32px] h-[32px]"
              alt="remove icon"
            />
          </button>
        </div>

        <div className="mt-[10px]">
          <p className={`${setFont} ${textStyles.text}`}>{t("ads-text")}</p>
        </div>

        <div className="w-full flex items-center justify-center mt-[10px]">
          <a
            target="_blank"
            href="https://buymeacoffee.com/behruzdev"
            className="m-auto border-[1px] border-solid border-[#0000] hover:border-[#FF5B79] rounded-[8px] cursor-pointer"
          >
            <img src={icons.coffee} alt="buy a coffee logo" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Ads;
