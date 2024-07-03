import React from "react";
import { styles, textStyles } from "../util/styles";

function About({ img, title, text, reverse }) {
  return (
    <section className={`w-full ${styles.sectionMarginY}`}>
      <div
        className={`${styles.container} flex-col flex items-start ${
          reverse ? "sm:flex-row-reverse" : "sm:flex-row"
        } justify-between gap-[10px]`}
      >
        <div className="max-w-[661px] flex flex-col gap-[10px] sm:gap-[18px]">
          <h1
            className={`${reverse ? "max-w-[611px]" : "max-w-[540px]"} ${
              textStyles.title2
            }`}
          >
            {title}
          </h1>
          <p className={`${textStyles.text}`}>{text}</p>
        </div>
        <div className="m-auto sm:m-[0] max-w-[389px] h-auto">
          <img
            width={389}
            height={389}
            loading="lazy"
            src={img}
            className="max-w-[250px] sm:max-w-[389px] w-full h-auto"
            alt="insta downloader about image"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
