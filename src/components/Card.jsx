import React from "react";
import { icons } from "../constans";

const img =
  "https://igcdn.xyz/?token=0ab995a58f497c15acec157ba330c4945441e4aa9afe7bc3c289f35c8cf35556&time=1719981835&file=https%3a%2f%2fscontent.cdninstagram.com%2fv%2ft51.29350-15%2f435309636_1125220978619915_2753367180115574394_n.jpg%3fstp%3ddst-jpg_e15%26_nc_ht%3dscontent-arn2-1.cdninstagram.com%26_nc_cat%3d111%26_nc_ohc%3d5EfB3qnOB7EQ7kNvgEwmF_U%26edm%3dAP_V10EBAAAA%26ccb%3d7-5%26oh%3d00_AYBDmJA6U6zsgT-zMuG6dT86SLG4Fdu_KX6Jjcr9GfPGOQ%26oe%3d6689D08D%26_nc_sid%3d2999b8";

function Card() {
  return (
    <div className="relative w-[320px] h-[520px] rounded-[16px] overflow-hidden bg-linear-blue">
      <button
        className="flex items-center justify-center w-[40px] h-[40px] rounded-full 
      bg-white absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[-50%] cursor-pointer"
      >
        <img
          width={26}
          height={16}
          src={icons.playIcon}
          // src={icons.blueLogo}
          alt="logo"
        />
      </button>

      <img
        width={320}
        height={520}
        loading="lazy"
        src={img}
        className="max-w-[320px] h-[520px] object-cover"
        alt="insta downloader video image"
      />
    </div>
  );
}

export default Card;
