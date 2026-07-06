import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

export default withMermaid(
  defineConfig({
  title: "Shopizer 4.X documentation",
  description: "Shopizer 4.X documentation",
  themeConfig: {
    logo: '/ID.jpg',
    nav: [
      { text: 'Concept', link: '/concept' },
      { text: 'Getting Started', link: '/getting-started/' },
      { text: 'Deployment', link: '/deploy' }
    ],
    sidebar: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/getting-started/' },
      { text: 'Deployment on Kubernetes', link: '/deploy' },
      { text: 'Database Schema', link: '/guide/model' },
      { text: 'Vector Search', link: '/vector-search' },
      { text: 'Telemetry', link: '/telemetry' },
      { text: 'Use Cases', link: '/use-cases' },
      { text: 'AI', link: '/ai' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/shopizer-ecommerce/shopizer' }
    ]
  }
  })
)
