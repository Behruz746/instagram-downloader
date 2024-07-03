const images = {
  imgAbout1: "/img/webp/about-img01.webp",
  imgAbout2: "/img/webp/about-img02.webp",
};

const icons = {
  titleLogo: "/img/svg/title-logo.svg",
  menuIcon: "/img/svg/menu-icon.svg",
  webLogo: "/img/svg/web-logo.svg",
  arrow: "/img/svg/arrow-icon.svg",
  webSiteLogo: "/img/svg/behruz-logo.svg",
  facebook: "/img/svg/facebook-logo.svg",
  instagram: "/img/svg/instagram-logo.svg",
  telegram: "/img/svg/telegram-logo.svg",
  clear: "/img/svg/clear-icon.svg",
  lightLogo: "/img/svg/light-logo.svg",
  blueLogo: "/img/svg/blue-logo.svg",
  downloadIcon: "/img/svg/download-icon.svg",
  playIcon: "/img/svg/play.svg",
};

const menu = [
  { text: "Download", link: "#downloader" },
  { text: "About", link: "#about" },
  { text: "Contect", link: "/", page: true },
];

const lang = [
  {
    code: "en",
    lang: "English",
  },
  {
    code: "uz",
    lang: "O’zbek",
  },
  {
    code: "ru",
    lang: "Русский",
  },
  {
    code: "uk",
    lang: "Українська",
  },
  {
    code: "tr",
    lang: "Türkçe",
  },
  {
    code: "ar",
    lang: "عربي",
  },
  {
    code: "chi",
    lang: "中国人",
  },
  {
    code: "jp",
    lang: "日本語",
  },
  {
    code: "kr",
    lang: "한국인",
  },
];

const soicalContac = [
  { icon: icons.instagram, link: "#" },
  { icon: icons.telegram, link: "#" },
  { icon: icons.facebook, link: "#" },
  { icon: icons.webSiteLogo, link: "#" },
];

export { images, icons, soicalContac, menu, lang };
