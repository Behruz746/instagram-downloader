import React from "react";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";
import { styles, textStyles } from "../util/styles";

function Contact() {
  const { t } = useTranslation();
  const currentLangCode = Cookies.get("i18next");
  const setFont = `${
    currentLangCode === "ru" || "uk" ? "font-arial" : "font-allerta"
  }`;

  return (
    <>
      <section
        className={`w-full ${styles.container} ${styles.sectionMarginY}`}
      >
        <div className="w-full flex flex-col gap-[10px]">
          <h1 className={`${setFont} ${textStyles.title}`}>
            {t("contact-us-title")}
          </h1>
          <p className={`${setFont} ${textStyles.text} text-[#666262]`}>
            {t("contact-us-text")}
          </p>
          <div className="flex items-center gap-[5px]">
            <p className={`${setFont} ${textStyles.text} text-[#666262]`}>
              Email:
            </p>
            <a
              href="mailto:madaminovbehruz746@gmail.com"
              className={`${setFont} ${textStyles.text} text-[#521ced] cursor-pointer`}
              target="_blank"
            >
              madaminovbehruz746@gmail.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
