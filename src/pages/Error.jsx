import React from "react";
import { NavLink, useRouteError } from "react-router-dom";
import { textStyles } from "../util/styles";

function Error() {
  const error = useRouteError();
  if (error.status === 404) {
    return (
      <div className="w-full h-screen flex flex-col justify-center items-center gap-[10px]">
        <h1 className={`font-allerta ${textStyles.title}`}>
          {error.statusText}: {error.status}
        </h1>
        <NavLink
          to={"/"}
          className="px-[20px] py-[15px] bg-linear-blue text-[#fff] cursor-pointer rounded-[8px] hover:bg-[#333]"
        >
          Return to home page
        </NavLink>
      </div>
    );
  }

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-[10px]">
      <h1 className={`font-allerta ${textStyles.title}`}>
        {error.message} <span className="text-[red]">:(</span>
      </h1>
    </div>
  );
}

export default Error;
