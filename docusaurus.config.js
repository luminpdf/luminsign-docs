// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const path = require('path');

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/palenight');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Lumin Sign Developer Docs',
  tagline: 'Add a signing workflow to your app',
  url: 'https://luminsign-docs.github.io',
  baseUrl: '/luminsign-docs/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon-32x32.png',
  trailingSlash: true,

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

  themes: ['docusaurus-theme-redoc'],

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          sidebarCollapsible: false,
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/luminpdf/luminsign-docs/blob/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],

    [
      'redocusaurus',
      {
        config: '/Users/mac/Documents/Project/bananasign-docs/redocly.yaml',
        specs: [
          {
            id: 'oauth2-yml',
            spec: 'openapi/oauth2/openapi.yaml',
          },
          {
            id: 'contract-yml',
            spec: 'openapi/contract/openapi.yaml',
          },
        ],
      }
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '',
        logo: {
          alt: 'Bananasign',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'deprecated/intro',
            position: 'left',
            label: 'Docs (Deprecated)',
          },
          {
            type: 'doc',
            docId: 'api/intro',
            position: 'left',
            label: 'Docs',
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
            title: 'API Reference',
            items: [
              {
                label: 'Docs (Deprecated)',
                to: '/docs/deprecated/intro',
              },
              {
                label: 'Docs',
                to: '/docs/api/intro',
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
                label: 'Discord',
                href: 'https://discordapp.com/invite/luminpdf',
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
        copyright: `Copyright © ${new Date().getFullYear()} Lumin PDF, Inc`,
      },
      prism: {
        additionalLanguages: ['http'],
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
