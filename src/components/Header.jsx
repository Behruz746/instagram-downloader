import React, { useState, Fragment, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { styles } from "../util/styles";
import { icons, menu, lang } from "../constans";

function Header() {
  const [menuToggle, setMenuToggle] = useState(false);
  const [langToggle, setLangToggle] = useState(false);

  useEffect(() => {
    function scroll(e) {
      const headerEl = document.querySelector("#header");
      const currentScrollPosition = window.pageYOffset; // toFixed olib tashlandi
      setLangToggle(false);
      setMenuToggle(false);

      if (currentScrollPosition >= 50) {
        // scrollY o'rniga currentScrollPosition ishlatildi
        headerEl.style.paddingTop = "5px";
        headerEl.style.paddingBottom = "5px";
      } else if (currentScrollPosition < 50) {
        // scrollY o'rniga currentScrollPosition ishlatildi
        headerEl.style.paddingTop = "15px";
        headerEl.style.paddingBottom = "15px";
      }
    }

    window.addEventListener("scroll", scroll);

    // Event listenerni to'g'ri olib tashlash
    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, []); // Bo'sh array bilan useEffect faqat bir marta ishga tushadi

  return (
    <header
      id="header"
      className={`sticky top-0 left-0 bg-white z-[100] w-full py-[8px] sm:py-[16px] ${styles.borderDarkBottom}`}
    >
      <div
        className={`${styles.container} flex items-center justify-between relative`}
      >
        <a
          href="#downloader"
          className="flex items-center gap-[10px] cursor-pointer"
        >
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
        </a>

        <div className={`${menuToggle ? "flex" : "sm:hidden"} sm:hidden`}>
          <button
            type="button"
            id="menu-btn"
            className="flex justify-center items-center p-[15px]"
            onClick={() => setMenuToggle((prev) => !prev)}
          >
            <img
              width={24}
              height={24}
              src={menuToggle ? icons.clear : icons.menuIcon}
              alt="menu icon"
            />
          </button>
        </div>

        <nav
          className={`
            ${
              menuToggle
                ? "top-[60px] opacity-[1] z-[1] pointer-events-auto select-auto"
                : "top-[40px] opacity-[0] -z-[1] pointer-events-none select-none sm:top-[0px] sm:opacity-[1] sm:z-[1] sm:pointer-events-auto sm:select-all sm:relative sm:flex-row"
            } ${
            langToggle ? "h-[500px]" : "h-[210px]"
          } absolute items-center sm:justify-between sm:gap-[41px] sm:max-w-[470px] flex sm:h-[100%] flex-col justify-start gap-[0px] bg-[#ffffff] left-[0]  w-full rounded-b-[16px] sm:rounded-[8px] overflow-hidden sm:overflow-visible ease-in duration-200`}
        >
          {menu.map((item, idx) => (
            <Fragment key={idx}>
              {item.page ? (
                <NavLink
                  to={item.link}
                  className={`${
                    menuToggle ? "w-full text-center" : ""
                  } font-allerta  text-dark text-[18px] font-normal leading-[53px] cursor-pointer hover:underline`}
                >
                  {item.text}
                </NavLink>
              ) : (
                <a
                  href={item.link}
                  className={`${
                    menuToggle ? "w-full text-center" : ""
                  } font-allerta  text-dark text-[18px] font-normal leading-[53px] cursor-pointer hover:underline`}
                >
                  {item.text}
                </a>
              )}
            </Fragment>
          ))}
          <div className="flex flex-col relative w-full">
            <button
              className="flex items-center justify-center gap-[5px] py-[15px] px-[20px] bg-linear-blue text-white font-allerta text-[18px] font-normal leading-[100%] rounded-none sm:rounded-[8px] cursor-pointer select-none"
              onClick={() => setLangToggle((prev) => !prev)}
            >
              English
              <img
                width={24}
                height={24}
                src={icons.arrow}
                className={` ease-in duration-100 ${
                  langToggle ? "rotate-[180deg]" : "rotate-[0deg]"
                }`}
                alt="arrow down"
              />
            </button>

            <ul
              className={`w-full ${
                menuToggle ? "relative top-0" : "sm:top-[60px]"
              } ${
                langToggle
                  ? "top-[0px] opacity-[1] z-[1] pointer-events-auto select-auto"
                  : "-top-[20px] opacity-[0] -z-[1] pointer-events-none select-none sm:top-[60px]"
              } flex-col sm:absolute bg-linear-blue rounded-none sm:rounded-[8px] overflow-auto h-[300px] sm:h-[150px] scroll-style  ease-in duration-200`}
            >
              {lang.map((lang, idx) => (
                <li
                  className="py-[20px] sm:py-[10px] px-[7px] text-center  text-white font-allerta text-[18px] font-normal leading-[100%] hover:bg-[#551af8] cursor-pointer select-none"
                  key={idx}
                >
                  {lang.lang}
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
