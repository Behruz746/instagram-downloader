import React from "react";
import { useTranslation } from "react-i18next";
import { styles, textStyles } from "../util/styles";
import Cookies from "js-cookie";

function PrivacyPolicy() {
  const { t } = useTranslation();
  const currentLangCode = Cookies.get("i18next");
  const setFont = `${
    currentLangCode === "ru" || "uk" ? "font-arial" : "font-allerta"
  }`;

  return (
    <>
      <section className={`w-full ${styles.sectionMarginY}`}>
        <div
          className={`${styles.container} flex flex-col gap-[20px]`}
        >
          <div className="w-full flex flex-col">
            <h1 className={`${setFont} ${textStyles.title} text-dark`}>
              {t("privacy-policy-title")}
            </h1>
            <p className={`${setFont} ${textStyles.text} text-[#666262]`}>
              {t("privacy-policy-text")}
            </p>
          </div>

          <div className="w-full flex flex-col">
            <h1 className={`${setFont} ${textStyles.title2} text-dark`}>
              {t("privacy-policy-personal-title")}
            </h1>
            <p className={`${setFont} ${textStyles.text} text-[#666262]`}>
              {t("privacy-policy-personal-text")}
            </p>
          </div>

          <div className="w-full flex flex-col">
            <h1 className={`${setFont} ${textStyles.title2} text-dark`}>
              {t("privacy-policy-non-personal-title")}
            </h1>
            <p className={`${setFont} ${textStyles.text} text-[#666262]`}>
              {t("privacy-policy-non-personal-text")}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default PrivacyPolicy;
