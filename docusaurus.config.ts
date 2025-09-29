// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const {themes} = require('prism-react-renderer');
import type * as OpenApiPlugin from "docusaurus-plugin-openapi-docs";

const lightCodeTheme = themes.oneLight;
const darkCodeTheme = themes.oneDark;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Lumin Developer Docs',
  tagline: 'Build powerful document workflows with the Lumin API',
  url: 'https://luminpdf.github.io',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  // markdown: {
  //   hooks: {
  //     onBrokenMarkdownLinks: 'warn',
  //   },
  // },
  favicon: 'img/favicon-32x32.png',
  trailingSlash: true,
  
  // Additional favicon configurations
  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/img/favicon-16x16.png',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/img/favicon-32x32.png',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'icon',
        type: 'image/png',
        sizes: '96x96',
        href: '/img/favicon-96x96.png',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'shortcut icon',
        href: '/img/favicon.png',
      },
    },
  ],

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'luminpdf', // Usually your GitHub org/user name.
  projectName: 'luminsign-docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // themes: ["docusaurus-theme-openapi-docs"],

  presets: [
    [
      './presets/docusaurus-preset-multi-docs.js',
      {
        docs1: {
          id: "docs-api",
          path: 'docs/api',
          routeBasePath: 'docs/api',
          sidebarPath: require.resolve("./sidebars.js"),
          sidebarCollapsible: false,
          docItemComponent: "@theme/ApiItem",
        },
        docs2: {
          id: "docs-openapi",
          path: 'api',
          routeBasePath: 'api',
          sidebarPath: require.resolve("./api/sidebar.ts"),
          sidebarCollapsible: false,
          docItemComponent: "@theme/ApiItem",
        },
        docs3: {
          id: "docs-beta",
          path: 'docs/beta',
          routeBasePath: 'docs/beta',
          sidebarCollapsible: false,
          sidebarPath: require.resolve("./sidebars.js"),
          docItemComponent: "@theme/ApiItem",
        },
      },
    ],
  ],

  plugins: [
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: "api",
        docsPluginId: "classic",
        config: {
          api: {
            specPath: "openapi.yaml",
            outputDir: "api",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          } satisfies OpenApiPlugin.Options,
        }
      },
    ],
  ],


  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '',
        logo: {
          alt: 'Luminsign',
          src: 'img/logo.svg',
        },
        items: [
          // {
          //   type: 'doc',
          //   docId: 'beta/intro',
          //   position: 'left',
          //   label: 'Docs (Beta)',
          // },
          // {
          //   type: 'doc',
          //   docId: 'api/intro',
          //   position: 'left',
          //   label: 'Docs',
          // },
          {
            to: 'docs/api/intro',
            label: 'Docs',
          },
          {
            label: 'API Reference',
            to: '/api/lumin-api-reference',
          },
          {
            href: 'https://github.com/luminpdf/luminsign-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'API Documentation',
            items: [
              // {
              //   label: 'Docs (Beta)',
              //   to: '/docs/beta/intro',
              // },
              {
                label: 'Docs',
                to: '/docs/api/intro',
              },
              {
                label: 'API Reference',
                to: '/api/lumin-api-reference',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/luminpdf',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/luminpdf',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/luminpdf/luminsign-docs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Lumin, Inc`,
      },
      prism: {
        additionalLanguages: ['http', 'bash'],
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
