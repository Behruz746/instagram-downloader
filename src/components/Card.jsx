import React from "react";
import { icons } from "../constans";

const img = "/img/photo_2024-07-03_14-13-48.jpg";

function Card() {
  return (
    <div className="relative max-w-[720px] xs:max-w-[320px] w-full h-[520px] rounded-none ss:rounded-[16px] overflow-hidden bg-linear-blue">
      <button
        className="flex items-center justify-center w-[60px] h-[60px] rounded-full 
      bg-white absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[-50%] cursor-pointer"
      >
        <img width={24} height={24} src={icons.playIcon} alt="logo" />
        {/* <img
          width={26}
          height={16}
          src={icons.blueLogo}
          alt="logo"
        /> */}
      </button>

      <img
        width={320}
        height={520}
        loading="lazy"
        src={img}
        className="w-[720px] xs:max-w-[320px] h-[520px] object-cover"
        alt="insta downloader video image"
      />
    </div>
  );
}

export default Card;
