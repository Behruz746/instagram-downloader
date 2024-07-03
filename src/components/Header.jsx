import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { styles, textStyles } from "../util/styles";
import { icons } from "../constans";

function Header() {
  const [menuToggle, setMenuToggle] = useState(true);
  const [langToggle, setLangToggle] = useState(true);

  return (
    <header
      className={`sticky top-0 left-0 bg-white z-[100] w-full py-[8px] sm:py-[16px] ${styles.borderDarkBottom}`}
    >
      <div
        className={`${styles.container} flex items-center justify-between relative`}
      >
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

        <div className={`${menuToggle ? "flex" : "sm:hidden"} sm:hidden`}>
          <button
            type="button"
            className="flex justify-center items-center p-[15px]"
            onClick={() => setMenuToggle((prev) => !prev)}
          >
            <img width={24} height={24} src={icons.menuIcon} alt="menu icon" />
          </button>
        </div>

        <nav
          className={`${
            menuToggle
              ? "flex flex-col justify-start gap-[0px] bg-[#ffffff] absolute top-[60px] left-[0] z-[100] w-full"
              : "hidden"
          } sm:flex items-center justify-between sm:gap-[20px] sm:max-w-[470px] bg-[red]`}
        >
          <NavLink
            to="/"
            className={`${
              menuToggle ? "w-full text-center" : ""
            } font-allerta  text-dark text-[18px] font-normal leading-[53px] cursor-pointer hover:underline`}
          >
            Insta Downloader 
          </NavLink>
          <NavLink
            to="/"
            className={`${
              menuToggle ? "w-full text-center" : ""
            } font-allerta  text-dark text-[18px] font-normal leading-[53px] cursor-pointer hover:underline`}
          >
            About
          </NavLink>

          <div className="flex flex-col relative w-full">
            <button
              className="flex items-center justify-center gap-[5px] py-[15px] px-[20px] bg-linear-blue text-white font-allerta text-[18px] font-normal leading-[100%] rounded-none sm:rounded-[8px] cursor-pointer"
              onClick={() => setLangToggle((prev) => !prev)}
            >
              English
              <img width={24} height={24} src={icons.arrow} alt="arrow down" />
            </button>

            <ul
              className={`w-full ${
                menuToggle ? "relative top-0" : "sm:absolute sm:top-[60px]"
              } ${
                langToggle ? "flex" : "hidden"
              } flex-col bg-linear-blue rounded-none sm:rounded-[8px] overflow-hidden`}
            >
              <li className="py-[20px] sm:py-[10px] px-[7px] text-center  text-white font-allerta text-[18px] font-normal leading-[100%] hover:bg-[#551af8]">
                English
              </li>
              <li className="py-[20px] sm:py-[10px] px-[7px] text-center  text-white font-allerta text-[18px] font-normal leading-[100%] hover:bg-[#551af8]">
                Русский
              </li>
              <li className="py-[20px] sm:py-[10px] px-[7px] text-center  text-white font-allerta text-[18px] font-normal leading-[100%] hover:bg-[#551af8]">
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
