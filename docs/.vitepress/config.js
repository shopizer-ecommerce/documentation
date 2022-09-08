module.exports = {
  title: 'Shopizer',
  description: 'Technical documentation for Shopizer e-commerce headless',
  base:"/documentation/",
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
      text: 'Architecture',
      collapsable: true,
      items: [
        { text: 'Shopizer architecture', link: '/architecture/index' }
      ],
    },
    {
      text: 'REST API Reference',

      items: [
        {
          text: 'Products REST API',
          link: '/api/products/index.md',
          collapsable: true,
        },        
        {
          text: 'Shopping Cart REST API',
          link: '/api/shopping-cart/index.md',
          collapsable: true,
        }        
      ]
    },
    {
      text: 'Configurations',
      collapsable: true,
      items: [
        { text: 'Database configuration', link: '/configuration/database' },
        { text: 'Email configuration', link: '/configuration/emails' }
      ],
    },
    {
      text: 'Model',
      collapsable: true,
      items: [
        { text: 'User', link: '/model/user' },
        { text: 'Merchant', link: '/model/merchant' },
        { text: 'Country and Zones', link: '/model/country-zones' }
      ],
    },
    {
      text: 'Tools',
      collapsable: true,
      items: [
        { text: 'Translation', link: '/tools/translation' }
      ],
    },
  ]

}
