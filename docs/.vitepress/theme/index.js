import MyLayout from "./myLayout.vue"


import './styles/fonts.css'
import './styles/vars.css'
import './styles/base.css'
import './styles/utils.css'
import './styles/components/custom-block.css'
import './styles/components/vp-code.css'
import './styles/components/vp-doc.css'
import './styles/components/vp-sponsor.css'


import DefaultTheme from 'vitepress/theme'

export default {
    ...DefaultTheme,
    Layout: MyLayout ,
    NotFound: () => "custom 404",
    // enhanceApp({ app,router,siteData})
}
