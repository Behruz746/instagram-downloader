import axios from "axios";

const getReelCode = (url) => {
  const sliceUrl = url.replace("reels", "reel");
  const regex = /reel\/([^/]+)\//;
  const match = sliceUrl.match(regex);
  return match ? match[1] : null;
};

const ProjectData = {
  async getVideo(code) {
    const options = {
      method: "GET",
      url: "https://instagram-scraper-api2.p.rapidapi.com/v1/post_info",
      params: {
        code_or_id_or_url: getReelCode(code),
        include_insights: "true",
      },
      headers: {
        "x-rapidapi-key": "547797ee56mshc75eea80117c5d1p14949fjsn519a5f3e4811",
        "x-rapidapi-host": "instagram-scraper-api2.p.rapidapi.com",
      },
    };

    const { data } = await axios.request(options);
    return data;
  },
};

export default ProjectData;
