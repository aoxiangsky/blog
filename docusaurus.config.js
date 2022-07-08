// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "时光飞逝",
  tagline: "Time goes by",
  url: "https://aoxiang.tech",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/logo.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "XiangAo", // Usually your GitHub org/user name.
  projectName: "time goes by", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  // themes: ['@docusaurus/theme-search-algolia'],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        hideOnScroll: true,
        title: "时光飞逝",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "旅途",
          },
          {
            type: "docSidebar",
            sidebarId: "web",
            position: "left",
            label: "Web",
          },
          {
            type: "docSidebar",
            sidebarId: "computerScience",
            position: "left",
            label: "计算机科学",
          },
          {
            type: "docSidebar",
            sidebarId: "other",
            position: "left",
            label: "其他",
          },
          {
            href: "https://github.com/aoxiangsky",
            label: "GitHub",
            position: "right",
          },
          {
            href: "https://leetcode.com/XiangAo/",
            label: "LeetCode",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [],
        copyright: `Copyright © 2022-present Mr.Ao | <a href="https://beian.miit.gov.cn/" target="_blank">湘ICP备2020024114号</a>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
