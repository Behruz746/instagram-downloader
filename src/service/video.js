import axios from "axios";
import qs from "qs";
import cheerio from "cheerio";

async function getVid() {
  const url = "https://saveig.app/api/ajaxSearch";
  const data = {
    q: "https://www.instagram.com/p/C891DFLNxC7/",
    t: "media",
    lang: "en",
  };

  const myHeaders = new Headers({
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  });

  const headers = {
    Accept: "*/*",
    "Access-Control-Allow-Origin": "*",
    "Accept-Encoding": "gzip, deflate, br, zstd",
    "Accept-Language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7,uz;q=0.6,es;q=0.5",
    "Content-Type": "application/x-www-form-urlencoded",
    Origin: "https://saveig.app",
    Referer: "https://saveig.app/",
    "Sec-Ch-Ua":
      '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
    "Sec-Ch-Ua-Mobile": "?0",
    "Sec-Ch-Ua-Platform": '"Windows"',
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-site",
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
  };

  axios
    .post(url, qs.stringify(data), { headers, mode: "cors", cache: "no-cache" })
    .then((res) => {
      const x = res.data;
      const y = x.data;
      const videoImg = y.videoImg; // Bu yerda cheerio o'rniga DOM API'lari bilan ishlash kerak
      const videoSaveLink = y.videoSaveLink;

      const videoData = {
        img: videoImg,
        video: videoSaveLink,
      };

      console.log(videoData);
    })
    .catch((err) => {
      console.log("Error fetching video:", err);
    });
}

export default getVid;
