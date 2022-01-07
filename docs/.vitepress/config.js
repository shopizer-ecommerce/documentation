module.exports = {
  title: 'Shopizer Technical Documentation',
  description: 'Just playing around.',
  base:"/",
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/shopizer-cart.png' }]
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
    logo: '/shopizer-cart.png',
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
      children: [
        {
          text: 'What is Shopizer',
          link: '/whatisshopizer/default',
          collapsable: false,
        },
        { text: 'Shopizer architecture', link: '/architecture/Current' },
        { text: 'Beginning with Shopizer', link: '/init/Current' },
        { text: 'Build and run locally', link: '/buildandrunlocally/Current' },
        { text: 'Technical documentation', link: '/documentation/default' },
        { text: 'Video tutorials', link: '/documentation/videotutorials' },
        { text: 'Run Shopizer from Docker image', link: '/docker/default' },
        { text: 'Run using Docker Compose', link: '/docker/compose' },
        { text: 'Run in the cloud', link: '/cloud/default' },
        { text: 'Contribute to Shopizer', link: '/contribute/default' },
      ],
    },
    {
      text: 'Shopizer Configuration',
      children: [
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
      children: [
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
          children: [
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
      children: [
        {
          text: 'Country and Zones reference data',
          link: '/schema/country/default',
          collapsable: false,
        },
      ],
    },
    {
      text: 'REST api',
      children: [
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
      children: [
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
      children: [
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
      children: [
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
          children: [
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
      children: [
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
