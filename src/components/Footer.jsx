import React from "react";
import { styles } from "../util/styles";
import { icons, soicalContac } from "../constans";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer
      className={`${styles.borderDarkTop} w-full mt-[30px] sm:mt-[60px] lg:mt-[113px] py-[8px] sm:py-[16px]`}
    >
      <div className={`${styles.container} flex items-center justify-between`}>
        <div className="flex items-center gap-[10px]">
          <img width={42} height={32} src={icons.webLogo} alt="" />
          <h2 className="text-[14px] text-[#615e5e] font-normal font-allerta leading-normal">
            © 2024
          </h2>
        </div>

        <nav className="flex items-center justify-between gap-[10px] max-w-[206px] w-full">
          <NavLink
            to="/"
            className="font-allerta text-[14px] font-normal leading-normal text-[#615e5e] hover:underline cursor-pointer"
          >
            Privacy Policy
          </NavLink>
          <NavLink
            to="/"
            className="font-allerta text-[14px] font-normal leading-normal text-[#615e5e] hover:underline cursor-pointer"
          >
            Contect
          </NavLink>
        </nav>

        <div className="flex items-center gap-[8px]">
          {soicalContac.map((item, idx) => (
            <a href={item.link} key={idx} className="p-[8px] cursor-pointer hover:opacity-[0.7]">
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
