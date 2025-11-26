export default function preset(context, opts = {}) {
    return {
      themes: [
        "docusaurus-theme-openapi-docs",
        [
          "@docusaurus/theme-classic",
          {
            customCss: require.resolve('../src/css/custom.css'),
          }
        ],
      ],
      plugins: [
        ['@docusaurus/plugin-content-docs', {...opts.docs1, id: 'docs1'}],
        ['@docusaurus/plugin-content-docs', {...opts.docs2, id: 'docs2'}],
        ['@docusaurus/plugin-content-docs', {...opts.docs3, id: 'docs3'}],
        ['@docusaurus/plugin-content-docs', {...opts.docs4, id: 'docs4'}],
        ['@docusaurus/plugin-content-pages', {
          id: 'pages',
          path: 'src/pages',
        }],
      ],
      pages: true,
    };
  }