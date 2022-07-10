module.exports = {
  title: 'Shopizer',
  description: 'Technical documentation for Shopizer e-commerce headless',
  base:"/",
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: 'images/favicon.ico' }]
  ],

  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/shopizer-ecommerce' }
    ],
    editLinks: true,
    algolia: {
      appId: 'FMFYCPWOUC',
      apiKey: 'fe7640b4cfad5ddb5f4ddeaaac8a201e',
      indexName: 'docs_test',
      searchParameters: {
        facetFilters: ['tags:guide,api'],
        
      }
    },
    docsDir: 'docs',
    docsBranch: 'master',
    search: true,
    searchMaxSuggestions: 10,
    title: 'shopizer',
    logo: '/images/ID.jpg',
    navbar: true,
    sidebar: {
      '/': getMainSidebar(),
    },
  },
};


function getMainSidebar() {
  return [
    {
      text: 'Getting started',
      collapsable: true,
      items: [
        { text: 'What is Shopizer', link: '/what-is-shopizer' },
        { text: 'Run Shopizer docker containers', link: '/docker' },
        { text: 'Build and run Shopizer', link: '/build-and-run' }
      ],
    },
    {
      text: 'REST API Reference',

      items: [
        {
          text: 'Products REST API',
          link: '/api/products/index.md',
          collapsable: true,
        }        
      ]
    },
  ]

}
