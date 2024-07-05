import React from "react";
import { textStyles } from "../util/styles";

function Err({ err }) {
  return (
    <div
      className={`w-full "h-[80px] sm:h-[100px]"
      flex items-center justify-center bg-[#ffffff]`}
    >
      <h1
        className={`${textStyles.text} py-[10px] px-[20px] text-white bg-[red] rounded-[8px]`}
      >
        {err?.response?.data?.detail}
      </h1>
    </div>
  );
}

export default Err;
