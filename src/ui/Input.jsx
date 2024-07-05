import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useSelector, useDispatch } from "react-redux";
import { getReelStart, getReelSuccess, getReelFailure } from "../slice/reels";
import { setCode } from "../slice/reels";
import { useTranslation } from "react-i18next";
import { icons, languages } from "../constans";
import ProjectData from "../service/video";

function Input() {
  const [isValue, setValue] = useState("");
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const currentLangCode = Cookies.get("i18next") || "en";
  const currentLang = languages.find((l) => l.code === currentLangCode);

  return (
    <form
      className="w-full flex items-center h-auto"
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(setCode(isValue));
        dispatch(getReelStart());
        const fetching = async () => {
          try {
            const { data } = await ProjectData.getVideo(isValue);
            dispatch(getReelSuccess(data));
            console.log(data);
          } catch (error) {
            dispatch(getReelFailure(error));
          }
        };

        fetching();
      }}
    >
      <div
        className={`flex items-center max-w-[957px] w-full border-[1px] border-solid border-[#FF5B79] ${
          currentLang.dir
            ? "rounded-r-[16px] rounded-l-[0px] border-r-[1px] border-l-[0]"
            : "rounded-l-[16px] rounded-r-[0px] border-r-[0] border-l-[1px]"
        }`}
      >
        <input
          type="text"
          placeholder={t("input-text")}
          className="py-[8px] sm:py-[15px] px-[10px] sm:px-[20px] w-full placeholder:text-[14px] placeholder:sm:text-[16px]"
          value={isValue}
          onChange={(e) => {
            setValue(e.target.value);
            console.log(isValue);
          }}
          required
        />

        <button
          type="button"
          className={` ${
            !isValue ? "opacity-0" : "opacity-[1]"
          } p-[15px] cursor-pointer`}
          onClick={() => setValue("")}
        >
          <img width={32} height={32} src={icons.clear} alt="remove icon" />
        </button>
      </div>
      <button
        type="submit"
        className={`max-w-[150px] sm:max-w-[282px] w-full flex justify-center items-center gap-[8px] sm:gap-[17px] bg-linear-blue py-[21px] sm:py-[18px] pl-[10px] pr-[10px] sm:pl-[28px] sm:pr-[50px] text-white text-[14px] sm:text-[23px] text-normal leading-[100%] cursor-pointer border-[1px] border-solid border-[blue] ${
          !currentLang.dir
            ? "rounded-r-[16px] rounded-l-[0px]"
            : "rounded-l-[16px] rounded-r-[0px]"
        }`}
      >
        <img
          width={20}
          height={14}
          src={icons.lightLogo}
          alt="insta downloader logo"
        />
        {t("download-text")}
      </button>
    </form>
  );
}

export default Input;
