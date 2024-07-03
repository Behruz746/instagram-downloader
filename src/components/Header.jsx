import React from "react";
import { NavLink } from "react-router-dom";
import { styles, textStyles } from "../util/styles";
import { icons } from "../constans";

function Header() {
  return (
    <header
      className={`sticky top-0 left-0 bg-white z-[100] w-full py-[8px] sm:py-[16px] ${styles.borderDarkBottom}`}
    >
      <div className={`${styles.container} flex items-center justify-between`}>
        <div className="flex items-center gap-[10px] cursor-pointer">
          <img
            width={62}
            height={44}
            src={icons.webLogo}
            className="w-[50px] h-[32px] sm:w-[63px] sm:h-[44px]"
            alt="insta downloader logo"
          />
          <h1 className="font-allerta text-[18px] sm:text-[22px] font-normal leading-[100%] text-dark">
            Insta Downloader
          </h1>
        </div>

        <div className="flex sm:hidden">
          <button className="flex justify-center items-center p-[15px]">
            <img width={24} height={24} src={icons.menuIcon} alt="menu icon" />
          </button>
        </div>

        <nav className="hidden sm:flex items-center justify-between gap-[20px] max-w-[350px] sm:max-w-[470px] w-full">
          <NavLink
            to="/"
            className={`font-allerta text-dark  ${textStyles.text2} cursor-pointer hover:underline`}
          >
            Insta Downloader
          </NavLink>
          {/* <NavLink
            to="/"
            className={`font-allerta text-dark  ${textStyles.text2} cursor-pointer hover:underline`}
          >
            History
          </NavLink> */}
          <NavLink
            to="/"
            className={`font-allerta text-dark  ${textStyles.text2} cursor-pointer hover:underline`}
          >
            About
          </NavLink>

          <div className="flex flex-col relative">
            <button className="flex items-center gap-[5px] py-[15px] px-[20px] bg-linear-blue text-white font-allerta text-[18px] font-normal leading-[100%] rounded-[8px] cursor-pointer">
              English
              <img width={24} height={24} src={icons.arrow} alt="arrow down" />
            </button>
            <ul className="w-full hidden flex-col absolute top-[60px] bg-linear-blue rounded-[8px] overflow-hidden">
              <li className="py-[10px] px-[7px] text-center  text-white font-allerta text-[18px] font-normal leading-[100%] hover:bg-[#551af8]">
                English
              </li>
              <li className="py-[10px] px-[7px] text-center  text-white font-allerta text-[18px] font-normal leading-[100%] hover:bg-[#551af8]">
                Русский
              </li>
              <li className="py-[10px] px-[7px] text-center  text-white font-allerta text-[18px] font-normal leading-[100%] hover:bg-[#551af8]">
                O’zbekcha
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
