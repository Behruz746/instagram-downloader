import React from "react";
import { useTranslation } from "react-i18next";
import { styles } from "../util/styles";
import { icons, soicalContac } from "../constans";
import { NavLink } from "react-router-dom";
import Cookies from "js-cookie";

function Footer() {
  const { t } = useTranslation();
  const currentLangCode = Cookies.get("i18next");
  const setFont = `${
    currentLangCode === "ru" || "uk" ? "font-arial" : "font-allerta"
  }`;

  return (
    <footer
      className={`${styles.borderDarkTop} w-full mt-[30px] sm:mt-[60px] lg:mt-[113px] py-[8px] sm:py-[16px] bg-white`}
    >
      <div
        className={`${styles.container} flex flex-col-reverse gap-[8px] sm:flex-row items-center justify-between`}
      >
        <div className="flex items-center gap-[10px]">
          <img
            width={42}
            height={32}
            src={icons.webLogo}
            className="w-[32px] h-[22px] sm:w-[42] sm:h-[32px]"
            alt="insta downloader logo"
          />
          <h2 className="text-[14px] text-[#615e5e] font-normal font-allerta leading-normal">
            © 2024
          </h2>
        </div>

        <nav className="flex items-center justify-between gap-[20px] sm:gap-[30px]">
          <NavLink
            to="/privacy-policy"
            className={`${setFont} text-[14px] font-normal leading-normal text-[#615e5e] hover:underline cursor-pointer`}
          >
            {t("privacy-policy-title")}
          </NavLink>
          <NavLink
            to="/contact"
            className={`${setFont} text-[14px] font-normal leading-normal text-[#615e5e] hover:underline cursor-pointer`}
          >
            {t("contact-page")}
          </NavLink>
        </nav>

        <div className="flex items-center max-w-[250px] sm:max-w-[180px] w-full justify-between gap-[8px]">
          {soicalContac.map((item, idx) => (
            <a
              href={item.link}
              key={idx}
              className="p-[8px] cursor-pointer hover:opacity-[0.7]"
            >
              <img
                width={24}
                height={24}
                src={item.icon}
                alt="insta downloader social contact"
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
