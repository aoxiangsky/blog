const navbar = require("./navbar");
const sidebar = require("./sidebar/index");

module.exports = {
  lang: "zh-CN",
  title: "是风在吹，是心在动",
  description: "多我一个富豪会破坏生态平衡吗？！",
  head: [
    [
      "link",
      { rel: "shortcut icon", type: "image/x-icon", href: "favicon.ico" },
    ],
  ],
  themeConfig: {
    logo: "/images/logo.png",
    repo: "https://github.com/aoxiangsky",
    editLink: false,
    contributors: false,
    navbar,
    sidebar,
  },
  dest: "dist",
};
