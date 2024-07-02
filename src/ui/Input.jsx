import React from "react";
import { icons, images } from "../constans";

function Input() {
  return (
    <div className="w-full flex items-center">
      <div className="flex items-center max-w-[957px] w-full border-[1px] border-solid border-[#FF5B79] rounded-l-[16px] border-r-[0px]">
        <input
          type="text"
          placeholder="Past URL Instagram"
          className="py-[15px] px-[20px] w-full"
        />

        <button type="button" className="p-[15px] cursor-pointer">
          <img width={24} height={24} src={icons.clear} alt="remove icon" />
        </button>
      </div>
      <button
        type="button"
        className="max-w-[282px] h-[54px] w-full flex justify-center items-center gap-[17px] bg-linear-blue py-[15px] pl-[28px] pr-[50px] rounded-r-[16px] text-white text-[23px] text-normal leading-[100%] cursor-pointer"
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
