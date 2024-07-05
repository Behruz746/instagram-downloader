import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReelStart, getReelSuccess, getReelFailure } from "../slice/reels";
import ProjectData from "../service/video";
import { useTranslation } from "react-i18next";
import { icons, images } from "../constans";
import { styles, textStyles } from "../util/styles";
import { Card, About, VideoDetail } from "../components";
import { Input, Loader } from "../ui";

// https://www.instagram.com/reels/C0UWodpJogI/

function Home() {
  const { t } = useTranslation();
  const { reel, isLoad } = useSelector((state) => state.reels);
  const dispatch = useDispatch();

  console.log(isLoad);

  // console.log(reel);

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
              <h1 className={`font-allerta text-dark ${textStyles.title}`}>
                {t("input-title")}
              </h1>
            </div>
            <Input />
          </div>

          {reel === null ? null : <>{isLoad ? <Loader /> : <VideoDetail />}</>}
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
