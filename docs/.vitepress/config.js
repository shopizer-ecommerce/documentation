module.exports = {
  title: 'Shopizer',
  description: 'Technical documentation for Shopizer e-commerce headless',
  base:"/",
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/fav.png' }]
  ],

  themeConfig: {
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
      items: [
        { text: 'What is Shopizer', link: '/what-is-shopizer' },
        { text: 'Build and run Shopizer', link: '/build-and-run' }
      ],
    },
    {
      text: 'Shopizer Configuration',
      items: [
        {
          text: 'Configuration',
          link: '/documentation/configuration/default',
          collapsable: false,
        },
        {
          text: 'Database',
          link: '/documentation/database/default',
          collapsable: false,
        },
        {
          text: 'Local configuration of ElasticSearch',
          link: '/documentation/search/cloud',
        },
        {
          text: 'Elastic Cloud configuration',
          link: '/documentation/search/search',
        },
      ],
    },
    {
      text: 'Commerce software',
      collapsable: false,
      items: [
        { text: 'Administration of users', link: '/software/users/users' },
        {
          text: 'Merchants and stores administration',
          link: '/software/vendors/vendors',
          collapsable: false,
        },
        {
          text: 'Catalog management',
          link: '/markdown/notavailable',
          collapsable: false,
        },
        {
          text: 'Shopping cart functions',
          link: '/markdown/notavailable',
          collapsable: false,
        },
        {
          text: 'Ordering functions',
          link: '/markdown/notavailable',
          collapsable: false,
        },
        {
          text: 'Customer functions',
          link: '/markdown/notavailable',
          collapsable: false,
        },
        {
          text: 'Shopizer translation',
          link: '/software/translation',
          collapsable: false,
        },
        {
          text: 'Rules system',
          link: '/markdown/notavailable',
          collapsable: false,
        },
        {
          text: 'Rules system',
          items: [
            {
              text: 'What are modules',
              link: '/markdown/notavailable',
              collapsable: false,
            },
            {
              text: 'Shipping module',
              link: '/markdown/notavailable',
              collapsable: false,
            },
            {
              text: 'Payment module',
              link: '/documentation/modules/payment',
              collapsable: false,
            },
          ],
        },
      ],
    },
    {
      text: 'Database schema',
      items: [
        {
          text: 'Country and Zones reference data',
          link: '/schema/country/default',
          collapsable: false,
        },
      ],
    },
    {
      text: 'REST api',
      items: [
        {
          text: 'Swagger documentation',
          link: '/notavailable',
          collapsable: false,
        },
        {
          text: 'Creating new REST services',
          link: '/notavailable',
          collapsable: false,
        },
        {
          text: 'Handling REST errors',
          link: '/notavailable',
          collapsable: false,
        },
      ],
    },
    {
      text: 'Shopizer security',
      items: [
        {
          text: 'Admin authentication',
          link: '/markdown/notavailable',
          collapsable: false,
        },
        {
          text: 'Customer authentication',
          link: '/markdown/notavailable',
          collapsable: false,
        },
        {
          text: 'REST api authentication',
          link: '/markdown/notavailable',
          collapsable: false,
        },
      ],
    },
    {
      text: 'Shopizer metrics',
      items: [
        {
          text: 'Configure analytics',
          link: '/markdown/notavailable',
          collapsable: false,
        },
        {
          text: 'Discover Shopizer e-commerce data',
          link: '/markdown/notavailable',
          collapsable: false,
        },
      ],
    },
    {
      text: 'Monolith deploy',
      items: [
        {
          text: 'Deploy Shopizer on premise',
          link: '/markdown/notavailable',
          collapsable: false,
        },
        {
          text: 'Deploy Shopizer on AWS',
          link: '/markdown/notavailable',
          collapsable: false,
        },
        {
          text: 'Deploy Shopizer on various clouds',
          collapsable: false,
          items: [
            {
              text: 'Catalog service',
              link: '/markdown/notavailable',
              collapsable: false,
            },
            {
              text: 'AWS Lightsail simple deployment',
              link: '/markdown/notavailable',
              collapsable: false,
            },
            {
              text:
                'AWS Lightsail with node - Angular admin - Shopizer backend',
              link: '/markdown/notavailable',
              collapsable: false,
            },
          ],
        },
      ],
    },
    {
      text: 'Microservices deploy',
      items: [
        {
          text: 'Catalog service',
          link: '/markdown/notavailable',
          collapsable: false,
        },
        {
          text: 'User service',
          link: '/markdown/notavailable',
          collapsable: false,
        },
        {
          text: 'Shipping service',
          link: '/markdown/notavailable',
          collapsable: false,
        },
        {
          text: 'Common module',
          link: '/markdown/notavailable',
          collapsable: false,
        },
        {
          text: 'Payment service',
          link: '/markdown/notavailable',
          collapsable: false,
        },
      ],
    },
  ];
}