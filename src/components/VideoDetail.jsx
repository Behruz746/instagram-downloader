import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Card } from "./";
import { icons } from "../constans";

function VideoDetail() {
  const { reel } = useSelector((state) => state.reels);
  const { t } = useTranslation();

  const downloadVideo = (url) => {
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "video.mp4"); // Fayl nomini kiriting
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  //   downloadVideo(reel?.video_versions[0]?.url);

  return (
    <div className="w-full block sm:flex justify-start sm:justify-center">
      <div className="flex max-w-[800px] w-full items-start  xs:items-center sm:items-start justify-center flex-col sm:flex-row gap-[20px]">
        <>
          <Card data={reel} />
          <div className="flex flex-col gap-[15px] w-full sm:max-w-[300px] px-[10px] sm:px-[15px]">
            <a
              href={reel?.video_versions[0]?.url}
              className="flex items-center justify-center gap-[10px] py-[15px] px-[20px] bg-linear-blue rounded-[8px] cursor-pointer text-white text-[16px] text-normal leading-[100%]"
              download="video.mp4"
              title={`${t("download-text")} video`}
              onClick={() => downloadVideo(reel?.video_versions[0]?.url)}
            >
              <img
                width={24}
                height={24}
                src={icons.downloadIcon}
                alt="download icon"
              />
              {t("download-text")} video
            </a>
          </div>
        </>
      </div>
    </div>
  );
}

export default VideoDetail;
