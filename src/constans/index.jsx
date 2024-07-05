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
  { text: "home-page", link: "/", page: true },
  { text: "about-page", link: "#about" },
  { text: "contact-page", link: "/contact", page: true },
];

const languages = [
  { code: "en", name: "English", countryCode: "gb" },
  { code: "uz", name: "O'zbekcha", countryCode: "uz" },
  { code: "ru", name: "Русский", countryCode: "ru" },
  { code: "uk", name: "Українська", countryCode: "ua" },
  { code: "tr", name: "Türkçe", countryCode: "tr" },
  { code: "ar", name: "العربية", countryCode: "sa", dir: "rtl" },
  { code: "chi", name: "中文", countryCode: "cn" },
  { code: "jp", name: "にほんご", countryCode: "jp" },
  { code: "kr", name: "한국어", countryCode: "kr" },
];

const soicalContac = [
  { icon: icons.instagram, link: "#" },
  { icon: icons.telegram, link: "#" },
  { icon: icons.facebook, link: "#" },
  { icon: icons.webSiteLogo, link: "#" },
];

const selectLangSwitch = (currnetLang, setCountry) => {
  switch (currnetLang) {
    case "en":
      setCountry("English");
      break;
    case "uz":
      setCountry("O'zbekcha");
      break;
    case "ru":
      setCountry("Русский");
      break;
    case "uk":
      setCountry("Українська");
      break;
    case "tr":
      setCountry("Türkçe");
      break;
    case "ar":
      setCountry("العربية");
      break;
    case "chi":
      setCountry("中文");
      break;
    case "jp":
      setCountry("にほんご");
      break;
    case "kr":
      setCountry("한국어");
      break;
    default:
      setCountry("none");
      break;
  }
};

export { images, icons, soicalContac, menu, languages, selectLangSwitch };
