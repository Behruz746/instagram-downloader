import axios from "axios";
import cheerio from "cheerio";
import qs from "qs";

const headers = {
  Accept: "*/*",
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

const ProjectVideo = {
  async postVideo(url) {
    const urlData = {
      q: url, // URL parametresini burada kullanın
      t: "media",
      lang: "en",
    };

    try {
      const { data } = await axios.post("/ajaxSearch", qs.stringify(urlData), {
        headers,
      });

      const $ = cheerio.load(data);
      const finter1 = $(".download-items");

      if (finter1.length === 0) {
        throw new Error("Video not found or structure changed.");
      }

      const videoImg = finter1.find(".download-items__thumb img").attr("src");
      const videoSaveLink = finter1.find(".download-items__btn a").attr("href");

      const response = {
        img: videoImg,
        video: videoSaveLink,
      };

      console.log(response);

      return response;
    } catch (error) {
      console.error("Error fetching video:", error);
      throw error; // veya uygun bir hata yönetimi
    }
  },
};

export default ProjectVideo;
