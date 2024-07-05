import React, { useEffect } from "react";
import { icons } from "../constans";
import { useSelector } from "react-redux";

const img = "/img/photo_2024-07-03_14-13-48.jpg";

function Card({ data }) {
  const { isLoad } = useSelector((state) => state.reels);
  // const { image_versions } = data;

  useEffect(() => {
    const videoEl = document.querySelector("#video-player");
  }, []);

  // // video data
  // console.log(data?.metrics?.comment_count, "comment count");
  // console.log(data?.metrics?.like_count, "like count");
  // console.log(data?.metrics?.user_follower_count, "user followers count");
  // console.log(data?.metrics?.view_count, "view count");

  // // user profile
  // console.log(data?.metrics?.user_media_count, "user media count");
  // console.log(data?.owner?.full_name, "user name");
  // console.log(data?.owner?.profile_pic_url, "user media count");

  // // videos
  // console.log(data?.video_url, "video url");

  // // images
  // console.log(data?.thumbnail_url, "video img url");
  // console.log(
  //   data?.image_versions?.additional_items?.first_frame?.url,
  //   "video first_frame img url"
  // );
  // console.log(
  //   data?.image_versions?.additional_items?.igtv_first_frame?.url,
  //   "video igtv_first_frame img url"
  // );
  return (
    <div
      className="relative flex items-center justify-center 
    max-w-[750px] sm:max-w-[300px] w-full h-[680px] sm:h-[530px] rounded-none ss:rounded-[16px] overflow-hidden bg-linear-blue"
    >
      <button
        className="flex items-center justify-center w-[40px] h-[40px] rounded-full 
      bg-white absolute top-[0%] right-[0%] -translate-x-[25%] -translate-y-[-25%] cursor-pointer overflow-hidden"
      >
        <img
          width={40}
          height={40}
          src={data && data?.owner?.profile_pic_url}
          alt="logo"
        />
        {/* <img width={26} height={16} src={icons.blueLogo} alt="logo" /> */}
      </button>
      {/* 
      <video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
  Your browser does not support the video tag.
</video> */}

      <video
        controls
        loop
        src={data?.video_url}
        className="w-full h-[700px] sm:h-[538px]"
        id="video-player"
      ></video>

      {/* <img
        width={320}
        height={520}
        loading="lazy"
        src={`https://scontent-fra5-2.cdninstagram.com/v/t51.29350-15/405498553_1517381515771977_3635982107064409082_n.jpgb2RlX3RhZyI6ImltYWdlX3VybGdlbi43MjB4MTI4MC5zZHIuZjI5MzUwIn0&_nc_ht=scontent-fra5-2.cdninstagram.com&_nc_cat=109&_nc_ohc=GPVidopTQvEQ7kNvgEBSnfU&edm=AAJvWQUBAAAA&ccb=7-5&ig_cache_key=MzI0ODMyMDc2ODg3MjE4NzkxMg%3D%3D.2-ccb7-5&oh=00_AYBgV5pWucWxNVHlbUsbrww7YhQp__mEIWUd_uCqenRwtg&oe=668D71CF&_nc_sid=d9ef58`}
        // src={data && data?.thumbnail_url}
        className="w-[720px] xs:max-w-[320px] h-[520px] object-cover z-[40] relative"
        alt="insta downloader video image"
      /> */}
    </div>
  );
}

export default Card;
