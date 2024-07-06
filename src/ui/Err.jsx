import React from "react";
import { textStyles } from "../util/styles";

function Err({ err }) {
  console.log(err?.response?.data?.message);
  console.log(err?.response?.request?.status);

  return (
    <div
      className={`w-full "h-[80px] sm:h-[100px]"
      flex items-center justify-center bg-[#ffffff]`}
    >
      <h1
        className={`${textStyles.text} py-[10px] px-[20px] text-center text-white bg-[red] rounded-[8px]`}
      >
        {err?.response?.data?.message} <br /> error:{" "}
        {err?.response?.request?.status}
      </h1>
    </div>
  );
}

export default Err;
