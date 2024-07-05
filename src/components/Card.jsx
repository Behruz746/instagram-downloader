import React from "react";

function Card({ data }) {
  return (
    <div
      className="relative flex items-center justify-center 
    max-w-[750px] sm:max-w-[300px] w-full h-[680px] sm:h-[530px] rounded-none ss:rounded-[16px] overflow-hidden"
    >
      <video
        controls
        loop
        src={data?.video_url}
        className="w-full h-[700px] sm:h-[538px]"
        id="video-player"
      ></video>
    </div>
  );
}

export default Card;
