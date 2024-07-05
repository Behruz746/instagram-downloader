import React from "react";
import { useTranslation } from "react-i18next";
import { styles, textStyles } from "../util/styles";
import Cookies from "js-cookie";

function About({ img, title, text, reverse }) {
  const { t } = useTranslation();
  const currentLangCode = Cookies.get("i18next");
  const setFont = `${
    currentLangCode === "ru" || "uk" ? "font-arial" : "font-allerta"
  }`;

  return (
    <section id="about" className={`w-full ${styles.sectionMarginY}`}>
      <div
        className={`${styles.container} flex-col flex items-start ${
          reverse ? "sm:flex-row-reverse" : "sm:flex-row"
        } justify-between gap-[10px]`}
      >
        <div className="max-w-[661px] flex flex-col gap-[10px] sm:gap-[18px]">
          <h1
            className={`${setFont} ${
              reverse ? "max-w-[611px]" : "max-w-[540px]"
            } ${textStyles.title2}`}
          >
            {t(title)}
          </h1>
          <p className={`${setFont} ${textStyles.text}`}>{t(text)}</p>
        </div>
        <div className="m-auto sm:m-[0] max-w-[389px] h-auto">
          <img
            width={389}
            height={389}
            loading="lazy"
            src={img}
            className="max-w-[250px] sm:max-w-[389px] w-full h-auto"
            alt="insta downloader about image"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
