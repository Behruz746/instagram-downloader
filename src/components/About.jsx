import React from "react";
import { styles, textStyles } from "../util/styles";

function About({ img, title, text, reverse }) {
  return (
    <section className={`w-full ${styles.sectionMarginY}`}>
      <div
        className={`${styles.container} flex items-start ${
          reverse ? "flex-row-reverse" : "flex-row"
        } justify-between gap-[10px]`}
      >
        <div className="max-w-[661px] flex flex-col gap-[10px] sm:gap-[18px]">
          <h1
            className={`${reverse ? "max-w-[611px]" : "max-w-[540px]"} ${
              textStyles.title
            }`}
          >
            {title}
          </h1>
          <p className={`${textStyles.text}`}>{text}</p>
        </div>
        <div>
          <img
            width={389}
            height={389}
            loading="lazy"
            src={img}
            alt="insta downloader about image"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
