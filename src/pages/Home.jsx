import React from "react";
import { icons, images } from "../constans";
import { styles, textStyles } from "../util/styles";
import { Card, About } from "../components";
import { Input } from "../ui";

function Home() {
  return (
    <>
      <section
        className={`w-full mt-[30px] sm:mt-[60px] lg:mt-[100px] ${styles.sectionMarginY}`}
      >
        <div
          className={`${styles.container} flex flex-col items-start gap-[20px] sm:gap-[40px]`}
        >
          <div className="max-w-[608px]">
            <h1 className={`font-allerta text-dark ${textStyles.title}`}>
              Download Insta reels, post, story and IGTV
            </h1>
          </div>
          <Input />
          <div className="w-full flex justify-center">
            <div className="flex items-start gap-[20px]">
              <Card />
              <div className="flex flex-col gap-[15px]">
                <button className="flex items-center justify-between gap-[8px] py-[15px] px-[20px] bg-linear-blue rounded-[8px] cursor-pointer text-white text-[16px] text-normal leading-[100%]">
                  <img width={24} height={24} src={icons.downloadIcon} alt="download icon" />
                  Download video
                </button>
                <button className="flex items-center justify-between gap-[8px] py-[15px] px-[20px] bg-linear-blue rounded-[8px] cursor-pointer text-white text-[16px] text-normal leading-[100%]">
                  <img width={24} height={24} src={icons.downloadIcon} alt="download icon" />
                  Download image
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <About
        img={images.imgAbout1}
        title={"Insta Downloader - Online  Downloader"}
        text={
          "How to download Instagram photos and videos? How to download videos from Instagram privately? These are the questions that many Instagram users are interested in. In this article I will show you how to download photos and videos from Instagram using the online Insta Downloader tool."
        }
        reverse={true}
      />
      <About
        img={images.imgAbout2}
        title={"What can Insta Downloader do?"}
        text={
          "Insta Downloader is an Instagram downloader, allow to download content (videos, photos, story, Insta reels, IGTV) from Instagram in best quality. Download Instagram photos and videos on web browser, support any device PC, tablet, iPhone, Android."
        }
      />
    </>
  );
}

export default Home;
