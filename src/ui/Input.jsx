import React from "react";
import { icons, images } from "../constans";

function Input() {
  return (
    <div className="w-full flex items-center h-auto">
      <div className="flex items-center max-w-[957px] w-full border-[1px] border-solid border-[#FF5B79] rounded-l-[16px] border-r-[0px]">
        <input
          type="text"
          placeholder="Past URL Instagram"
          className="py-[8px] sm:py-[15px] px-[10px] sm:px-[20px] w-full placeholder:text-[14px] placeholder:sm:text-[16px]"
        />
        <button type="button" className="p-[15px] cursor-pointer">
          <img width={32} height={32} src={icons.clear} alt="remove icon" />
        </button>
      </div>
      <button
        type="button"
        className="max-w-[150px] sm:max-w-[282px] w-full flex justify-center items-center gap-[8px] sm:gap-[17px] bg-linear-blue py-[19.5px] sm:py-[15px] pl-[10px] pr-[10px]  sm:pl-[28px] sm:pr-[50px] rounded-r-[16px] text-white text-[14px] sm:text-[23px] text-normal leading-[100%] cursor-pointer border-[1px] border-solid border-[blue]"
      >
        <img
          width={20}
          height={14}
          src={icons.lightLogo}
          alt="insta downloader logo"
        />
        Download
      </button>
    </div>
  );
}

export default Input;
