import React from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";
import { images } from "../constans";
import { styles, textStyles } from "../util/styles";
import { About, VideoDetail } from "../components";
import { Input, Loader, Err } from "../ui";

function Home() {
  const { t } = useTranslation();
  const { isLoad, toggleReel, isErr } = useSelector((state) => state.reels);
  const currentLangCode = Cookies.get("i18next");
  const setFont = `${
    currentLangCode === "ru" || "uk" ? "font-arial" : "font-allerta"
  }`;

  return (
    <>
      <section
        id="downloader"
        className={`w-full mt-[30px] sm:mt-[60px] lg:mt-[100px] ${styles.sectionMarginY}`}
      >
        <div
          className={`max-w-[1230px] w-full m-auto flex flex-col items-start gap-[20px] sm:gap-[40px]`}
        >
          <div className="w-full px-[10px] sm:px-[15px] flex flex-col items-start gap-[20px] sm:gap-[40px]">
            <div className="max-w-[608px]">
              <h1 className={`${setFont} text-dark ${textStyles.title}`}>
                {t("input-title")}
              </h1>
            </div>
            <Input />
          </div>
          {!toggleReel ? null : (
            <>
              {isLoad ? (
                <Loader />
              ) : (
                <>{isErr ? <Err err={isErr} /> : <VideoDetail />}</>
              )}
            </>
          )}
        </div>
      </section>
      <About
        img={images.imgAbout1}
        title={"about-down-title"}
        text={"about-down-text"}
        reverse={true}
      />
      <About
        img={images.imgAbout2}
        title={"about-can-title"}
        text={"about-can-text"}
      />
    </>
  );
}

export default Home;
