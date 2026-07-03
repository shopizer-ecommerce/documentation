import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

export default withMermaid(
  defineConfig({
  title: "Shopizer 4.X documentation",
  description: "Shopizer 4.X documentation",
  themeConfig: {
    logo: '/ID.jpg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting started', link: '/getting-started/' }
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Introduction', link: '/guide/' },
          { text: 'Getting Started', link: '/guide/getting-started' },
          { text: 'Deploy Shopizer', link: '/guide/configure-shopizer' },
          { text: 'Configure Shopizer', link: '/guide/deploy-shopizer',
            items: [
              { text: 'Build the services from the source code', link: '/guide/deploy-shopizer-aws' },
              { text: 'Build the services from the source code', link: '/guide/deploy-shopizer-aws' },
              { text: 'Configure the database', link: '/guide/deploy-shopizer-aws' },
              { text: 'Configure the security', link: '/guide/deploy-shopizer-azure' },
              { text: 'Deploy Shopizer on AWS EKS', link: '/guide/deploy-shopizer-aws' }
            ]
           },
           { text: 'Model', link: '/guide/model' },
          
        ]
      },
      {
        text: 'Getting started',
        items: [
          { text: 'Getting Started', link: '/getting-started' },
          { text: 'Run Shopizer Locally', link: '/getting-started/installation' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/shopizer-ecommerce/shopizer' }
    ]
  }
  })
)

